import React from "react";
import styled from "styled-components";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
const Wrapper = styled.section`
  background-color: #222121;
  .about_restaurant {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      width: 50%;
      h1 {
        padding-left: 6rem;
      }
      p {
        padding-left: 6rem;
        color: gray;
        font-size: 1.1rem;
        background: linear-gradient(to right, #ff8300, #a47720);
        color: #fff;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
      }
      .left_content {
        display: flex;
        justify-content: space-evenly;
        padding: 1rem 0;
        .menu {
          display: flex;
          align-items: center;
          padding: 0.5rem 0;
          .r_icon {
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
    }
    .right {
      .image_restaurant {
        width: 600px;
        height: auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 820px) {
    .about_restaurant {
      flex-direction: column;
      .left {
        width: 100%;
        padding: 2rem 0;
        h1 {
          padding-left: 0;
          text-align: center;
          padding-bottom: 1rem;
        }
        .left_content {
          justify-content: space-around;
          padding: 0 0.5rem;
        }
        p {
          width: 80%;
        }
      }
      .right {
        display: none;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .about_restaurant {
      .left {
        p {
          font-size: 0.9rem;
          padding-left: 1rem;
        }
        .left_content {
          li{
            font-size: .9rem;
          }
        }
      }
    }
  }
`;

const Menu = () => {
  return (
    <Wrapper>
      <div className="about_restaurant">
        <div className="left">
          <h1 className="royal">Restaurant Menu</h1>
          <div className="left_content">
            <Veg />
            <NonVeg />
          </div>
          <p>
            In our Hotel there are more than 200+ menu items with luxary experience
            and we also take care your budget give us a chance to serve you and
            your family.
          </p>
        </div>
        <div className="right">
          <div className="image_restaurant">
            <img
              src="https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Restaurant Food"
              className="food_restaurant"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Menu;
