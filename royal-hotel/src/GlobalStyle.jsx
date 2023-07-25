import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*::selection{
  background: #ff8300;
}
body {
  overflow-x: hidden;
  font-family: 'Mulish', sans-serif;
  max-width: 1500px;
  margin: 0 auto;
}

li {
  list-style: none;
  color: gray;
}
a {
  text-decoration: none;
}
p{
  line-height: 1.5;
  padding: 1rem 0;
}
.gray{
  color: gray;
  line-height: 1.5;
  font-size: 1.1rem;
  width: 100%;
}
.container{
  padding: 3rem 6rem;
}
button{
  background: linear-gradient(to right, #ff8300, #a47720);
  border: none;
  border-radius: 10px;
  color: #FFFF;
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1rem;
  transition: all ease-in-out .1s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
button:hover{
  transform: scale(.95);
  box-shadow: none;
}
.royal{
  background: linear-gradient(to right, #ff8300, #a47720);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  position: relative;
  font-size: 2.5rem;
}
@media screen and (max-width: 820px){
  .container{
    padding: 4rem 2rem;
  }
}
@media screen and (max-width: 500px){
  .container{
    padding: 2rem;
  }
}
`;
