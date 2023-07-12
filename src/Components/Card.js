import React from "react";
import "./Card.css"
import coding from "./coding.jpeg"

export const Cards = (props) => {

  return (
    <>
      <div className="card"  >
          <img className="poster"
            src={coding}
            alt=""
          />
          <p className="title">{props.name}  </p>
         
            <p className="duration">{props.duration}</p>
            
          <p className="intake">{props.fees}</p>
      </div>
    </>
  );
};

