import express from "express";
import {
  allProjects,
  createProject,
  deleteProject,
  latestProjects
} from "../controllers/project.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import verifyJwt from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/all-projects", allProjects);
router.get("/latest-projects", latestProjects);
router.post(
  "/admin/create-project",
  verifyJwt,
  upload.single("coverImage"),
  createProject
);
router.delete("/delete-project", verifyJwt, deleteProject);

export default router;
