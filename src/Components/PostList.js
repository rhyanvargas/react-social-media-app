import React from "react";
import Post from "./Post";

export default function PostList({ posts }) {
  const displayPosts = () => {
    return posts.map((post, index) => <Post key={post.id} {...post} />);
  };
  return <>{displayPosts()}</>;
}
