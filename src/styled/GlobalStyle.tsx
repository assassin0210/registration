import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    background: #eaeaea;
    font-size: 14px;
    color: #262626;
    font-family: 'Inter', sans-serif;

    h1 {
      font-size: 36px;
    }
    h2,h3,h4 {
       font-size: 24px;
     }

    a {
      text-decoration: none;
    }

  }

`;
