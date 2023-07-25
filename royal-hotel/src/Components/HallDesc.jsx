import React from "react";
import {Link} from "react-router-dom";
const HallDesc = ({hallClass, heading, description, hallImage }) => {
  return (
    <div className={hallClass}>
      <div className="left">
        <div className="hall_content">
          <h1 className="royal">{heading}</h1>
          <p className="gray">{description}</p>
          <Link to="/contact">
          <button>Book Now</button>
          </Link>
        </div>
      </div>
      <div className="right">
        <div className="hall_image">
          <img src={hallImage} alt="Marriage Hall" />
        </div>
      </div>
    </div>
  );
};

export default HallDesc;
