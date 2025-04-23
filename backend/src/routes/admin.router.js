import express from "express";
import {
  login,
  logout,
  changePassword,
  uploadProfileImage,
  adminDetails,
  sendMessage,
  getMessage,
  refresh
} from "../controllers/admin.controller.js";
import verifyJwt from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";
const router = express.Router();

router.post("/login", login);
router.post("/logout", verifyJwt, logout);
router.patch("/change-password", verifyJwt, changePassword);
router.post(
  "/upload-profile-image",
  verifyJwt,
  upload.single("profileImage"),
  uploadProfileImage
);
router.get("/details", adminDetails);
router.post("/send-message", sendMessage);
router.get("/get-message", getMessage);
router.post("/refresh", refresh);
export default router;
