import { Image } from "@imagekit/react"
import { ImageKitProvider } from "@imagekit/react"
import { Link } from "react-router"


const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
        {/*firt*/}
      <div className=" w-full lg:w-1/2 flex flex-col gap-4" >
        {/*image*/}
          <ImageKitProvider urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}>
          <Image  src="featured1.jpeg" className="rounded-3xl object-cover" width={735} />
       
            {/*details*/}
        <div className="flex items-center gap-4">
            <h1 className="font-semibold lg:text-lg">
              01
            </h1>
            <Link className="text-blue-700 lg:text-lg">Web Design</Link>
            <span className="text-gray-500">2 days ago</span>

        </div>
        {/*title*/}
          <Link to="/test"className="text-xl lg:3xl font-semibold lg:font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi qui debitis doloribus fugiat animi dolore recusandae.
          </Link>
           </ImageKitProvider>
        </div>
             {/*others*/}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">        
          {/*second*/}
           <div className="lg:h-1/3 flex justify-between gap-4">
           <ImageKitProvider urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT }>
              <Image src="featured2.jpeg" className="rounded-3xl object-cover w-1/3 aspect-video" width={298} />
              </ImageKitProvider>
              {/*details and title*/}
              <div className="w-2/3"> 
                {/*details*/}
                 <div className=" flex items-center gap-4 text-sm lg:text-base mb-4">
                   <h1 className="font-semibold ">o2  </h1>
                   <Link className="text-blue-800">Web Design</Link>
                     <span className="text-gray-500 text-sm">2 days ago</span>

                 </div>
                  {/*title*/}
              
              <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
              </div>

           </div>
        
        {/*third*/}
                 <div className="lg:h-1/3 flex justify-between gap-4">
                   <ImageKitProvider urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT }>
                   
                    <Image src="featured3.jpeg" className="rounded-3xl object-cover w-1/3 aspect-video" width={298}/>
                 </ImageKitProvider>
                  {/*details and title*/}
              <div className="w-2/3"> 
                {/*details*/}
                 <div className=" flex items-center gap-4 text-sm lg:text-base">
                   <h1 className="font-semibold ">o3  </h1>
                   <Link className="text-blue-800">Web Design</Link>
                     <span className="text-gray-500 text-sm">2 days ago</span>

                 </div>
                  {/*title*/}
              
              <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">okaydo itttttttt</Link>
              </div>
                 </div>
                         <div className="lg:h-1/3 flex justify-between gap-4">
                         <ImageKitProvider urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT }>
                            
                          <Image src="featured4.jpeg" className="rounded-3xl object-cover w-1/3 aspect-video" width={298}/>
                         </ImageKitProvider>
                          {/*details and title*/}
              <div className="w-2/3"> 
                {/*details*/}
                 <div className=" flex items-center gap-4 text-sm lg:text-base">
                   <h1 className="font-semibold ">o4 </h1>
                   <Link className="text-blue-800">Web Design</Link>
                     <span className="text-gray-500 text-sm">2 days ago</span>

                 </div>
                  {/*title*/}
              
              <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium" >okaydo itttttttt</Link>
              </div>
                         </div>
                   
        
        
      
      </div>   
    </div>
  )
}

export default FeaturedPosts