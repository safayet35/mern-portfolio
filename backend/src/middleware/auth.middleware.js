import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";
import _config from "../config.js";
import Admin from "../models/admin.model.js";

const verifyJwt = async (req, res, next) => {
  try {
    const token =
     // req.cookies?.refreshToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    console.log(token);
    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(token, _config.access_token_secret);

    const user = await Admin.findById(decodedToken._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      throw new ApiError(400, "Invalid token or token expired");
    }

    req.user = user;
    next();
  } catch (error) {
    // Pass the error to the Express error-handling middleware
    next(error);
  }
};
export default verifyJwt;
