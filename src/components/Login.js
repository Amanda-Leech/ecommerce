import React, { useState } from "react";
import "./Login.scss";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../helper/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const loginUser = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then((auth) => {
        history("/");
      })
      .catch((e) => alert(e.message));
  };

  const signupUser = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then((auth) => {
        history("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} className="nav-searchIcon" />
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
