import express  from "express";
import Post from "../models/post.model.js";
import { getPosts, getPost, createPost, deletePost } from "../controllers/post.controller.js";
const router = express.Router();

//router.get("/test",(req,res)=>{
////    res.status(200).send("post route")
//})
router.get("/", getPosts);
router.get("/:slug", getPost);
router.post("/", createPost);
router.delete("/:id", deletePost);


export default router