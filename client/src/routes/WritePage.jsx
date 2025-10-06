import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import {useEffect ,useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Upload from "../components/Upload";



const WritePage = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [cover, setCover] = useState(null);
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

   useEffect(() => {
    img && setValue((prev) => prev + `<p><image src="${img.url}"/></p>`);
  }, [img]);

  useEffect(() => {
    video &&
      setValue(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
      );
  }, [video]);
  
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
      toast.success("Post created successfully!");
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
      img: cover?.url || "",      // Change from cover.filepath to cover.url
      video: video?.url || "",    // Change from video.filepath to video.url
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
       
           <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
            Add a cover image
          </button>
        </Upload>

            

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
        
        <div className="flex">
            
            <div className="flex flex-col gap-2 mr-2">
                 <Upload type="image" setProgress={setProgress} setData={setImg}>
              🌆
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              ▶️
            </Upload>

                

            </div>

        <ReactQuill theme="snow" className="flex-1 rounded-xl bg-white shadow-none "
        value={value} onChange={setValue}/>
        </div>
        <button disabled={mutation.isPending} className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed">{mutation.isPending ? "Loading..." : "Send"}
          </button>
          {"Progress:" + progress}
        {mutation.isError && <span className="text-red-500">{mutation.error.message}</span>}
        {error && <span className="text-red-500">{error}</span>}
      </form>
    </div>
  );
};

export default WritePage;