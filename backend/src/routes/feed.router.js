import express from "express";
import verifyJwt from "../middleware/auth.middleware.js";
import {
  getFeed,
  postFeed,
  deleteFeed,
  updateFeed
} from "../controllers/feed.controller.js";
const router = express();

router.get("/get-feed", getFeed);
router.post("/post-feed",verifyJwt, postFeed);
router.delete("/delete-feed/:id",verifyJwt, deleteFeed);
router.patch("/update-feed/:id",verifyJwt, updateFeed);
export default router;
