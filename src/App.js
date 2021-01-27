import { React, useState, useEffect, useCallback, createContext } from "react";
import Login from "./Components/Login";
import Header from "./Components/Header";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";

export const UserContext = createContext();

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
          <PostList posts={posts} user={user} />
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

  return (
    <UserContext.Provider value={user}>
      {user ? app() : login()}
    </UserContext.Provider>
  );
};

export default App;
