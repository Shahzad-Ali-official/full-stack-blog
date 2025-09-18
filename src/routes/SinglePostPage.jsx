import {  Image } from "@imagekit/react"
import { ImageKitProvider } from "@imagekit/react"
import { Link } from "react-router";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/*deatails and title*/}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
        <h1 className="text-xl md:text-3xl xl:text-4xl font-semibold 2xl:text-5xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque vero ullam officiis commodi magni</h1>
            <div className="flex items-center gap-2 text-gray-400 text-sm"> 
        <span>wittern by</span>
        <Link className="text-blue-800">Jhon doe</Link>
        <span>on</span>
        <Link className="text-blue-800">Web Design</Link>
        <span>2 days ago</span>
            </div>
                <p className="text-gray-500 font-medium">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, magnam? Omnis sit eveniet voluptatem, iusto delectus beatae reiciendis explicabo dolore amet sapiente fuga odit excepturi repellat totam doloremque doloribus alias!

                </p>
        </div>
              <div className="hidden lg:block lg:w-2/5">
                <ImageKitProvider urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}>
                  <Image src="postImg.jpeg" className="rounded-2xl object-cover aspect-video" width={600}  />
                </ImageKitProvider>
              </div>

        </div>
    </div>
 
     <div className="flex flex-col md:flex-row gap-8">
      {/*text*/}
          <div className="lg:text-lg flex flex-col gap-6" >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates aspernatur tempore rem, doloribus hic consequatur! Aliquam eos eligendi quam officia corrupti! Ea similique fugiat assumenda quisquam cumque quia. Quaerat.

            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, magni distinctio eligendi vitae sapiente blanditiis libero nemo laboriosam sunt deserunt! Neque laudantium veniam quos adipisci. Alias rem doloribus blanditiis nobis.

            </p>
          </div>
       {/*menu*/}
              <div></div>

       </div> 
      
    
      
  
  )
}

export default SinglePostPage;