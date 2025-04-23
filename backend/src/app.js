import express from "express";
import cors from "cors";
import errorMiddleware from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import _config from "./config.js";
const app = express();

app.use(express.static("public"));
app.use(cookieParser());

app.use(
  express.urlencoded({
    limit: "14kb",
    extended: true
  })
);
app.use(
  express.json({
    limit: "14kb"
  })
);
app.use(
  cors({
    origin: _config.cors_origin,
    credentials: true,
  })
);

// all routes goes here

import adminRoute from "./routes/admin.router.js";
import projectRoute from "./routes/project.router.js";
import feedRoute from "./routes/feed.router.js";
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1", projectRoute);
app.use("/api/v1",feedRoute)
app.use(errorMiddleware);
export default app;
