import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  a {
    text-decoration: none;

  }

  body {
    padding: 3rem;
    background: #c5c5c5;
    font-size: 24px;
    color: #262626;
    font-family: sans-serif;
  }

`;
