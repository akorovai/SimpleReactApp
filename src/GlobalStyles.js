import  { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #f0f2f5;
    color: #5f5f5f;
    font-family: "Poppins", sans-serif;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  html {
    font-size: 16px;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;