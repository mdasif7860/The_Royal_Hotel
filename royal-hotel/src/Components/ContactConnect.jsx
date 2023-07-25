import React from "react";
import styled from "styled-components";
import { FiPhoneCall } from "react-icons/fi";
import { TbMailStar } from "react-icons/tb";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  .contact_connect {
    display: flex;
    justify-content: space-between;
    .connect {
      flex: 1;
    }
    .map {
      iframe {
        width: 100%;
        height: 500px;
        border-radius: 10px;
      }
    }
    .content {
      padding: 2rem;
      p {
        font-weight: bold;
        font-size: 1.1rem;
      }
      .all_facilities {
        padding: 1rem 0;
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
    }
  }
  @media screen and (max-width: 820px) {
    .contact_connect {
      flex-direction: column;
      .content{
        padding: 2rem 0;
      }
    }

  }
`;
const ContactConnect = () => {
  return (
    <Wrapper className="container">
      <div className="contact_connect">
        <div className="connect map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.979708125627!2d79.50010757514161!3d29.224151375346942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09bbddf469d2f%3A0x6a50a258a5de1a37!2sThe%20Royal%20Hotel%20Haldwani!5e0!3m2!1sen!2sin!4v1690163548843!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="connect content">
          <h1 className="royal">Book Your Hotel</h1>
          <div className="all_facilities">
            <div className="facility">
              <div className="f-icon">
                <FiPhoneCall />
              </div>
              <li>
                <Link>(+91) 8090642382</Link> Call Us to book your room
              </li>
            </div>
            <div className="facility">
              <div className="f-icon">
                <TbMailStar />
              </div>
              <li><Link>asifmd809064@gmail.com</Link>  Mail Us to book your room</li>
            </div>
          </div>
          <p className="gray">
            Feel free to call us at (+91) 8090642382 if you have any questions
            or need assistance with your reservation.
            <br />
            <br />
            Our friendly and knowledgeable staff are always here to help you
            make the most out of your stay at the Royal Hotel We take pride in
            delivering exceptional service and ensuring your stay with us is
            comfortable and enjoyable. Thank you for choosing the The Royal
            Hotel, and we can't wait to welcome you soon!.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactConnect;
