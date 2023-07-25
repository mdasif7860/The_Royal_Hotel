import React from "react";
import styled from "styled-components";
import backgroundImage from "../images/backgroundImage.png";
import ContactConnect from "./ContactConnect";
const Wrapper = styled.section`
  background: url(${backgroundImage});
  width: 100%;
  iframe{
  width: 100% !important;
 }
  .contact_page {
    display: flex;
    justify-content: space-between;
    .left,
    .right {
      flex: 1;
    }
    .contact_page_content {
      padding: 2rem 0;
      h2 {
        color: gray;
      }
      p {
        width: 80%;
      }
    }
    .contact_page_form {
      form {
        display: flex;
        flex-direction: column;
        input,textarea{
          width: 100%;
          padding: 1rem 0.5rem;
          color: gray;
          font-size: 1rem;
          outline: none;
          background: transparent;
          font-weight: bold;
          &::placeholder {
            color: gray;
          }
        }
        input {
          margin: 1rem 0;
          border: none;
          border-bottom: 1px solid gray;
        }
        textarea {
          border: 1px solid gray;
        }
        button {
          margin: 2rem 0;
        }
      }
    }
 
  }
  @media screen and (max-width: 820px) {
    .contact_page {
      flex-direction: column;
      .contact_page_content{
        p {
          width: 100%;
        }
      }
    }
  }
`;
const ContactPage = () => {
  return (
    <>
    <Wrapper>
      <div className="container">
      <div className="contact_page">
        <div className="left">
          <h1 className="royal">Contact Us</h1>
          <div className="contact_page_content">
            <h2>General Inquiries</h2>
            <p className="gray">
              Thank you for your interest in The Royal Hotel. If you have any
              questions, feedback, or inquiries, please don't hesitate to get in
              touch with us.
            </p>
            <h2>Reservation Assistance</h2>
            <p className="gray">
              If you wish to make a reservation or need help with an existing
              booking, our reservation specialists are ready to assist you. We
              understand the importance of a seamless booking process and are
              committed to making your stay at The Royal Hotel a delightful
              experience.
            </p>
            <h2>Feedback and Suggestions</h2>
            <p className="gray">
              We value your feedback and suggestions as they help us improve our
              services and offerings. If you have any comments or
              recommendations to share, we welcome your input.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="contact_page_form">
            <form action="https://formspree.io/f/xyyqzbpk" method="POST">
              <input type="text" name="Name" placeholder="Enter Your Name" required />
              <input type="Email" name="email" placeholder="Enter Your Email" required />
              <input
                type="tel"
                placeholder="Enter Your Phone"
                required
                name="Phone"
              />
              <textarea
                id=""
                cols=""
                rows="10"
                placeholder="Enter Your Message"
                required
                name="Message"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </Wrapper>
   <ContactConnect />
    </>
  );
};

export default ContactPage;
