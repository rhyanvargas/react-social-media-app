import { React, useState } from "react";

export default function Login({ setUser }) {
  const [username, setUsername] = useState("Rhyan");

  const handleInputChangetype = (event) => {
    const { value } = event.target;
    setUsername(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setUser(username);
  };

  const form = (
    <form onSubmit={handleFormSubmit}>
      <h2>Login</h2>
      <input
        onChange={handleInputChangetype}
        type="text"
        placeholder="Username"
      />
      <input type="text" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
  return <div>{form}</div>;
}
