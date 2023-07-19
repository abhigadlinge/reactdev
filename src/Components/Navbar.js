import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { Home } from "./Home";
import { Outlet, Link, NavLink, useNavigate, Navigate } from "react-router-dom";





export const Navbar = () => {

	const navRef = useRef();

	const Navigate = useNavigate() ;

	const showsignNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
  
	  
  
			<header>
			 <Link to="/"> <h3><img src="favicon.ico" className="logo"></img></h3> </Link>
			<nav ref={navRef}>
				<a href="/#">About</a>
				<a href="/#">Courses</a>
				<a href="/#">Discuss</a>
				<Link to="/Login"> <p  className="login">Login</p> </Link>
				<Link to="/Register" > <p className="signup">Register</p> </Link>
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
  
		
	);
  };
  