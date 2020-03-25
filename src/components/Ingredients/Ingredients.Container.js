import React, { useState, useEffect, useRef } from "react";

import { Search } from "./Search";
import { List } from "./List";

import * as Ingredient from "./Ingredients.Styles";

export default () => {
  const menuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(null);

  useEffect(() => {
    setMenuHeight(menuRef.current.offsetHeight);
  }, []);

  return (
    <Ingredient.Container>
      <Ingredient.Menu ref={menuRef}>
        <Search />
      </Ingredient.Menu>
      <List menuHeight={menuHeight} />
    </Ingredient.Container>
  );
};
