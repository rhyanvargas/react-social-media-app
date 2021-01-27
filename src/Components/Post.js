import { React, useContext } from "react";
import { UserContext } from "../App";
import { PostContext } from "../App";
import { actions } from "../actions";

export default function Post({ postTitle, user, image, content, id }) {
  const currentUser = useContext(UserContext);
  const { dispatch } = useContext(PostContext);
  const isCurrentUser = currentUser === user ? true : false;

  const handleDeletePost = () => {
    dispatch({ type: actions.DELETE_POST, payload: { id } });
  };

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

  const deleteButton = () => {
    return isCurrentUser && <button onClick={handleDeletePost}>Delete</button>;
  };

  const displayPost = () => {
    return (
      <div>
        <h1>{postTitle}</h1>
        <small style={{ color: isCurrentUser && "green" }}>
          Written by {user}
        </small>
        {showImage(image)}
        <p>{content}</p>
        {deleteButton()}
      </div>
    );
  };

  return <>{displayPost()}</>;
}
