import { Schema } from "mongoose";
import mongoose from "mongoose";



const userSchema = new Schema({
    clerkUserId: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        
    },
    savedPosts: {
        type: [String],
        default: []
    },
    role: {
  type: String,
  enum: ["user", "admin"],
  default: "user"
},



},
    {
        timestamps: true
    });
    export default mongoose.model("User", userSchema);
    
