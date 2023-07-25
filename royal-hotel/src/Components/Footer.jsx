import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import styled from "styled-components";
const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #262626;
  &.container{
    padding: 5rem 3rem !important;
  }
  .footer-content {
    h3 {
      padding-bottom: 1rem;
    }
    p {
      width: 300px;
      padding: 0 !important;
      line-height: 1.6rem;
    }
    h3,
    p {
      color: #ffff;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      li {
        a {
          color: #ffff;
          text-decoration: underline;
          opacity: 1;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
    .social-media-icons {
      display: flex;
      gap: 0.8rem;
      .social {
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 820px){
    .footer-content{
        h3{
            padding-top: 2rem;
        }
    }
  }
`;
const Footer = () => {
  return (
    <Wrapper className="footer container">
      <div className="footer-content about-hotel">
        <h3>About Hotel</h3>
        <p>
          Discover a world of modern luxury at The Royal Hotel. With our prime
          location in the heart of Haldwani, we offer a perfect blend of
          sophistication, comfort, and convenience
        </p>
      </div>
      <div className="footer-content location">
        <h3>Location / Time</h3>
        <p>
          <span className="icon" style={{ paddingRight: ".3rem" }}>
            <HiOutlineLocationMarker />
          </span>
          Near to Haldwani Railway Station
          <br />
          Open 24 hrs 😊
          <br />
          You can check in or checkout every time you want
        </p>
      </div>
      <div className="footer-content links">
        <h3>Check Services</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <Link to="/restaurant">Restaurant</Link>
          </li>
          <li>
            <Link to="/hall">Marriage & Reception Hall</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="footer-content social-media">
        <h3>Social Media</h3>
        <div className="social-media-icons">
          <div className="social" style={{backgroundColor: "#1877F2"}}>
            <FiFacebook className="icon" size={20}/>
          </div>
          <div className="social" style={{backgroundColor: "rgb(250,126,30)"}}>
            <FiInstagram className="icon" size={20}/>
          </div>
          <div className="social" style={{backgroundColor: "#0077B5"}}>
            <FiLinkedin className="icon" size={20}/>
          </div>
          <div className="social" style={{backgroundColor: "#c4302b"}}>
            <FiYoutube className="icon" size={20}/>
          </div>
        </div>
        <br />
        <p>Connect with us to know more about our hotel and grab our offers..</p>
      </div>
    </Wrapper>
  );
};

export default Footer;
