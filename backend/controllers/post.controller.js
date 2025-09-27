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
  try {
    const { title, desc, category, content, img } = req.body;
    const clerkUserId = req.auth.userId;
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