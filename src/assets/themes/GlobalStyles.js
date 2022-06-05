import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body{
    font-family: 'Mulish', sans-serif;
  }
  html{
    font-size: 67.5%;
  }
`;