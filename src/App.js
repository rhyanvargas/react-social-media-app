import {
  React,
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
  useReducer,
} from "react";
import Login from "./Components/Login";
import Header from "./Components/Header";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import PostReducer from "./PostReducer";

export const UserContext = createContext();
export const PostContext = createContext({
  posts: [],
});

const App = () => {
  const [user, setUser] = useState("");
  const initialPostsState = useContext(PostContext);
  const [state, dispatch] = useReducer(PostReducer, initialPostsState);

  useEffect(() => {
    document.title = user
      ? `${user}'s Feed`
      : `Please Login | Social Media App`;
  }, [user]);

  // const handleAddPost = useCallback(
  //   (newPost) => {
  //     setPosts((prevPosts) => [newPost, ...prevPosts]);
  //   },
  //   [posts]
  // );

  const app = () => {
    return (
      <div>
        <Header user={user} setUser={setUser} />
        <CreatePost
          user={user}
          // handleAddPost={handleAddPost}
        />
        {state.posts.length > 0 ? (
          <PostList posts={state.posts} user={user} />
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
    <PostContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={user}>
        {user ? app() : login()}
      </UserContext.Provider>
    </PostContext.Provider>
  );
};

export default App;
