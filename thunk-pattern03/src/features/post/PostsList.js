import { useSelector } from "react-redux";
import React from "react";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
//import ReactionButtons from "./ReactionButtons";
function PostsList() {
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
  const renderedPosts = orderedPosts.map((i) => 
    // console.log(i.title);
    <article key={i.id}>
      <h3>{i.title}</h3>
      <p>{i.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={i.userId} />
        <TimeAgo timestamp={i.date}/>
      </p>
      <ReactionButtons post={i}/>
    </article>
  );
  
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
