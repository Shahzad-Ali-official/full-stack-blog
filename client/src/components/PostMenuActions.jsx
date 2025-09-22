

const PostMenuActions = () => {
  return (
    <div className="">
            <h1 className="mt-3 mb-2 text-sm font-medium">Actions</h1>
        
       <div className="flex items-center gap-2 py-2 text-sm cursor-pointer" >
                <svg
                xmlns="http:www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="20px"
                height="20px"
                >
                    <path
                    d="M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z"
                    stroke="black"
                    strokeWidth="2"
                   />
                </svg>
                <span>Save this Post</span>
        </div>
         
         
            
            <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="5 2 40 40"
  width="20px"
  height="20px"
>
  <path
    d="M14 12V38C14 39.1 14.9 40 16 40H32C33.1 40 34 39.1 34 38V12H14ZM36 8H12V10H36V8ZM20 18H22V34H20V18ZM26 18H28V34H26V18ZM20 4H28V6H20V4Z"
    fill="red"
  />
</svg>

                <span>delete this Post</span>
            </div>
    


    </div>    
  )
}

export default PostMenuActions