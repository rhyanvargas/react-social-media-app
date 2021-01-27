import { React, useState, useRef, useContext } from "react";
import { PostContext } from "../App";
import { actions } from "../actions";

export default function CreatePost({ user }) {
  const [image, setImage] = useState(null);
  const [content, setContent] = useState(undefined);
  const [postTitle, setPostTitle] = useState("");
  const imageInputRef = useRef();

  const { dispatch } = useContext(PostContext);

  const handlePostChange = (event) => {
    setContent(event.target.value);
  };
  const handleImageChange = (event) => {
    const img = event.target.files[0];
    setImage(img);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const postCreated = {
      id: Date.now(),
      postTitle,
      user,
      image,
      content,
    };

    dispatch({ type: actions.ADD_POST, payload: { postCreated } });

    // Clear inputs
    setContent("");
    setPostTitle("");
    imageInputRef.current.value = "";
  };

  const handleTitleChange = (event) => {
    const { value } = event.target;
    setPostTitle(value);
  };

  const createPost = (
    <>
      <h1> Create a Post</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          onChange={handleTitleChange}
          placeholder="Add Title"
          value={postTitle}
        />
        <br />
        <textarea
          type="text"
          onChange={handlePostChange}
          placeholder="Add Post Content"
          value={content}
        />
        <br />
        <input ref={imageInputRef} onChange={handleImageChange} type="file" />
        <button type="submit">Submit Post</button>
      </form>
    </>
  );

  return (
    <>
      <div>{createPost}</div>
    </>
  );
}
