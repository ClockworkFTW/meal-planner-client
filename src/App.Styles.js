import styled, { createGlobalStyle } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/pro-regular-svg-icons";
import "reset-css";

library.add(far);

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
