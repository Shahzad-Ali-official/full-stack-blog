import { Image } from "@imagekit/react"
import { ImageKitProvider } from "@imagekit/react"
import { format } from "timeago.js"
const Comment = ({ comment }) => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8 ">
    
        <div className="flex items-center gap-4">
         {comment.user?.img ? (<ImageKitProvider urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}>  
            <Image src={comment.user.img} className="w-10 h-10 rounded-full object-cover" width={40}/>
           </ImageKitProvider>) : (
            <div className="w-10 h-10 rounded-full bg-gray-300" />
           )} 
            <span>{comment.user?.username || "Unknown User"}</span>
            <span className="text-sm text-gray-500 ">{format(comment.createdAt)}</span>
        </div>
        <div className="mt-4">
            <p>{comment.desc}</p>


        </div>
       
    </div>
  )
}

export default Comment