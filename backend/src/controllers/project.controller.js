import Project from "../models/project.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import {
  uploadOnCloudinary,
  deleteFromCloudinary
} from "../utils/cloudinary.js";

import Admin from "../models/admin.model.js";

const allProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({});

  res.status(200).json(new ApiResponse(200, projects, "All projects"));
});

const createProject = asyncHandler(async (req, res) => {
  const { title, description, projectType, projectLink } = req.body;
  const coverImage = req.file?.path;
  console.log(coverImage);
  const coverImageLink = await uploadOnCloudinary(coverImage);

  if (!coverImageLink?.url) {
    throw new ApiError(401, "Invalid file ");
  }

  if (!title || !description || !projectType || !coverImage) {
    throw new ApiError(401, "All fields are required");
  }

  const project = await Project.create({
    title,
    description,
    projectType,
    projectLink,
    coverImage: coverImageLink.url
  });

  const userId = req.user._id;

  const user = await Admin.findById(userId);

  await user.projects.push(project._id);
  await user.save();

  res
    .status(200)
    .json(new ApiResponse(200, project, "Project created successfully"));
});

const deleteProject = asyncHandler(async (req, res) => {
  const projectId = req.query.id;

  const project = await Project.findById(projectId);

  if (!project) throw new ApiError(401, "Invalid id doesn't find any project");

  const imageUrl = project.coverImage;
  const publicId = imageUrl.split("/").pop().split(".")[0];
  const cloudinaryResponse = await deleteFromCloudinary(publicId);

  const deletedProject = await Project.findByIdAndDelete(projectId);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        imageDeleted: cloudinaryResponse,
        projectDeleted: deletedProject
      },
      "delete project successfully"
    )
  );
});

const latestProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 }).limit(2);

  res.status(200).json(new ApiResponse(200, projects, "latest projects"));
});

export { allProjects, createProject, deleteProject ,latestProjects};
