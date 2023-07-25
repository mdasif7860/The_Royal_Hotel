import React from "react";
import { Link } from "react-router-dom";
import newLogo from "../images/newlogo.png";
import Nav from "./Nav";
import styled from "styled-components";
const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 6rem;
  align-items: center;
  position: relative;
  @media screen and (max-width: 820px) {
    padding: 0.5rem 5rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0.5rem 3rem;
  }
`;
const Navbar = () => {
  return (
    <Wrapper className="navbar-container">
      <li>
        <Link to="/">
          <img src={newLogo} width={100} height={70} alt="logo" />
        </Link>
      </li>
      <Nav />
    </Wrapper>
  );
};

export default Navbar;
