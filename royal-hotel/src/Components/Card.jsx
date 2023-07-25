import React from "react";
import styled from "styled-components";
import { PiCaretCircleDownThin } from "react-icons/pi";
import "animate.css";
const roomImage =
  "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const restaurantImage =
  "https://images.pexels.com/photos/16985196/pexels-photo-16985196/free-photo-of-interior-design-of-the-hotel-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const hallImage =
  "https://images.pexels.com/photos/17023012/pexels-photo-17023012/free-photo-of-restaurant-hall-decorated-with-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const contactImage =
  "https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const Wrapper = styled.header`
  position: relative;
  .room {
    background: url(${roomImage});
  }
  .restaurant {
    background: url(${restaurantImage});
  }
  .hall {
    background: url(${hallImage});
  }
  .contact {
    background: url(${contactImage});
  }
  .room,
  .restaurant,
  .hall,
  .contact {
    width: 100%;
    height: 90vh;
    background-position: center;
    background-size: cover;
    position: relative;
    background-attachment: fixed;
    &::before {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #000000ba;
    }
  }
  .card_content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    .card_heading {
      color: #ffff;
      font-size: 4.5rem;
    }
    .card_para {
      width: 40rem;
      margin: 0 auto;
      color: #ffff;
      font-size: 1.3rem;
    }
    .card_icon {
      color: #ffff;
      position: relative;
      animation: upDown 2s ease-in-out infinite;
      cursor: pointer;

      @keyframes upDown {
        0% {
          top: 0;
        }
        50% {
          top: 10px;
        }
        100% {
          top: 0;
        }
      }
    }
  }
  @media screen and (max-width: 820px) {
    .room,.restaurant,.hall {
      height: 65vh;
    }
    .card_content {
      .card_heading {
        font-size: 3rem;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .card_content {
      .card_heading {
        font-size: 2.3rem;
      }
      .card_para {
        width: 20rem;
        font-size: 1rem;
      }
    }
  }
`;

const Cards = ({ heading, para, bgImage }) => {
  return (
    <Wrapper className="card">
      <div className={bgImage}></div>
      <div className="card_content">
        <h1 className="royal card_heading animate__animated animate__backInLeft">{heading}</h1>
        <p className="card_para animate__animated animate__backInLeft">{para}</p>
        <PiCaretCircleDownThin className="card_icon" size={40} />
      </div>
    </Wrapper>
  );
};

export default Cards;
