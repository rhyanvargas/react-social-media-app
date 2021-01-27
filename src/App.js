import { React, useState, useEffect, useCallback } from "react";
import Login from "./Components/Login";
import Header from "./Components/Header";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";

const App = () => {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = user
      ? `${user}'s Feed`
      : `Please Login | Social Media App`;
  }, [user]);

  const handleAddPost = useCallback(
    (newPost) => {
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    },
    [posts]
  );

  const app = () => {
    return (
      <div>
        <Header user={user} setUser={setUser} />
        <CreatePost user={user} handleAddPost={handleAddPost} />
        {posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <h1> No Posts Found...</h1>
        )}
      </div>
    );
  };
  const login = () => {
    return (
      <>
        <Login setUser={setUser} />
      </>
    );
  };

  return <>{user ? app() : login()}</>;
};

export default App;
