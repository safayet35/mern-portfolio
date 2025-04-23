import Feed from "../models/feed.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const getFeed = asyncHandler(async (req, res) => {
  const feed = await Feed.find({});

  return res.status(200).json(new ApiResponse(200, feed, "All feeds"));
});

const postFeed = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    throw new ApiError(402, "All fields are required");
  }
  const feed = await Feed.create({
    title,
    description
  });

  return res
    .status(200)
    .json(new ApiResponse(200, feed, "Feed post successfully"));
});

const deleteFeed = asyncHandler(async (req, res) => {
  const id = req.params.id;

  if (!id) {
    throw new ApiError(400, "Id not found!");
  }
  const feed = await Feed.findByIdAndDelete(id);

  if (!feed) {
    throw new ApiError(400, "Invalid id!");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, feed, "Feed deleted successfully"));
});

const updateFeed = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  
  if (!id) {
    throw new ApiError(400, "Id not found!");
  }
  if (!title || !description) {
    throw new ApiError(400, "Empty value!");
  }
  const feed = await Feed.findByIdAndUpdate(
    id,
    {
      $set: {
        title,
        description
      }
    },
    { new: true }
  );
  if (!feed) {
    throw new ApiError(401, "Invalid id");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, feed, "Updated successfully"));
});

export { getFeed, postFeed, deleteFeed, updateFeed };
