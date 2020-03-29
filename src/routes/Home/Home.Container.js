import React from "react";

import { Meals } from "../../components/Meals";
import { Ingredients } from "../../components/Ingredients";

import * as Home from "./Home.Styles";

export default () => (
  <Home.Container>
    <Meals />
    <Ingredients />
  </Home.Container>
);
