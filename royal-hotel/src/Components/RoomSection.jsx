import React from "react";
import styled from "styled-components";
import backgroundImage from "../images/backgroundImage.png";
import LuxaryRoom from "../Components/LuxaryRoom";
import Discount from "./Discount";

const Wrapper = styled.section`
  background: url(${backgroundImage});
  .room_section_left,
  .room_section_right {
    display: flex;
    justify-content: space-evenly;
    background-color: #ffff;
    align-items: center;
    border-radius: 10px;
    margin: 2rem 0;
    padding: 3rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  .room_section_right {
    flex-direction: row-reverse;
  }
  .room_section_image {
    width: 400px;
    height: auto;
    .large_image {
      width: 100%;
      height: 300px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
  .small_images {
    display: flex;
    overflow: hidden;
    img {
      transition: 0.2s all;
      width: 100%;
      height: 80px;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .room_section_content {
    width: 500px;
    p {
      span {
        color: green;
        font-weight: bold;
      }
    }
    .facilities {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 1rem;
      .facility {
        display: flex;
        border-radius: 1rem;
        justify-content: center;
        align-items: center;
        margin: 0.3rem;
        padding: 0.5rem 1rem;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        .f-icon {
          display: flex;
          align-items: center;
          padding-right: 0.3rem;
        }
        li {
          font-size: 13px;
        }
      }
    }
  }

  @media screen and (max-width: 820px) {
    .container {
      padding: 1rem 2rem !important;
    }
    .room_section_left,
    .room_section_right {
      flex-direction: column;
    }
    .room_section_image {
      margin-right: 0;
      margin-bottom: 2rem;
      width: 90%;
    }
    .room_section_content {
      text-align: center;
      width: 100%;
    }
  }
  @media screen and (max-width: 500px) {
    .container {
      padding: 1rem !important;
    }
    .room_section_content {
      h1 {
        font-size: 1.4rem;
      }
    }
    .room_section_image {
      width: 300px;
    }
  }
`;
const RoomSection = () => {
  const hotelRoom1 =
    "https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const hotelRoom2 =
    "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const hotelRoom3 =
    "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const hotelRoom4 =
    "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const hotelRoom5 =
    "https://images.pexels.com/photos/6444257/pexels-photo-6444257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const hotelRoom6 =
    "https://images.pexels.com/photos/6444255/pexels-photo-6444255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const hotelRoom7 =
    "https://images.pexels.com/photos/6585597/pexels-photo-6585597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const hotelRoom8 =
    "https://images.pexels.com/photos/6585602/pexels-photo-6585602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const hotelRoom9= "https://images.pexels.com/photos/14021928/pexels-photo-14021928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const hotelRoom10 =
    "https://images.pexels.com/photos/14021918/pexels-photo-14021918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const hotelRoom11 =
    "https://images.pexels.com/photos/7746093/pexels-photo-7746093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const hotelRoom12 =
    "https://images.pexels.com/photos/7746084/pexels-photo-7746084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <>
      <Wrapper>
        <div className="room_section">
          <div className="container">
            <LuxaryRoom
              lClass="room_section_left"
              heading="The Royal Golden"
              para="Welcome to The Royal Hotel Rooms, The Royal Golden Room where luxury is at its finest. Our luxury
               rooms have been carefully designed to provide you with the ultimate
               comfort and style. Step into a world of elegance and relaxation, where
               every detail has been taken care of. Book Our Luxary Room only at"
              dollar="$259"
              image1={hotelRoom1}
              image2={hotelRoom2}
              image3={hotelRoom3}
              image4={hotelRoom4}
              btn="Book Royal Golden"
            />
            <LuxaryRoom
              lClass="room_section_right"
              heading="The Royal Penthouse"
              para="Welcome to The Royal Hotel Rooms, The Royal Penthouse where luxury is at its finest. Our luxury
               rooms have been carefully designed to provide you with the ultimate
               comfort and style. Step into a world of elegance and relaxation, where
               every detail has been taken care of. Book Our Luxary Room only at"
              dollar="$289"
              image1={hotelRoom5}
              image2={hotelRoom6}
              image3={hotelRoom7}
              image4={hotelRoom8}
              btn="Book Royal Penthouse"
            />
            <LuxaryRoom
              lClass="room_section_left"
              heading="The Grand Room"
              para="Welcome to The Royal Hotel Rooms, The Royal Grand Room where luxury is at its finest. Our luxury
               rooms have been carefully designed to provide you with the ultimate
               comfort and style. Step into a world of elegance and relaxation, where
               every detail has been taken care of. Book Our Luxary Room only at"
              dollar="$129"
              image1={hotelRoom9}
              image2={hotelRoom10}
              image3={hotelRoom11}
              image4={hotelRoom12}
              btn="Book Royal Penthouse"
            />
          </div>
        </div>
        <Discount />
      </Wrapper>
    </>
  );
};

export default RoomSection;
