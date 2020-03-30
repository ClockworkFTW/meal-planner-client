import React from "react";

import * as Item from "./Item.Styles";

import { Meta } from "./Meta";
import { Ingredients } from "./Ingredients";
import { Macros } from "./Macros";

export default ({ meal }) => (
  <Item.Container>
    <Meta time={meal.time} name={meal.name} />
    <Ingredients meal={meal} />
    <Macros ingredients={meal.ingredients} />
  </Item.Container>
);
