import { Image } from "@imagekit/react"
import { ImageKitProvider } from "@imagekit/react"
const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8 ">
    
        <div className="flex items-center gap-4">
          <ImageKitProvider urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}>  
        <Image src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" width={40}/>
           </ImageKitProvider> 
            <span>Jhon doe</span>
            <span className="text-sm text-gray-500 ">2 days ago</span>
        </div>
        <div className="mt-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam veritatis, exercitationem ipsam assumenda explicabo hic sint praesentium soluta repudiandae eius sed eaque et impedit tenetur officia rem natus perspiciatis culpa.</p>


        </div>
       
    </div>
  )
}

export default Comment