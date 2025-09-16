import {Link} from "react-router"
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";



const HomePage = () => {
  return (
    <div className ='mt-4 flex flex-col gap-4'>
    {/* BREADCRUMB */}
    <div className='flex gap-4'>
      <Link to="/">Home</Link>
      <span>*</span>
      <span className='text-blue-800'>Blogs & Articles</span>
    </div>
    {/* INTRODUCTION */}
    <div className='flex items-center justify-between'>
    {/*title*/}
    <div className=''>
    <h1 className='text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold'>
      Lorem ipsum dolor sit amet consectetur adipisicing 
      elit.
      <p className='mt-8 text-md md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qu
        asi qui debitis doloribus fugiat animi dolore recusandae numquam placeat ut dolores, ipsa doloremque reiciendis! Consectetur ipsum quo maxime voluptates placeat quas?
      </p>
    </h1>
      </div>
    {/*animated button*/}
    <Link to ="write" className=" hidden md:block relative">
    <svg 
       
       viewBox="0 0 200 200"
       width={200}
       height={200}
       className="text-lg tracking-wider animate-spin animatedButton "
       >
        <path
        id="circlePath"
        fill="none"
        d="M 100, 100
        m -75, 0
        a 75,75 0 1,1 150,0
        a 75,75 0 1,1 -150,0"/>
        <text>
        <textPath href="#circlePath" startOffset="0%">
          Write Your Blog!
        </textPath>
        <textPath href="#circlePath" startOffset="50%">
          Share a Post!</textPath>
        </text>
        </svg>
        <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20  bg-blue-800 rounded-full flex item-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg"
           fill="none"
            viewBox="0 0 28 9" 
              width={50}  
              height={50}
            stroke="white"
             strokeWidth={2}>
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
          </svg>

        </button>

     </Link>
  
    
    {/* POST LIST */}
       </div>
       <MainCategories/>
       {/* FEATURED POSTS */}
      <FeaturedPosts/>
       {/* POST LIST */}
       <div className="">
         <h2 className="my-8 text-2xl text-gray-600 ">Recent Posts</h2>
        <PostList/>
        
        
       </div>
       
    </div>
  )
}

export default HomePage;