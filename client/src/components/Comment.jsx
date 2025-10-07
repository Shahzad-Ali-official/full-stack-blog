import { format } from "timeago.js";
import { Image ,ImageKitProvider} from "@imagekit/react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";

const Comment = ({ comment, postId }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const role = user?.publicMetadata?.role;

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(
        `${import.meta.env.VITE_API_URL}/comments/${comment._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      toast.success("Comment deleted successfully");
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
      toast.error(errorMessage);
    },
  });

  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4"> 
        <ImageKitProvider urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}>
        {comment.user?.img && (
          <Image
            src={comment.user.img}
            className="w-10 h-10 rounded-full object-cover"
            w="40"
          />
        )}
        </ImageKitProvider>
        <span className="font-medium">{comment.user?.username}</span>
        <span className="text-sm text-gray-500">
          {format(comment.createdAt)}
        </span>
        {user &&
          (comment.user?.username === user.username || role === "admin") && (
            <span
              className="text-xs text-red-300 hover:text-red-500 cursor-pointer"
              onClick={() => mutation.mutate()}
            >
              delete
              {mutation.isPending && <span>(in progress)</span>}
            </span>
          )}
      </div>
      <div className="mt-4">
        <p>{comment.desc}</p>
      </div>
    </div>
  );
};

export default Comment;