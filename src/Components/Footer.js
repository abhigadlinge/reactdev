import React from "react";
import "./Footer.css"
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="row">
            <div className="footer-col">
              <h4>quick links</h4>
              <ul>
                <li>
                  <a href="#">AiSense LLP is an Indian company specializing in bio-signal analytics for early disease screening. They provide innovative healthcare solutions and consultancy services in education and research. AiSense empowers students and offers job-oriented skill courses to foster cost-effective innovations.</a>
                </li>
              
                
              </ul>
            </div>
            <div className="footer-col">
              <h4>extra links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Courses</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#"> Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>contact info </h4>
              <ul>
                <li>
                  <a href="#"> Gogri, Mangrulpir,</a>
                </li>
                <li>
                  <a href="#">Washim, Maharashtra</a>
                </li>
                <li>
                  <a href="#"> India - 444402</a>
                </li>
                <li>
                  <a href="#">Phone: +91 9011103044</a>
                </li>
                <li>
                  <a href="#">Email: info@aisense.com</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <FaLinkedin className="icons"/>
                <FaGoogle className="icons"/>
                <FaGithub className="icons"/>
                <FaGithub className="icons"/>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
