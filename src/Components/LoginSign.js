import { FaHeart } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./LoginSign.css"


export const LoginSign = () => {
  return (
    <div>
      <div className="divcontainer">
        <div className="line"></div>
        <div className="or"> or </div>
        <div className="line"></div>
      </div>

      <div className="iconcontainer">
        <div className="icons icon1">
          <FaGoogle className="icon" />
          <p>google</p>
        </div>
        <div className="icons icon2">
          <FaLinkedin className="icon" />
          <p>linkedin</p>
        </div>
        <div className="icons icon3">
          <FaGithub className="icon" />
          <p>github</p>
        </div>
      </div>
    </div>
  );
};
