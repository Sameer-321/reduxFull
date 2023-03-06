import { useSelector } from "react-redux";
import React from "react";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";

function PostsList() {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((i) => 
    // console.log(i.title);
    <article key={i.id}>
      <h3>{i.title}</h3>
      <p>{i.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={i.userId} />
      </p>
    </article>
  );
  const show = () => {
    return(
      <div>adfasdf</div>
    )
    
  };
  return (
    <>
      <section>
        <h2>Posts</h2>
        {renderedPosts}

      </section>
      
    </>
  );
}

export default PostsList;
