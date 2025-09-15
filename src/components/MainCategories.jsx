import { Link } from "react-router";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8 " >
        {/* links*/}
    <div className="flex-1 flex items-center justify-between flex-wrap ">
        <Link to="/posts" className="bg-blue-800 text-white rounded-full px-4 py-2">
            All Posts
         </Link>
         <Link to="/posts?cat=webdesign" className=" hover:bg-blue-50 rounded-full px-4 py-2">
            Web Design
         </Link>
         <Link to="/posts?cat=development" className="hover:bg-blue-50 rounded-full px-4 py-2">
            Development
         </Link>
         <Link to="/posts?cat=database" className="hover:bg-blue-50 rounded-full px-4 py-2">
            DataBase
         </Link>
         <Link to="/posts?cat=seo" className="hover:bg-blue-50 rounded-full px-4 py-2">
            Search Engine
         </Link>
         <Link to="/posts?cat=marketing" className="hover:bg-blue-50 rounded-full px-4 py-2">
            Marketing
         </Link>
         

        </div>
        <span className="text-xl font-medium">|</span>
        {/* search */}
    <div className="bg-gray-100 p-2 rounded-full items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={20}
            height={20}
            stroke="gray"
            >
            <circle cx="11" cy="11" r="8" stroke="gray" strokeWidth={2}/>
            <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="gray" strokeWidth={2}/>
            </svg>
            <input type="text" placeholder="Search a Post" className="bg-transparent outline-none border-none"/>
    </div>
    <div className=""></div>
    <div className=""></div>
    </div>
  )
}

export default MainCategories;