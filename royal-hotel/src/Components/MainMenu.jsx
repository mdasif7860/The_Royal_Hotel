import React, { useState } from "react";
import styled from "styled-components";
import backgroundImage from "../images/backgroundImage.png";
import MenuItems from "./MenuItems";
import Items from "./Items";

const Wrapper = styled.section`
  .main_menu {
    background: url(${backgroundImage});
    width: 100%;
    .main_menu_btn {
      text-align: center;
      button {
        margin: 0 0.5rem 1rem 0.5rem;
      }
    }
    .menu_card {
      width: 100%;
      .menu_item {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .menu_image {
          width: 350px;
          height: auto;
          margin: 1rem 0.5rem;
          overflow: hidden;
          position: relative;
          img {
            transition: all ease-in-out 0.2s;
          }
          &:hover {
            img {
              transform: scale(1.1);
            }
            .menu_content {
              bottom: 0;
            }
          }
          .menu_content {
            position: absolute;
            bottom: -100%;
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
            width: 100%;
            height: 100%;
            transition: all ease-in-out 0.3s;
            border-radius: 5px;
            color: #ffff;
            padding: 1rem;
            text-align: center;
            img {
              width: 60px;
              height: 60px;
              border-radius: 50%;
            }
          }
          img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          }
        }
      }
    }
  }
`;
const MainMenu = () => {
  const [items, setItems] = useState(MenuItems);
  const filterImage = (categItem) => {
    const updateItems = MenuItems.filter((currElem) => {
      return currElem.category === categItem;
    });
    setItems(updateItems);
  };
  return (
    <Wrapper>
      <div className="main_menu container">
        <div className="main_menu_btn">
          <button
            className="btn"
            onClick={() => {
              setItems(MenuItems);
            }}
          >
            All
          </button>
          <button
            className="btn"
            onClick={() => {
              filterImage("veg");
            }}
          >
            Veg
          </button>
          <button
            className="btn"
            onClick={() => {
              filterImage("nonveg");
            }}
          >
            Non-Veg
          </button>
          <button
            className="btn"
            onClick={() => {
              filterImage("desert");
            }}
          >
            Desert
          </button>
        </div>
        <div className="menu_card">
          <div className="menu_item">
            <Items allItems={items} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MainMenu;
