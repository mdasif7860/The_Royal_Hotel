import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscListSelection } from "react-icons/vsc";
import { GiCrossedSwords } from "react-icons/gi";
import styled from "styled-components";

const Wrapper = styled.ul`
  display: flex;
  gap: 3rem;
  li a {
    background: linear-gradient(to right, #ff8300, #a47720);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -6px;
      background: linear-gradient(to right, #ff8300, #a47720);
      width: 0%;
      height: 1.5px;
      transition: all ease-in-out 0.3s;
    }
    &:hover {
      background: linear-gradient(to right, #a47720, #ff8300);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
      &::after {
        width: 50%;
      }
    }
  }

  @media screen and (max-width: 820px) {
    position: absolute;
    width: 100%;
    height: 50vh;
    background: #ccc5c5;
    z-index: 999;
    top: 0%;
    left: -100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    transition: all ease-in-out 0.3s;
    &.active {
      left: 0;
    }

    button {
      padding: 1rem;
      font-size: 0.9rem;
    }
  }
`;
const Responsivness = styled.div`
  display: none;
  .res-icons {
    cursor: pointer;
    font-size: 1.75rem;
    color: #ff8300;
  }
  @media screen and (max-width: 820px) {
    display: initial;
    z-index: 999;
  }
`;
const Nav = () => {
  const [click, setClick] = useState(false);

  const clickMe = () => {
    setClick(!click);
  };
  return (
    <>
      <Wrapper className={!click ? "navbar-lists" : "navbar-lists active"}>
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/rooms" className="navbar-link">
            Rooms
          </Link>
        </li>
        <li>
          <Link to="/restaurant" className="navbar-link">
            Restaurant
          </Link>
        </li>
        <li>
          <Link to="/hall" className="navbar-link">
            Marriage & Reception
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-link">
            Contact Us
          </Link>
        </li>
      </Wrapper>
      <Responsivness className="for-res">
        <div className="res-icons">
          {!click ? (
            <VscListSelection className="icons" onClick={clickMe} />
          ) : (
            <GiCrossedSwords className="icons" onClick={clickMe} />
          )}
        </div>
      </Responsivness>
    </>
  );
};

export default Nav;
