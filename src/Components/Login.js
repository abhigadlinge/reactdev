import React, { useState } from "react";
import { LoginSign } from "./LoginSign";
// import "./LoginSign.css"


export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBackToNavbar = props.handleBackToNavbar ;
  const jumpToSignUp = props.jumpToSignUp ;


  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic, such as API requests, validation, etc.
    console.log("Form submitted:", email, password);

    // Reset form fields
    setEmail("");
    setPassword("");
  };

  return (
    
      <div className="form-container">

        
        <h1 onClick={handleBackToNavbar} className="closebtn" > close </h1>

        
        <form onSubmit={handleSubmit}>
          <h3> Sign in </h3>
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
            type="password"
            name="password"
            placeholder="enter your password"
            required=""
            className="box"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            name="submit"
            defaultValue="login now"
            className="btn"
          />



         <LoginSign />







          
          <p>
            don't have an account? <a onClick={jumpToSignUp} className="jump">Sign up </a>
          </p>
        </form>
      </div>
  );
};
