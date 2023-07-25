import React from "react";
import styled from "styled-components";
import HallDesc from "./HallDesc";
const Wrapper = styled.section`
  .hall_reverse {
    flex-direction: row-reverse;
    .left {
      .hall_content {
        padding-left: 3rem;
      }
    }
  }
  .hall,
  .hall_reverse {
    display: flex;
    align-items: center;
    .left {
      .hall_content {
        padding-right: 3rem;
      }
    }
    .right {
      .hall_image {
        width: 600px;
        height: auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 820px){
    .hall,.hall_reverse{
      flex-direction: column;
      .left{
        .hall_content{
          text-align: center;
          padding-right: 0;
          padding-left: 0;
        }
      }
      .right{
        .hall_image{
          padding: 2rem 0;
        }
      }
    }
  }
  @media screen and (max-width: 500px){
    .hall,.hall_reverse{
      .right{
        .hall_image{
          width: 350px;
        }
      }
    }
  }
`;
const HallAbout = () => {
  return (
    <Wrapper className="container">
      <HallDesc
        hallClass="hall"
        heading="Marriage Hall"
        description="Introducing Royal Hotel's reception hall: elegance meets luxury. Spacious, adorned with grand chandeliers and impeccable decor. Ideal for weddings and gala events. Friendly staff, customizable seating, cutting-edge technology, and exquisite catering."
        hallImage="https://images.pexels.com/photos/17023077/pexels-photo-17023077/free-photo-of-pink-tree-and-decorations-in-hotel-hall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <HallDesc
        hallClass="hall_reverse"
        heading="Birthday Hall"
        description="Royal Hotel's birthday hall: enchanting ambiance, versatile space. Dedicated staff, comfortable seating, and exceptional service. Modern amenities, delectable cuisine, and unforgettable celebrations await you."
        hallImage="https://images.pexels.com/photos/17057042/pexels-photo-17057042/free-photo-of-tables-and-tree-in-restaurant-hall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <HallDesc
        hallClass="hall"
        heading="Reception Hall"
        description="Royal Hotel's reception hall: elegance meets luxury. Spacious, adorned with grand chandeliers and impeccable decor. Ideal for weddings and gala events. Friendly staff, customizable seating, cutting-edge technology, and exquisite catering."
        hallImage="https://images.pexels.com/photos/16120259/pexels-photo-16120259/free-photo-of-interior-design-of-wedding-reception-venue.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </Wrapper>
  );
};

export default HallAbout;
