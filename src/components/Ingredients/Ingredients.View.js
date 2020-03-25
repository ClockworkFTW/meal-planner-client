import React from "react";

import { Search } from "./Search";
import { List } from "./List";

import * as Ingredient from "./Ingredients.Styles";

export default () => (
  <Ingredient.Container>
    <Ingredient.Menu>
      <Search />
    </Ingredient.Menu>
    <List />
  </Ingredient.Container>
);
