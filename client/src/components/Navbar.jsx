import { Image , ImageKitProvider } from '@imagekit/react';

import { useState} from "react";
import { Link } from 'react-router';
import {SignedIn, SignedOut, UserButton,useAuth } from '@clerk/clerk-react'; 
import { useEffect } from 'react';


const Navbar = () => {
    const [isopen, setIsOpen] = useState(false);
    
const {getToken} = useAuth();

useEffect(() => {
  getToken().then((token) => console.log(token));
  
}, []);


  return (

    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
            <ImageKitProvider
            
            urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
            
            >
            <Image
            
            
            //path="/logo.png"
            src='/logo.png'
             className="w-10 h-10"
              alt="logo"
            
            />
            </ImageKitProvider>
            <span>Ai blogs</span>
        </Link>
        {/* MOBILE MENU */}
        <div className="md:hidden">
           {/* HAMBURGER ICON */}
            <div className="cursor-pointer text-4xl" >
                 <button onClick={() => setIsOpen(!isopen)}>
                {isopen ? "X" : "☰"}
                 </button>
            </div>
            {/* MOBILE MENU ITEMS */}
            <div
             className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 bg-red-700 transition-all duration-300 ease-in-out
             ${isopen ? "right-0" : "-right-[100%]"}`}
             >
              {/* You can map over your menu items here */}
              <Link to= "/" className=" text-2xl p-4">Home</Link>
              <Link to= "/about" className=" text-2xl p-4">About</Link>
              <Link to= "/contact" className=" text-2xl p-4">Contact</Link>
              <Link to= "/trending" className=" text-2xl p-4">Trending🎉</Link>
              
              <SignedOut>
                <Link to="/login">
                  <button className="py-2 px-4 rounded-3xl bg-blue-800 text-2xl text-white" >login👋</button>
                </Link>
              </SignedOut>
              
            </div>
        </div>
        {/* DESKTOP MENU */}
            <div className="hidden md:flex gap-4 items-center">
        
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/trending">Trending🎉</Link>
               <SignedOut>
               <Link to="/login">

                 <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white" >login👋</button>

              </Link>
                </SignedOut>

                <SignedIn>
                <UserButton/>
                </SignedIn>              
            </div>  
        </div>

       )
  
}

export default Navbar;