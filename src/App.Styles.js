import { createGlobalStyle } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import "reset-css";

library.add(fas);

export const GlobalStyle = createGlobalStyle`
  /* Set font and box sizing */
  html {
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
    background: #EDF2F7;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  /* Remove number input arrows */
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
  input[type=number] {
      -moz-appearance:textfield;
  }
`;
