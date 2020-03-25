import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setIngredientModifier } from "../../../reducers/ingredient-modifiers";

import Search from "./Search.View";

export default () => {
  const term = useSelector(state => state.ingredientModifiers.search);
  const dispatch = useDispatch();

  const [search, setSearch] = useState(term);

  const submitSearch = () => {
    if (search) dispatch(setIngredientModifier("search", search));
  };

  const clearSearch = () => {
    setSearch("");
    dispatch(setIngredientModifier("search", ""));
  };

  return (
    <Search
      term={term}
      search={search}
      setSearch={setSearch}
      submitSearch={submitSearch}
      clearSearch={clearSearch}
    />
  );
};
