import { Image } from "@imagekit/react"
import { ImageKitProvider } from "@imagekit/react"
import { Link } from "react-router"


const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/*image*/}
      <div className="md:hidden xl:block xl:w-1/3 ">
        <ImageKitProvider urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}>
          <Image src="postImg.jpeg" className="rounded-2xl object-cover " width={735}  />
        </ImageKitProvider>
      </div>
      {/*details and title*/}
         <div className="flex flex-col gap-4 xl:w-2/3" >
           <Link to="/test" className="text-4xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fuga voluptas, corporis sed sit placeat doloribus ipsam.</Link>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <span>written by </span>
                <Link className="text-blue-800">Apple don</Link>
                <span>on</span>
                <Link className="text-blue-800">Web Design</Link>
                <span>2 days ago</span>
                </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis laborum excepturi laudantium dolores modi perspiciatis minima 
                    accusantium eaque ani
                    mi. Ea maiores possimus consequatur quaerat, quam veniam? Eos quis voluptatem earum?
                  </p>
                    <Link to="SinglePostList" className="underline text-blue-800 text-sm ">Read More</Link>

                </div>
          </div>

      
  )
}

export default PostListItem