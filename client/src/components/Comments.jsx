import Comment from "./Comment"

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
        <h1 className="text-xl text-gray-500 underline ">Comments</h1>
        <div className=" flex items-center justify-between gap-8 w-full">
        <textarea placeholder="Write a Comment" className=" w-full p-2 rounded-xl"/>
        <botton className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl ">Send</botton>
        </div>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </div>
  )
}

export default Comments