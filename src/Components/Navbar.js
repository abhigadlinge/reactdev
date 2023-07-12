import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { Home } from "./Home";




export const Navbar = () => {

	const navRef = useRef();

	const showsignNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};


	const [showNavbar, setShowNavbar] = useState(true);
	const [showLogin, setShowLogin] = useState(false);
	const [showSignUp, setShowSignUp] = useState(false);
	const [showHero, setShowHero] = useState(true);
  
	const handleLoginClick = () => {
	  setShowLogin(true);
	  setShowSignUp(false);
	  setShowNavbar(false)
	  setShowHero(false);
  
	};
  
	const handleSignUpClick = () => {
	  setShowSignUp(true);
	  setShowLogin(false);
	  setShowNavbar(false)
	  setShowHero(false);
  
	};
  
	const handleJumpToLogin = () => {
	  setShowLogin(true);
	  setShowSignUp(false);
	  setShowNavbar(false)
	  setShowHero(false);
	};
  
	const handleJumpToSignUp = () => {
	  setShowSignUp(true);
	  setShowLogin(false);
	  setShowNavbar(false)
	  setShowHero(false);
	};
  
	const handleLoginSignupClick = () => {
	  setShowLogin(false);
	  setShowSignUp(false);
	};
  
	const handleBackToNavbar = () => {
	  setShowLogin(false);
	  setShowSignUp(false);
	  setShowNavbar(true);
	  setShowHero(true);
	};
  
  
	return (
  
	  <div>
  
		{showNavbar &&  (
  
			<header>
			<h3  onClick={handleLoginSignupClick} ><img src="favicon.ico" className="logo"></img></h3>
			<nav ref={navRef}>
				<a href="/#">About</a>
				<a href="/#">Courses</a>
				<a href="/#">Discuss</a>
				<a href="/#"  onClick={handleLoginClick} className="login">Login</a>
				<a href="/#"  onClick={handleSignUpClick} className="signup">Register</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showsignNavbar}>
					<FaTimes className="barsbtn"/>
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showsignNavbar}>
				<FaBars className="barsbtn"/>
			</button>
		</header>
  
		)}
		{showLogin && <Login jumpToSignUp={handleJumpToSignUp}  handleBackToNavbar = {handleBackToNavbar} />}
		{showSignUp && <Register jumpToLogin={handleJumpToLogin} handleBackToNavbar = {handleBackToNavbar} />}
		
		{showHero && (
		  <div className="hero">
			<Home /> 
		  </div>
		)}
	  </div>
	);
  };
  