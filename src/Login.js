import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const loginUser = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then((auth) => {
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  const signupUser = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then((auth) => {
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="data:image/png;base64,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"
          alt="Logo"
        />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={userPassword}
            onChange={(event) => setUserPassword(event.target.value)}
            type="password"
          />
          <button
            onClick={loginUser}
            type="submit"
            className="login-signInButton"
          >
            Sign In
          </button>
        </form>
        <button onClick={signupUser} className="login-registerButton">
          Create an account
        </button>
      </div>
    </div>
  );
}

export default Login;
