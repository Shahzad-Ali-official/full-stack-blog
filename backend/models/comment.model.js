import { Schema } from "mongoose";
import mongoose from "mongoose";



const commentSchema = new Schema({
      username: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true,
        
    },
    desc: {
        type: String,
        required: true,
        
    },
    

},
    {
        timestamps: true
    });
    export default mongoose.model("Comment", commentSchema);
    
