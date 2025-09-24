import  User  from "../models/user.model.js";
import Post from "../models/post.model.js"

export const getPosts = async (req, res) =>  {
    const posts = await Post.find();
    res.status(200).json(posts);
    
};
export const getPost = async (req, res) => {
    const post = await Post.findOne({slug:req.params.slug});
    res.status(200).json(post);
    
};
export const createPost = async (req, res) => {
    const clerkUserId = req.auth().userId;
        console.log(req.headers);

    if(!clerkUserId){
        return res.status(401).json({message: "Unauthorized"});
    }
    const user = await User.findOne(clerkUserId);
    
    if(!user){
        return res.status(404).json({message: "User not found"});
    } 

     const newPost = new Post({user: user._id, ...req.body});
     
    // Save the new post
    const post = await newPost.save(); // Correctly declare and assign the new post
    res.status(200).json(post);
    
};
export const deletePost = async (req, res) => {
    const clerkUserId = req.auth().userId;
    if(!clerkUserId){
        return res.status(401).json({message: "Unauthorized"});
    }
    const user = await User.findOne({clerkUserId});
    const post = await Post.findOneAndDelete(req.params.id);
    res.status(200).json("post has been deleted");
};