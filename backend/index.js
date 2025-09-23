import express from "express";
import dotenv from "dotenv";

import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentsRouter from "./routes/comment.route.js";
import webhookRouter from "./routes/webhook.route.js";

dotenv.config();
const app = express();
app.use("/webhooks", webhookRouter);

app.use(express.json());

console.log("okay run");
//app.get("/test",(req,res)=>{
//    res.status(200).send("okay")
//})API call syntax
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentsRouter);

app.use((err, req, res, next) => {

    res.status(err.status || 500);

res.json({ message: err.message || "Something went wrong",
    status: err.status,
    stack: err.stack,   
 });
})

app.listen(3000, () => {
    connectDB();

    console.log("server is running!");
})