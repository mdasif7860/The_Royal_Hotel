import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { GiChickenOven, GiDiamondRing } from "react-icons/gi";
import { BiBed } from "react-icons/bi";
import { FaHotel } from "react-icons/fa";
import MySlider from "./MySlider";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      85.68deg,
      #0d0e0e -21%,
      rgba(1, 1, 1, 0.947917) -20.8%,
      rgba(0, 0, 0, 0.931436) -0.07%,
      rgba(4, 3, 3, 0.856752) 10.24%,
      rgba(5, 4, 4, 0.804757) 23.97%,
      rgba(6, 5, 5, 0.763551) 37.08%,
      rgba(7, 6, 6, 0.713427) 41.13%,
      rgba(10, 9, 9, 0.592996) 52%,
      rgba(15, 13, 13, 0.417977) 59.57%,
      rgba(26, 23, 23, 0) 125.94%,
      rgba(14, 12, 12, 0.463569) 125.94%
    );
  }
  img {
    display: block;
    width: 100%;
    height: 550px;
    object-fit: cover;
  }
`;
const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      pagination={{ dynamicBullets: true, clickable: true }}
      autoplay={{ delay: 4000 }}
      className="mySwiper"
    >
      <SwiperSlide>
        <Wrapper className="swiper-slide">
          <img
            className="slideImg"
            src="https://images.pexels.com/photos/544247/pexels-photo-544247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="mainImage"
          />
          <MySlider
            heading="Welcome To The"
            headingSpan="Royal Hotel"
            para="Welcome to the Luxury Royal Hotel your gateway to an unforgettable experience. Immerse yourself in a world of luxury and comfort in the heart of Mumbai."
            btn="Explore Hotel"
            icon={<FaHotel />}
            goto="/"
          />
        </Wrapper>
      </SwiperSlide>
      <SwiperSlide>
        <Wrapper className="swiper-slide">
          <img
            className="slideImg"
            src="https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="mainImage"
          />
          <MySlider
            heading="Check Our"
            headingSpan="Restaurant"
            para="Indulge in royal dining at Royal Hotel. Our skilled chefs create tantalizing dishes using the finest ingredients. Experience extraordinary flavors and exceptional dining. Discover the art of gastronomy at Royal Hotel. "
            btn="Check Our Food"
            icon={<GiChickenOven />}
            goto="/restaurant"
          />
        </Wrapper>
      </SwiperSlide>
      <SwiperSlide>
        <Wrapper className="swiper-slide">
          <img
            className="slideImg"
            src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="mainImage"
          />
          <MySlider
            heading="Comfortable &"
            headingSpan="Luxury Rooms"
            para="Experience opulence at its finest in our lavish Royal Hotel rooms. Immerse yourself in a world of luxury, where every detail is meticulously crafted to enchant and delight."
            btn="Check Rooms"
            icon={<BiBed />}
            goto="/rooms"
          />
        </Wrapper>
      </SwiperSlide>
      <SwiperSlide>
        <Wrapper className="swiper-slide">
          <img
            className="slideImg"
            src="https://images.pexels.com/photos/17023015/pexels-photo-17023015/free-photo-of-pink-artificial-cherry-tree-in-a-luxury-hall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="mainImage"
          />
          <MySlider
            heading="Marriage &"
            headingSpan="Reception Hall"
            para="At Royal Hotel, our enchanting marriage and reception hall transforms your wedding into a fairytale. With timeless charm and flawless service, we create cherished memories that last a lifetime."
            btn="Check Our Hall"
            icon={<GiDiamondRing />}
            goto="/hall"
          />
        </Wrapper>
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
