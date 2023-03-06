import { useSelector, useDispatch } from "react-redux";
import React from "react";
import {
  selectAllPosts,
  getPostsError,
  fetchPosts,
  getPostsStatus,
} from "./postsSlice";
import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";

//import ReactionButtons from "./ReactionButtons";
function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
    // console.log(posts)
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
      //console.log(orderedPosts)
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <>
      <section>
        <h2>Posts</h2>
        {content}
      </section>
    </>
  );
}

export default PostsList;
