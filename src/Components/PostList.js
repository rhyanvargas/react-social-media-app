import React from "react";
import Post from "./Post";

export default function PostList({ posts }) {
  const displayPosts = () => {
    return posts.map((currPost, index) => {
      const { postTitle } = currPost;
      return <Post key={`${index}-${postTitle}`} currPost={currPost} />;
    });
  };
  return <>{displayPosts()}</>;
}
