import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentsRouter from "./routes/comment.route.js";
import webhookRouter from "./routes/webhook.route.js";

const app = express();

// ✅ Configure CORS properly
const allowedOrigins = ["http://localhost:5173"]; // change if needed
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(clerkMiddleware());
app.use(express.json());

// ✅ Routes
app.use("/webhooks", webhookRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentsRouter);

// ✅ Error handler
//app.use((err, req, res, next) => {
//  res.status(err.status || 500).json({
//    message: err.message || "Something went wrong",
//    status: err.status,
//    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
//  });
//});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  connectDB();
  
  console.log(`✅ Server is running on port ${port}`);
});
