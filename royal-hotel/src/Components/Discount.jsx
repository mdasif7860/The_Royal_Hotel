import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom"
const Wrapper = styled.div`
padding-bottom: 3rem;
.discount_image{
  background: url("https://images.pexels.com/photos/14021928/pexels-photo-14021928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  height: 50vh;
  &::before {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #000000ba;
    }
.discount{
    color: #FFFF;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    h1{
      font-size: 3rem;
    }
    button{
      animation: smallBig 1.5s ease-in-out infinite;
      position: relative;
      @keyframes smallBig {
        0% {
          transform: none;
        }
        50%{
          transform: scale(.9);
        }
        100%{
          transform: scale(1);
        }
      }
    }
}
}
@media screen and (max-width: 820px){
  .discount_image{
    height: 30vh;
  }
}
@media screen and (max-width: 500px){
  .discount_image{
    .discount{
      width: 100%;
      h1{
        font-size: 2rem;
      }
    }
  }
}
`
const Discount = () => {
  return (
    <Wrapper>
        <div className="discount_image">
           <div className='discount'>
              <h1>The Royal Hotel</h1>
              <p>
                BOOK YOUR LUXARY ROOM AND GET 10% INSTANT DISCOUNT 💰</p>
              <Link to="/contact">
              <button>Grab Your Discount</button>
              </Link>
           </div>
           </div>
    </Wrapper>
  )
}

export default Discount