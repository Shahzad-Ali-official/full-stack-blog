import {  Image } from "@imagekit/react"
import { ImageKitProvider } from "@imagekit/react"
import { Link } from "react-router";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/*deatails and title*/}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
        <h1 className="text-xl md:text-3xl xl:text-4xl font-semibold 2xl:text-5xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque vero ullam officiis commodi magni</h1>
            <div className="flex items-center gap-2 text-gray-600 text-sm"> 
        <span>wittern by</span>
        <Link className="text-blue-800">Jhon doe</Link>
        <span>on</span>
        <Link className="text-blue-800">Web Design</Link>
        <span>2 days ago</span>
            </div>
                <p className="text-gray-600 font-medium">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, magnam? Omnis sit eveniet voluptatem, iusto delectus beatae reiciendis explicabo dolore amet sapiente fuga odit excepturi repellat totam doloremque doloribus alias!

                </p>
        </div>
              <div className="hidden lg:block lg:w-2/5">
                <ImageKitProvider urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}>
                  <Image src="postImg.jpeg" className="rounded-2xl object-cover aspect-video" width={600}  />
                </ImageKitProvider>
              </div>

        </div>
    
 
     <div className="flex flex-col md:flex-row gap-8">
      {/*text*/}
          <div className="lg:text-lg flex flex-col gap-6 text-justify" >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates aspernatur tempore rem, doloribus hic consequatur! Aliquam eos eligendi quam officia corrupti! Ea similique fugiat assumenda quisquam cumque quia. Quaerat.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, magni distinctio eligendi vitae sapiente blanditiis libero nemo laboriosam sunt deserunt! Neque laudantium veniam quos adipisci. Alias rem doloribus blanditiis nobis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore est exercitationem facere id esse perferendis soluta vel natus consectetur ex cum nisi accusamus dolor, veniam reprehenderit beatae perspiciatis quisquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio alias dolores enim, eveniet incidunt cupiditate. Vero nihil eos assumenda minima, odit, beatae in voluptate deleniti necessitatibus alias, blanditiis exercitationem?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ad tempore tempora voluptas suscipit. Repellat facere asperiores dolor! Possimus quod voluptate culpa perferendis tenetur minus autem necessitatibus commodi doloremque consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ad tempore tempora voluptas suscipit. Repellat facere asperiores dolor! Possimus quod voluptate culpa perferendis tenetur minus autem necessitatibus commodi doloremque consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ad tempore tempora voluptas suscipit. Repellat facere asperiores dolor! Possimus quod voluptate culpa perferendis tenetur minus autem necessitatibus commodi doloremque consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ad tempore tempora voluptas suscipit. Repellat facere asperiores dolor! Possimus quod voluptate culpa perferendis tenetur minus autem necessitatibus commodi doloremque consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ad tempore tempora voluptas suscipit. Repellat facere asperiores dolor! Possimus quod voluptate culpa perferendis tenetur minus autem necessitatibus commodi doloremque consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ad tempore tempora voluptas suscipit. Repellat facere asperiores dolor! Possimus quod voluptate culpa perferendis tenetur minus autem necessitatibus commodi doloremque consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ad tempore tempora voluptas suscipit. Repellat facere asperiores dolor! Possimus quod voluptate culpa perferendis tenetur minus autem necessitatibus commodi doloremque consectetur.</p>
            
          </div>
       {/*menu*/}
       
              <div className="px-4 h-max sticky top-8">
                <h1 className="mt-2 mb-4 text-sm font-medium"> Author</h1>
                <div className="flex flex-col gap-4">
                <ImageKitProvider urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}>
                <div className="flex items-center gap-8">
                    <Image src= "userImg.jpeg" className="w-12 h-12 rounded-full object-cover" w={48} h={48}/>
                  <Link>Jhon DOE</Link>
                  </div>
                  <p className="text-sm text-gray-600">lorem is okay and he posted it</p>
                  
                  
                  <div className="flex gap-2">
                    <Link>
                    <Image className="lg:w-8" src="facebook.svg"/>
                    
                    </Link>
                    <Link>
                    <Image className="lg:w-8" src="instagram.svg"/>
                    
                    </Link>
                 </div>
                 </ImageKitProvider> 
                </div>              
                <PostMenuActions/>
                <h1 className="mt-4 mb-3 text-sm font-medium">Categories</h1>
                <div className="flex flex-col gap-2 text-sm">
                <Link className="underline">All</Link>
                <Link className="underline" to="/">Web Design</Link>
                <Link className="underline" to="/">Databases</Link>
                <Link className="underline" to="/">Search Engines</Link>
                <Link className="underline" to="/">Marketing</Link>
                </div>
                <div>
                <h1 className="mt-5 mb-2 text-sm font-medium">Search</h1>
                <Search/>
                </div>
              </div>
         </div>
         <Comments/>     
    </div>
  )
}

export default SinglePostPage;