import styled, { createGlobalStyle } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import "reset-css";

library.add(fas);

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
