import PostListItem from "./PostListItem";
import { useInfiniteQuery } from "@tanstack/react-query"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component";

const fetchPosts = async (pageParam) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`,{
    params: { page: pageParam, limit : 5 },
  });
  return res.data;
};
 
const PostList = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.hasMore ? pages.length + 1 : undefined,
  });
   console.log(data);

   
   
   if (status === 'pending') return <p>Loading...</p>
   
   if (status === 'error') return <p>An error has occurred: {error.message}</p>;
   
   const allPosts = data?.pages?.flatMap(page => page.posts) || [];


  return (
    <InfiniteScroll
  dataLength={allPosts.length} //This is important field to render the next data
  next={fetchNextPage}
  hasMore={!!hasNextPage}
  loader={<h4>Loading More Posts...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>All Posts Loaded</b>
    </p>
  }
   
>
  
        {allPosts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}

        </InfiniteScroll>
  
  )
}

export default PostList