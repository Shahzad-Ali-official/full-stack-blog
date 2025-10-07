import { useUser, useAuth } from "@clerk/clerk-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const PostMenuActions = ({post}) => {

 const { user } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const {
    isPending,
    error,
    data: savedPosts,
  } = useQuery({
    queryKey: ["savedPosts"],
    queryFn: async () => {
      const token = await getToken();
      return axios.get(`${import.meta.env.VITE_API_URL}/users/saved`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const isAdmin = user?.publicMetadata?.role === "admin" || false;
  const isSaved = savedPosts?.data?.some((p) => p === post._id) || false;

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(`${import.meta.env.VITE_API_URL}/posts/${post._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      toast.success("Post deleted successfully!");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const queryClient = useQueryClient();

  const saveMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.patch(
        `${import.meta.env.VITE_API_URL}/users/save`,
        {
          postId: post._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedPosts"] });
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const featureMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.patch(
        `${import.meta.env.VITE_API_URL}/posts/feature`,
        {
          postId: post._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post", post.slug] });
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  const handleFeature = () => {
    featureMutation.mutate();
  };

  const handleSave = () => {
    if (!user) {
      return navigate("/login");
    }
    saveMutation.mutate();
  };


  return (
    <div className="">
            <h1 className="mt-3 mb-2 text-sm font-medium">Actions</h1>
         {isPending ? (
        "Loading..."
      ) : error ? (
        "Saved post fetching failed!"
      ) : (
       <div
          className="flex items-center gap-2 py-2 text-sm cursor-pointer"
          onClick={handleSave}
        >
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
                     fill={
                saveMutation.isPending
                  ? isSaved
                    ? "none"
                    : "black"
                  : isSaved
                  ? "black"
                  : "none"
                         }
                   />
                </svg>
                <span>Save this Post</span>
                 {saveMutation.isPending && (
            <span className="text-xs">(in progress)</span>
          )}
        </div>
      )}
         
         {isAdmin && (
        <div
          className="flex items-center gap-2 py-2 text-sm cursor-pointer"
          onClick={handleFeature}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="20px"
            height="20px"
          >
            <path
              d="M24 2L29.39 16.26L44 18.18L33 29.24L35.82 44L24 37L12.18 44L15 29.24L4 18.18L18.61 16.26L24 2Z"
              stroke="black"
              strokeWidth="2"
              fill={
                featureMutation.isPending
                  ? post.isFeatured
                    ? "none"
                    : "black"
                  : post.isFeatured
                  ? "black"
                  : "none"
              }
            />
          </svg>
          <span>Feature</span>
          {featureMutation.isPending && (
            <span className="text-xs">(in progress)</span>
          )}
        </div>
      )}

          {user && (post.user?.username === user.username || isAdmin) && (  
            <div className="flex items-center gap-2 py-2 text-sm cursor-pointer" onClick={handleDelete}>
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
                 {deleteMutation.isPending && (
            <span className="text-xs">(in progress)</span>
          )}
            </div>
     )}


    </div>    
  )
}

export default PostMenuActions