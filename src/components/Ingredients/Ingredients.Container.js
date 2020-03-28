import React, { useState, useEffect, useRef } from "react";

import { Search } from "./Search";
import { MenuButton, MenuOptions } from "./Menu";
import { List } from "./List";

import * as Ingredient from "./Ingredients.Styles";

export default () => {
  const menuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(null);

  useEffect(() => {
    setMenuHeight(menuRef.current.offsetHeight);
  }, []);

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <Ingredient.Container>
      <Ingredient.Menu ref={menuRef}>
        <Search />
        <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
      </Ingredient.Menu>
      {showMenu ? (
        <MenuOptions menuHeight={menuHeight} />
      ) : (
        <List menuHeight={menuHeight} />
      )}
    </Ingredient.Container>
  );
};
