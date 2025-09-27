import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router";

const WritePage = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const {getToken} = useAuth();

// Initialize the React Query mutation for posting a new blog post
 const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      navigate(`/${res.data.slug}`);
      console.log("Post created successfully");
    },
  });

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">You must be Logged in to Write a Post.</div>;
  }
 const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const category = formData.get("category");

    if (!title || !category || !value) {
      setError("Title, category, and content are required.");
      return;
    }

    const data = {
      title: title,
      desc: formData.get("desc"),
      category: category,
      content: value,
    };
    console.log(data);
    mutation.mutate(data);
  };



  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6 p-4">
      <h1 className="text-xl font-medium">Create New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-4">
        <button className="w-max p-2 shadow-xl text-gray-500 bg-white rounded-full">Add a cover image</button>
        <input type="text" id="title" placeholder="My Awesome story"
         name="title" className="text-4xl font-semibold bg-transparent outline-none" />
        <div className="flex items-center gap-4">
        <label htmlFor="category" className="text-sm">Choose a Category</label>
        <select name="category" id="category" className="p-2 rounded-xl bg-white shadow-md">
          <option value="general">General</option>
          <option value="web-design">Web Design</option>
          <option value="development">Development</option>
          <option value="database">DataBase</option>
          <option value="seo">Search Engine</option>
          <option value="marketing">Marketing</option>
        </select>
        </div>
        
        <textarea className="p-4 rounded-xl bg-white shadow-none" name="desc" placeholder="A Short Description"/> 
        
        <ReactQuill theme="snow" className="flex-1 rounded-xl bg-white shadow-none "
        value={value} onChange={setValue}/>
        <button disabled={mutation.isPending} className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed">{mutation.isPending ? "Loading..." : "Send"}
          </button>
        {mutation.isError && <span className="text-red-500">{mutation.error.message}</span>}
        {error && <span className="text-red-500">{error}</span>}
      </form>
    </div>
  );
};

export default WritePage;