import React from "react";

export default function Header({ user, setUser }) {
  const handleOnClick = () => {
    setUser("");
  };
  return (
    <div>
      <h1>Welcome, {user}</h1>
      <button onClick={handleOnClick}>Logout</button>
    </div>
  );
}
