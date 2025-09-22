import express from "express";
import dotenv from "dotenv";

import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentsRouter from "./routes/comment.route.js";


dotenv.config();
const app = express();
console.log("okay run");
//app.get("/test",(req,res)=>{
//    res.status(200).send("okay")
//})
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentsRouter);

app.listen(3000, () => {
    connectDB();

    console.log("server is running!");
})