import React from "react";

import { Item } from "./Item";

import * as List from "./List.Styles";

export default ({ meals, add }) => (
  <List.Container>
    {meals.map((meal, index) => (
      <Item key={index} meal={meal} />
    ))}
    <button onClick={add}>add meal</button>
  </List.Container>
);
