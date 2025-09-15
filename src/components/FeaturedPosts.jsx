import { Image } from "@imagekit/react"
import { ImageKitProvider } from "@imagekit/react"
import { Link } from "react-router"


const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
        {/*firt*/}
        <div className=" w-full lg:w-1/2 flex flex-col gap-4">
        {/*image*/}
        <ImageKitProvider urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}>
        <Image  src="featured1.jpeg" className="rounded-3xl object-cover" />
       
        {/*details*/}
        <div className="flex items-center gap-4">
            <h1 className="font-semibold lg:text-lg">
            01
            </h1>
            <Link className="text-blue-700 lg:text-lg">Web Design</Link>
            <span className="text-gray-500">2 days ago</span>

        </div>
        {/*title*/}
        <Link to="/test" 
        className="text-xl lg:3xl font-semibold lg:font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi qui debitis doloribus fugiat animi dolore recusandae numquam.
        </Link>
        {/*image*/}
        {/*title*/}
     {/*second*/}
      </ImageKitProvider>
        </div>
         
        FeaturedPosts</div>
  )
}

export default FeaturedPosts