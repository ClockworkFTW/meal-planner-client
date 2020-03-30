import React from "react";

import { Item } from "./Item";

import * as List from "./List.Styles";

export default ({ meals }) => (
  <List.Container>
    {meals.map(meal => (
      <Item key={meal.id} meal={meal} />
    ))}
    <button>add meal</button>
  </List.Container>
);
