import { React, useContext } from "react";
import { UserContext } from "../App";

export default function Post({ postTitle, user, image, content }) {
  const currentUser = useContext(UserContext);
  const isCurrentUser = currentUser === user ? true : false;

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

  const displayPost = () => {
    return (
      <div>
        <h1>{postTitle}</h1>
        <figure>{showImage(image)}</figure>
        <caption style={{ color: isCurrentUser && "green" }}>
          Author: {user}
        </caption>
        <p>{content} </p>
      </div>
    );
  };

  return <>{displayPost()}</>;
}
