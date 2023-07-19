import React, { useState } from "react";
import { LoginSign } from "./LoginSign";
import { Outlet, Link, NavLink, useNavigate, Navigate } from "react-router-dom";

// import "./LoginSign.css";

export const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBackToNavbar = props.handleBackToNavbar;
  const jumpToLogin = props.jumpToLogin;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic, such as API requests, validation, etc.
    console.log("Form submitted:", name, email, password);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-container">
      <Link to="/">
        <h1 className="closebtn">close</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <h3>Signup</h3>
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          required=""
          className="box"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          name="name"
          placeholder="enter your name"
          required=""
          className="box"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="password"
          name="password"
          placeholder="enter your password"
          required=""
          className="box"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <input
            type="password"
            name="cpassword"
            placeholder="confirm your password"
            required=""
            className="box"
          />
          <select name="user_type" className="box">
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select> */}
        <input
          type="submit"
          name="submit"
          defaultValue="Signup"
          className="btn"
        />

        <LoginSign />

        <p>
          already have an account?
          <Link to="/Login">
            <a className="jump">  login now </a>
          </Link>
        </p>
        <p className="terms">
          By signing up you agree to our <a>Terms of Use</a>
        </p>
      </form>
    </div>
  );
};
