import { Link } from "react-router"
import Search from '../components/Search.jsx';

const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
        <h1 className="mb-4 text-sm font-medium">Search</h1>
        <Search/>
        <h1 className="mb-4 mt-4 text-sm font-medium">Filter</h1>
        <div className="flex flex-col gap-2 text-sm">
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="sort" value="mostrecent" className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800  "/>
            Most Recent
            </label>
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="sort" value="trending" className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800 "/>
            Trending
            </label>
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="sort" value="oldest" className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800 "/>
            Oldest
            </label>
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="sort" value="toprated" className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800 "/>
            Top Rated
            </label>
            </div>
        <h1 className="mb-2 mt-4 text-sm font-medium">Categories</h1>
            <div className="flex flex-col gap-2 text-sm">
            <Link to="/posts" className="underline">All</Link>
            <Link to="/posts?cat=webdesign" className="underline">Web Design</Link>
            <Link to="/posts?cat=development" className="underline">Development</Link>
            <Link to="/posts?cat=database" className="underline">Data Base</Link>
            <Link to="/posts?cat=seo" className="underline">Search Engine</Link>
            <Link to="/posts?cat=marketing" className="underline">Marketing</Link>
            </div>  
    </div>
  )
}

export default SideMenu