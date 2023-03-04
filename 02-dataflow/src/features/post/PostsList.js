import { useSelector } from "react-redux";
import React from "react";
import { selectAllPosts } from "./postsSlice";

function PostsList() {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((i) => {
    // console.log(i.title);
    <article key={i.id}>
      <h3>{i.title}</h3>
      <p>{i.content.substring(0, 100)}</p>
    </article>;
  });
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}

export default PostsList;
