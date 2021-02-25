import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const authObject = {
      "Project-ID": "7b3792b9-f687-41f1-92e3-c2b06cff974b",
      "User-Name": username,
      "User-Secret": password
    };
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.reload();
    } catch (error) {
      setError("Opp fail to log in");
      setPassword("");
    }
  }
  return (
    <div>
      <div className="wrapper">
        <div className="form">
          <div className="title">Login</div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
            />
            <div align="center">
              <button type="submit" className="button">
                Start Chat
              </button>
              <h5 className="error">{error}</h5>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
