import Admin from "../models/admin.model.js";
import Message from "../models/message.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";
import _config from "../config.js";
const generateAccessAndRefreshToken = async userId => {
  try {
    const user = await Admin.findById(userId);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (e) {
    throw new ApiError(
      404,
      "Something went wrong while generating access and refresh token"
    );
  }
};

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(401, "All fields are required");
  }
  const user = await Admin.findOne({ email });

  if (!user) {
    throw new ApiError(401, "Email and password is not correct");
  }

  const isCorrectPass = await user.isCorrectPassword(password);

  if (!isCorrectPass) {
    throw new ApiError(402, "Invalid credentials ");
  }
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const filterUser = await Admin.findById(user._id).select(
    "-password -refreshToken "
  );

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "Strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: "/"
  });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { user: filterUser, accessToken: accessToken },
        "Login successfully"
      )
    );
});

const logout = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const user = await Admin.findByIdAndUpdate(
    userId,
    {
      $set: {
        refreshToken: ""
      }
    },
    { new: true }
  );

  return res
    .status(200)
    .clearCookie("refreshToken")
    .json(new ApiResponse(200, "Logout successfully"));
});

const changePassword = asyncHandler(async (req, res) => {
  const { oldPass, newPass } = req.body;
  const userId = req.user._id;
  if (!oldPass || !newPass) {
    throw new ApiError(400, "All fileds are required");
  }
  const user = await Admin.findById(userId);

  const isCorrectPass = await user.isCorrectPassword(oldPass);

  if (!isCorrectPass) {
    throw new ApiError(401, "Invalid password");
  }

  user.password = newPass;
  user.refreshToken = "";
  await user.save();
  return res
    .status(200)
    .json(new ApiResponse(200, "Password changed successfully"));
});

const uploadProfileImage = asyncHandler(async (req, res) => {
  const imageLocalPath = req.file.path;

  if (!imageLocalPath) {
    throw new ApiError(400, "Image is required ");
  }
  const response = await uploadOnCloudinary(imageLocalPath);

  if (!response?.url) {
    throw new ApiError(401, "Invalid file ");
  }

  const userId = req.user._id;

  const newUser = await Admin.findByIdAndUpdate(
    userId,
    {
      $set: {
        profileImage: response.url
      }
    },
    { new: true }
  );
  return res.send(newUser);
});

const adminDetails = asyncHandler(async (req, res) => {
  const admin = await Admin.find({}).select(
    "-password -message -feedPost -refreshToken -messages -projects"
  );
  return res.status(200).json(new ApiResponse(200, "Admin details", { admin }));
});

const sendMessage = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    throw new ApiError(401, "All fields are required");
  }
  const messages = await Message.create({
    name,
    email,
    message
  });

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        message,
        "You message send successful we response your message as soon as possible"
      )
    );
});

const getMessage = asyncHandler(async (req, res) => {
  const message = await Message.find({});

  res.status(200).json(new ApiResponse(200, message, "All messages"));
});

const refresh = asyncHandler(async (req, res) => {
  const token = req.cookies?.refreshToken;
  console.log(token);
  if (!token) {
    throw new ApiError(402, "No token found");
  }
  const decodedToken = jwt.verify(token, _config.refresh_token_secret);
  if (!decodedToken) {
    throw new ApiError(401, "Invalid token");
  }
  const user = await Admin.findById(decodedToken._id);
  const accessToken = user.generateAccessToken();
  res.json(new ApiResponse(200, { accessToken }, "accesstoken generated"));
});

export {
  login,
  logout,
  changePassword,
  uploadProfileImage,
  adminDetails,
  sendMessage,
  getMessage,
  refresh
};
