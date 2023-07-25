import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Autoplay, Pagination } from "swiper";
import styled from "styled-components";
import background from "../images/backgroundImage.png";
import asifImage from "../images/t-asif.jpg";
import {FaFlagUsa} from "react-icons/fa"
const Wrapper = styled.div`
  background: url(${background});
  .t-royal {
    padding-bottom: 1.5rem;
  }
  .main-testimonial {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    flex-direction: column;
    border-radius: 10px;
    background: #ffff;
    margin-bottom: 3rem;
    position: relative;
    .t-rating {
      position: absolute;
      right: 10px;
      top: 10px;
      color: #ffd700;
      .t-rating-icons {
        margin-right: 0.1rem;
      }
    }
    .t-content {
      .t-royal {
        text-align: center;
        padding: 0.5rem 0;
        font-size: 1.3rem;
      }
      .gray {
        padding: 0 2rem;
        color: gray;
        .t-icon {
          color: #ff8300;
          &.left {
            margin-right: 0.5rem;
          }
          &.right {
            margin-left: 0.5rem;
          }
        }
      }
    }
    .t-image {
      img {
        border-radius: 50%;
        border: 3px solid #ff8300;
      }
    }
  }

  @media screen and (max-width: 820px) {
    .main-testimonial {
      height: 300px;
      .t-content {
        .gray {
          width: 300px;
          font-size: 15px;
          padding: 0 1rem;
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    .swiper-slide {
      width: 100% !important;
    }
  }
`;
const Testimonials = () => {
  return (
    <>
      <Wrapper className="testimonial-swiper container">
        <h1 className="royal t-royal">Our Customer Says</h1>
        <Swiper
          modules={[FreeMode, Autoplay, Pagination]}
          pagination={{ dynamicBullets: true, clickable: true }}
          slidesPerView={2}
          breakpoints={{
            500:{
              slidesPerView: 2
            }
          }}
          spaceBetween={15}
          freeMode={false}
          autoplay={{ delay: 3000 }}
          className="testimonial-swiper"
        >
          <div className="testimonial">
            <SwiperSlide className="swiper-slide">
              <div className="main-testimonial">
                <div className="t-rating">
                  <BsStarFill className="t-rating-icons" />
                  <BsStarFill className="t-rating-icons" />
                  <BsStarFill className="t-rating-icons" />
                  <BsStarFill className="t-rating-icons" />
                  <BsStarHalf className="t-rating-icons" />
                </div>
                <div className="t-image">
                  <img src={asifImage} alt="image" width={100} height={80} />
                </div>
                <div className="t-content">
                  <h3 className="royal t-royal">Md Asif</h3>
                  <p className="gray">
                    <BiSolidQuoteAltLeft className="t-icon left" />
                    I had an amazing experience staying at The Royal Hotel! The
                    staff was incredibly friendly and accommodating, and the
                    rooms were luxurious and comfortable. I highly recommend
                    this hotel to anyone looking for a memorable stay
                    <BiSolidQuoteAltRight className="t-icon right" />
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="main-testimonial">
                <div className="t-rating">
                  <BsStarFill className="t-rating-icons" />
                  <BsStarFill className="t-rating-icons" />
                  <BsStarFill className="t-rating-icons" />
                  <BsStarFill className="t-rating-icons" />
                  <BsStarFill className="t-rating-icons" />
                </div>
                <div className="t-image">
                  <img
                    src="https://images.pexels.com/photos/2753381/pexels-photo-2753381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="t-content">
                  <h3 className="royal t-royal">Deepak Arora</h3>
                  <p className="gray">
                    <BiSolidQuoteAltLeft className="t-icon left" />
                    The Royal Hotel exceeded all my expectations! From the
                    moment I walked in, I was greeted with warmth and
                    professionalism. The attention to detail in every aspect of
                    the hotel, from the elegant decor to the impeccable service,
                    made my stay truly special. I can't wait to return!
                    <BiSolidQuoteAltRight className="t-icon right" />
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="main-testimonial">
                <div className="t-rating">
                  <BsStarFill className="t-rating-icons" />
                  <BsStarFill className="t-rating-icons" />
                  <BsStarFill className="t-rating-icons" />
                  <BsStarFill className="t-rating-icons" />
                  <BsStar className="t-rating-icons" />
                </div>
                <div className="t-image">
                  <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="t-content">
                  <h3 className="royal t-royal">Emily Johnson <FaFlagUsa style={{color: "#000"}}/> </h3>
                  <p className="gray">
                    <BiSolidQuoteAltLeft className="t-icon left" />
                    Staying at The Royal Hotel was an absolute delight! The
                    atmosphere was elegant yet inviting, and the amenities were
                    top-notch. The restaurant offered a diverse menu with
                    delicious options, and the spa services were incredibly
                    relaxing. I left feeling rejuvenated and already planning my
                    next visit
                    <BiSolidQuoteAltRight className="t-icon right" />
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="main-testimonial">
                <div className="t-rating">
                  <BsStarFill className="t-rating-icons" />
                  <BsStarFill className="t-rating-icons" />
                  <BsStarFill className="t-rating-icons" />
                  <BsStarFill className="t-rating-icons" />
                  <BsStarFill className="t-rating-icons" />
                </div>
                <div className="t-image">
                  <img
                    src="https://images.pexels.com/photos/1058194/pexels-photo-1058194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="t-content">
                  <h3 className="royal t-royal">Ayush Jaiswal</h3>
                  <p className="gray">
                    <BiSolidQuoteAltLeft className="t-icon left" />
                    I had the pleasure of staying at The Royal Hotel during my
                    vacation, and it was a memorable experience. The location
                    was perfect, with stunning views of the surrounding area.
                    The staff was attentive and friendly, ensuring that every
                    aspect of my stay was enjoyable. I would highly recommend
                    this hotel to anyone looking for a luxurious getaway.
                    <BiSolidQuoteAltRight className="t-icon right" />
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="main-testimonial">
                <div className="t-rating">
                  <BsStarFill className="t-rating-icons" />
                  <BsStarFill className="t-rating-icons" />
                  <BsStarFill className="t-rating-icons" />
                  <BsStarFill className="t-rating-icons" />
                  <BsStarHalf className="t-rating-icons" />
                </div>
                <div className="t-image">
                  <img
                    src="https://images.pexels.com/photos/16543094/pexels-photo-16543094/free-photo-of-woman-portrait-in-black-and-white-with-water-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="t-content">
                  <h3 className="royal t-royal">Shiwangi Singh</h3>
                  <p className="gray">
                    <BiSolidQuoteAltLeft className="t-icon left" />
                    I recently attended a wedding at The Royal Hotel, and it was
                    truly magical. The venue was exquisite, with elegant
                    decorations and a beautiful ambiance. The staff went above
                    and beyond to make the day unforgettable, taking care of
                    every detail with precision and care. It was a perfect
                    setting for a perfect day
                    <BiSolidQuoteAltRight className="t-icon right" />
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </Wrapper>
    </>
  );
};

export default Testimonials;
