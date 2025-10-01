import ImageKit from "imagekit";
import  User  from "../models/user.model.js";
import Post from "../models/post.model.js"
import dotenv from "dotenv";
dotenv.config();

export const getPosts = async (req, res) =>  {
    const posts = await Post.find();
    res.status(200).json(posts);
    
};
export const getPost = async (req, res) => {
    const post = await Post.findOne({slug:req.params.slug});
    res.status(200).json(post);
    
};
export const createPost = async (req, res) => {
  try {
    const { title, desc, category, content, img } = req.body;
    const clerkUserId = req.auth().userId;
    if (!clerkUserId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    if (!title || !category || !content) {
      return res.status(400).json({ message: "Title, category, and content are required." });
    }
    const user = await User.findOne({ clerkUserId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    let slug = title.replace(/ /g, "-").toLowerCase();
    let existingPost = await Post.findOne({ slug });
    let counter = 2;
    while (existingPost) {
      slug = `${slug}-${counter}`;
      existingPost = await Post.findOne({ slug });
      counter++;
    }
    const newPost = new Post({
      user: user._id,
      slug,
      title,
      desc,
      category,
      content,
      img,
    });
    const post = await newPost.save();
    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        message: "Validation failed", 
        errors: errors 
      });
    }

    res.status(500).json({ message: "Failed to create post", error: error.message });
  }
};
export const deletePost = async (req, res) => {
    const clerkUserId = req.auth().userId;
    if(!clerkUserId){
        return res.status(401).json({message: "Unauthorized"});
    }
    const user = await User.findOne({clerkUserId});
    const post = await Post.findOneAndDelete({_id: req.params.id,user: user._id,});
    res.status(200).json("post has been deleted");
};

//// Use 'require' for CommonJS syntax, typical in Node.js/Express setups
////const ImageKit = require('imagekit'); 
//// Assuming you have run: npm install imagekit
//
//// ⚠️ IMPORTANT: Verify your environment variable names. 
//// I've corrected the common 'IMAGKIT' typo to 'IMAGEKIT'.
//const IMAGEKIT_PUBLIC_KEY = process.env.IMAGEKIT_PUBLIC_KEY;
//const IMAGEKIT_PRIVATE_KEY = process.env.IMAGEKIT_PRIVATE_KEY;
//const IMAGEKIT_URL_ENDPOINT = process.env.IMAGEKIT_URL_ENDPOINT;
//
//// Add a check to ensure environment variables are loaded correctly.
//// This provides a clearer error message if the .env file is missing or misconfigured.
//if (!IMAGEKIT_PUBLIC_KEY || !IMAGEKIT_PRIVATE_KEY || !IMAGEKIT_URL_ENDPOINT) {
//  console.error("ImageKit environment variables are missing!");
//  console.error("Please check your .env file in the /backend directory.");
//  // We throw an error to stop the application from starting with a misconfiguration.
//  throw new Error("Missing ImageKit configuration. Server cannot start.");
//}
//
//// Initialize the ImageKit SDK instance
//const imagekit = new ImageKit({
//  publicKey: IMAGEKIT_PUBLIC_KEY,
//  urlEndpoint: IMAGEKIT_URL_ENDPOINT,
//  privateKey: IMAGEKIT_PRIVATE_KEY, // The private key MUST be used here
//});
// 
///**
// * @function uploadAuth
// * @description Generates the secure, short-lived authentication parameters for client-side uploads.
// * This function is used as an Express route handler.
// */
//export const uploadAuth = async (req, res) => {
//    try {
//        // ImageKit's SDK  generates the signature, token, and expire timestamp.
//        const result = imagekit.getAuthenticationParameters();
//
//        // The client-side 'authenticator' function expects this exact JSON structure.
//        res.status(200).json(result);
//    } catch (error) {
//        console.error("ImageKit Auth Generation Error:", error);
//        res.status(500).json({ error: "Failed to generate authentication parameters." });
//    }
//};
//
//const { IMAGEKIT_PUBLIC_KEY, IMAGEKIT_PRIVATE_KEY, IMAGEKIT_URL_ENDPOINT } = process.env;

// Check to ensure environment variables are loaded correctly at startup.
//if (!IMAGEKIT_PUBLIC_KEY || !IMAGEKIT_PRIVATE_KEY || !IMAGEKIT_URL_ENDPOINT) {
  //console.error("ImageKit environment variables are missing!");
  //console.error("Please check your .env file in the /backend directory.");
  // Throw an error to stop the application from starting with a misconfiguration.
  //throw new Error("Missing ImageKit configuration. Server cannot start.");
//}
//
//console.log("ImageKit ENV:", {
//  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
//  privateKey: process.env.IMAGEKIT_PRIVATE_KEY ? "loaded" : "missing",
//  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
//});
//
 const imagekit = new ImageKit({

   publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
   privateKey:  process.env.IMAGEKIT_PRIVATE_KEY,
   urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
 });

export const uploadAuth = async(req, res) => {
  try {
    const result = imagekit.getAuthenticationParameters();
    res.status(200).json(result);
  } catch (error) {
    console.error("ImageKit Auth Generation Error:", error);
    res.status(500).json({ message: "Failed to generate authentication parameters." });
  }
};