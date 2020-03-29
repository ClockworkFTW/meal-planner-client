import React, { useState } from "react";

import { Menu } from "./Menu";
import { List } from "./List";

import * as Meals from "./Meals.Styles";

export default () => {
  const [offset, setOffset] = useState(0);
  return (
    <Meals.Container>
      <Menu offset={offset} setOffset={setOffset} />
      <List offset={offset} />
    </Meals.Container>
  );
};
