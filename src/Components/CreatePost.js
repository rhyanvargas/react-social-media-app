import { React, useState } from "react";

export default function CreatePost({ user, setPosts }) {
  const [image, setImage] = useState(null);
  const [post, setpost] = useState(null);
  const [postTitle, setpostTitle] = useState(null);

  const handlePostChange = (event) => {
    setpost(event.target.value);
  };
  const handleImageChange = (event) => {
    const img = event.target.files[0];
    setImage(img);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const postCreated = {
      postTitle,
      user,
      image,
      post,
    };

    setPosts((prevPosts) => {
      const newArray = [...prevPosts];
      newArray.push(postCreated);
      return newArray;
    });
  };

  const handleTitleChange = (event) => {
    const { value } = event.target;
    setpostTitle(value);
  };

  const createPost = (
    <>
      <h1> Create a Post</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          onChange={handleTitleChange}
          placeholder="Add Title"
        />
        <br />
        <textarea
          type="text"
          onChange={handlePostChange}
          placeholder="Add Post Content"
        />
        <br />
        <input onChange={handleImageChange} type="file" />
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
