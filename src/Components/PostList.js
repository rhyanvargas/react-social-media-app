import React from "react";
import Post from "./Post";

export default function PostList({ posts }) {
  const displayPosts = () => {
    return posts.map((post, index) => <Post key={index} {...post} />);
  };
  return <>{displayPosts()}</>;
}
