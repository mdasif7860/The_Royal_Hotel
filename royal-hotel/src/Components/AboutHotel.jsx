import { BiBed } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "../images/backgroundImage.png";

 const Wrapper = styled.section`
  background: url(${backgroundImage});
  width: 100%;
  .container {
    display: flex;
    justify-content: space-between;
    .left-content .comfort {
      padding: 1rem 0;
      font-style: italic;
      text-decoration: underline;
      font-size: 1.5rem;
    }
    .gray {
      width: 100%;
      font-weight: bold;
    }
  }
  @media screen and (max-width: 820px) {
    .container {
      flex-direction: column;
      p {
        padding-top: 2rem;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .container {
      p {
        font-size: 1rem;
        width: 300px;
      }
      .left-content .comfort {
        font-size: 1.1rem;
      }
    }
  }
`;
const AboutHotel = () => {
  return (
    <Wrapper className="aboutPage">
      <div className="container">
        <div className="left-content">
          <h1 className="royal">The Royal hotel</h1>
          <p className="gray">
            Located 5 minutes from Haldwani Station, Next to the Haldwani national
            Park
          </p>
          <h2 className="royal comfort">
            Comfort and Privacy is our first priority.
          </h2>
          <p className="gray">
            We understand the importance of personal space and privacy within
            our hotel. Our staff is trained to respect your privacy and will
            only enter your room for necessary housekeeping and maintenance,
            ensuring minimal disruption during your stay.
          </p>
          <Link to="/rooms">
            <button>
              Check Rooms <BiBed />
            </button>
          </Link>
        </div>
        <div className="right-content">
          <p className="gray">
            At Royal Palace Hotel, we believe that luxury is an art, and we are
            dedicated to crafting extraordinary experiences for each and every
            one of our esteemed guests. Nestled in the heart of elegance and
            opulence, our hotel exudes a timeless charm that captivates the
            senses and leaves a lasting impression.
            <br /> <br />
            We provide alot of services, Luxury Rooms to Budget Friendly Rooms,
            veg & non-veg food, Reception & Marriage Hall, Birthday Party
            Celebration and many more.
            <br />
            Step into a world of extraordinary events at our reception and
            marriage hall, where stunning architecture and meticulous attention
            to detail converge to create an unforgettable backdrop for your
            special celebrations.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutHotel;
