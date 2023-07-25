import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  color: #ffff;
  max-width: 40rem;

  .royal-heading {
    font-size: 3.5rem;
  }
  .royal-para {
    width: 35rem;
    padding-top: 1rem;
  }
  .royal-heading {
    color: #ffff;
  }

  @media screen and (max-width: 500px) {
    .royal-heading {
      font-size: 2.3rem;
    }
    .royal-span {
      font-size: 2.3rem;
    }
    .royal-para {
      width: 20rem;
      font-size: 15px;
    }
  }
`;
const MySlider = ({ heading, headingSpan, para, btn, icon, goto }) => {
  return (
    <Wrapper className="slide-content">
      <h1 className="royal-heading">
        {heading} <br />
        <span className="royal royal-span" style={{ fontSize: "3.5rem" }}>
          {" "}
          {headingSpan}
        </span>
      </h1>
      <p className="royal-para">{para}</p>
      <Link to={goto}>
        <button className="royal-btn">
          {btn} {icon}
        </button>
      </Link>
    </Wrapper>
  );
};

export default MySlider;
