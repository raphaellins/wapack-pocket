import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #312E38;
    -webkit-font-smooth: antialiased;
    color: #fff;
  }

  body, input, button {
    font-family: 16px Roboto, sans-serif
  }

  button{
    cursor: pointer;
  }

  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

 
`;
