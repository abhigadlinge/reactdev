import React from "react";
import "./Home.css";
import { Footer } from './Footer';
import education from "./education.png";
import students from "./students.png";
import computer from "./computer.png";
import robot from "./robot.png";
import professionals from "./professionals.png";
import hacker from "./hacker.png";
import { Cards } from "./Card";
import { Courses } from "./Courses";
import {FaSearch} from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { Navbar } from "./Navbar";
import { Outlet, NavLink , useNavigate } from "react-router-dom";


export const Home = () => {


  return (
    <main className="home">
    <Navbar />

      <div className="herocontainer">
        <div class="homeabout">
          <h2 className="homeheader">aisense</h2>

          <p class="homepara">
            High Quality Course at Affordable prices. We are latest in tech and
            highest in quality.
          </p>

          <p className="homepara">
            Trusted by 300,000 Student and Professionals.
          </p>

          <div className="search">
          <input
            type="text"
            placeholder="Search here"
            className="serch-box"
          />

          <FaSearch className="search-icon" />
          </div>
        </div>

        <div class="homeimage">
          <figure>
            <img src={education} alt="" className="image" />
          </figure>
        </div>
      </div>

      

      <div className="hero2container">
        <div className="hero2heading">
          The perfect platform to boost your technical skills
        </div>

        <div className="hero2">
          <div className="hero2left hero2flex">
            <img src={students} className="hero2image"></img>
            <h2 className="hero2head">Students</h2>
            <p>
              Prepping for the big test or want to ace your first interview? Use
              Sololearn's real-world practice to reinforce what you've learned
              and get you ready for that big moment.
            </p>
          </div>

          <div className="hero2right hero2flex">
            <img src={professionals} className="hero2image2"></img>
            <h2 className="hero2head">Professionals</h2>
            <p>
              You can learn something totally new to advance your career. Or
              maybe you just want to knock off the rust. Try Sololearn to get
              access to a variety of courses, from machine learning to web
              development.
            </p>
          </div>
        </div>
      </div>

      <Courses />

      <div className="heroboxes">
        <div className="boxes box1">
          <div className="boxcontent">
            <h2 className="boxheader">
              Get access to all the premium courses in a Pro LCO Bundle
            </h2>
            <p>A Quality Courses at a most Affordable Price!</p>
            <div className="btn2">enroll now</div>
          </div>

          <div className="boximage">
            <img src={robot}></img>
          </div>
        </div>

        <div className="boxes  box2">
          <div className="boxcontent">
            <h2 className="boxheader">
              Get access to all the premium courses in a Pro LCO Bundle
            </h2>
            <p>A Quality Courses at a most Affordable Price!</p>
            <div className="btn2">enroll now</div>
          </div>

          <div className="boximage2">
            <img src={hacker}></img>
          </div>
        </div>

        <div className="boxes  box3">
          <div className="boxcontent">
            <h2 className="boxheader">
              Get access to all the premium courses in a Pro LCO Bundle
            </h2>
            <p>A Quality Courses at a most Affordable Price!</p>
            <div className="btn2">enroll now</div>
          </div>

          <div className="boximage3">
            <img src={computer}></img>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};
