import React from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { GiBigDiamondRing, GiTowel, GiCigarette } from "react-icons/gi";
import { BiBed, BiSolidBusiness } from "react-icons/bi";
import { LuBedSingle } from "react-icons/lu";
import {
  MdOutlineFastfood,
  MdOutlineLocalParking,
  MdMeetingRoom,
  MdOutlineSportsBar,
  MdChildFriendly,
  MdOutlineSecurity,
  MdLuggage,
} from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { TbMassage } from "react-icons/tb";
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .all-facilities {
    display: flex;
    justify-content: space-between;
    width: 500px;
    .facility {
      display: flex;
      align-items: center;
      padding: 0.5rem 0;
      .f-icon {
        width: 25px;
        height: 25px;
        background: linear-gradient(to right, #ff8300, #a47720);
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }

      li {
        padding-left: 0.5rem;
        line-height: 2;
      }
    }
  }
  .facilities-image {
    width: 500px;
    height: 370px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .image-overlay {
      position: absolute;
      top: 0%;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      opacity: 0;
      transition: opacity 0.3s ease;
      .overlay-icons{
        .social-icons{
          color: #FFFF;
          padding: 0 .5rem;
          cursor: pointer;
        }
      }
    }
    &:hover .image-overlay {
      opacity: 1;
    }
  }
  @media screen and (max-width: 820px) {
    flex-direction: column;
    .all-facilities {
      justify-content: inherit;
      width: 100%;
    }
    .facilities-image {
      width: 100%;
      margin-top: 2rem;
    }
  }
  @media screen and (max-width: 500px) {
    .facility {
      li {
        font-size: 0.8rem;
      }
    }
  }
`;
const Heading = styled.div`
  p {
    width: 450px;
  }
  @media screen and (max-width: 820px) {
    padding-left: 0;
    p {
      width: 100%;
    }
  }
`;
const Facilities = () => {
  return (
    <section className="container">
      <Heading className="facilities-heading">
        <h1 className="royal">The Royal Hotel Facilites</h1>
        <p className="gray">
          Welcome to Royal Hotel Palace, where luxury meets comfort. Our hotel
          offers a range of exceptional facilities to make your stay truly
          memorable.
        </p>
      </Heading>
      <Wrapper className="facilities">
        <div className="all-facilities">
          <div className="facilities-left">
            <div className="facility">
              <div className="f-icon">
                <AiOutlineWifi />
              </div>
              <li>Wifi</li>
            </div>
            <div className="facility">
              <div className="f-icon">
                <MdOutlineFastfood />
              </div>
              <li>Restaurant</li>
            </div>
            <div className="facility">
              <div className="f-icon">
                <GiBigDiamondRing />
              </div>
              <li>Reception & Marriage Hall</li>
            </div>
            <div className="facility">
              <div className="f-icon">
                <BiBed />
              </div>
              <li>Luxary Rooms</li>
            </div>
            <div className="facility">
              <div className="f-icon">
                <LuBedSingle />
              </div>
              <li>Budget Friendy Rooms</li>
            </div>
            <div className="facility">
              <div className="f-icon">
                <MdOutlineLocalParking />
              </div>
              <li>Free Parking</li>
            </div>
            <div className="facility">
              <div className="f-icon">
                <MdMeetingRoom />
              </div>
              <li>3 Meetings Room</li>
            </div>
            <div className="facility">
              <div className="f-icon">
                <CgGym />
              </div>
              <li>Gymnasium</li>
            </div>
          </div>
          <div className="facilities-right">
            <div className="facility">
              <div className="f-icon">
                <GiTowel />
              </div>
              <li>Housekeeping</li>
            </div>
            <div className="facility">
              <div className="f-icon">
                <TbMassage />
              </div>
              <li>Spa</li>
            </div>
            <div className="facility">
              <div className="f-icon">
                <BiSolidBusiness />
              </div>
              <li>Business Center</li>
            </div>
            <div className="facility">
              <div className="f-icon">
                <MdOutlineSportsBar />
              </div>
              <li>Bar/Lounge</li>
            </div>
            <div className="facility">
              <div className="f-icon">
                <MdChildFriendly />
              </div>
              <li>Childcare Services</li>
            </div>
            <div className="facility">
              <div className="f-icon">
                <MdOutlineSecurity />
              </div>
              <li>24-Hour Security</li>
            </div>
            <div className="facility">
              <div className="f-icon">
                <MdLuggage />
              </div>
              <li>Luggage Storage</li>
            </div>
            <div className="facility">
              <div className="f-icon">
                <GiCigarette />
              </div>
              <li>Smoking Room</li>
            </div>
          </div>
        </div>
        <div className="facilities-image">
          <img
            className="f-image"
            src="https://images.pexels.com/photos/544247/pexels-photo-544247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="mainImage"
          />
          <div className="image-overlay">
            <div className="overlay-icons">
            <FaInstagram size={50} className="social-icons"/>
            <FaFacebook size={50}  className="social-icons"/>
            <FaLinkedin size={50} className="social-icons"/> 
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Facilities;
