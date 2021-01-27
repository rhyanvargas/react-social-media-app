import React from "react";

export default function PostList({ posts }) {
  const showImage = (image) => {
    const imageURL = URL.createObjectURL(image);
    const imageName = image.name;
    return (
      <>
        {image && (
          <div>
            <img
              style={{
                height: "auto",
                width: "100%",
                maxWidth: 150,
                objectFit: "cover",
              }}
              alt={imageName}
              src={imageURL}
            />
          </div>
        )}
      </>
    );
  };

  const displayPosts = () => {
    return posts.map((currPost) => {
      const { postTitle, user, image, post } = currPost;
      return (
        <div>
          <h1>{postTitle}</h1>
          <figure>{showImage(image)}</figure>
          <caption>Author: {user}</caption>
          <p>{post} </p>
        </div>
      );
    });
  };
  return <>{displayPosts()}</>;
}
