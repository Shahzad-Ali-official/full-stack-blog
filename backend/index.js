import express from "express";
import dotenv from "dotenv";


import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentsRouter from "./routes/comment.route.js";
import webhookRouter from "./routes/webhook.route.js";
import { clerkMiddleware, requireAuth } from '@clerk/express'
import cors from "cors";
dotenv.config();
const app = express();
// Configure CORS to allow requests from the Vite development server
const allowedOrigins = ['http://localhost:5173']; // Replace 5173 if you use a different port
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
//app.use(cors({ origin: process.env.CLIENT_URL }));

app.use(clerkMiddleware());

app.use("/webhooks", webhookRouter);

app.use(express.json());
console.log("okay run");
//app.get("/test",(req,res)=>{
//    res.status(200).send("okay")
//})API call syntax
//app.get("/auth-state", (req, res) => {
//    const authState = req.auth();
//    res.json(authState);
//});
//app.get("/protect", (req, res) => {
//    const {userId} = req.auth();
//    if(!userId){
//        return res.status(401).json({message: "Unauthorized"});
//    }
//    res.status(200).json("content for logged in users");
//});
//app.get("/protect2", requireAuth() (req, res) => {
   // const {userId} = req.auth();
   // if(!userId){
   //     return res.status(401).json({message: "Unauthorized"});
   // }
  //  res.status(200).json("content for logged in users");
//});




app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentsRouter);

//app.use((err, req, res, next) => {
//
//    res.status(err.status || 500);
//
//res.json({ message: err.message || "Something went wrong",
//    status: err.status,
//    stack: err.stack,   
// });
//})
const port = process.env.PORT || 3000;

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);

    console.log("server is running!");
})