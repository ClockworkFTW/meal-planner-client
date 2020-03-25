import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setIngredientModifier } from "../../../reducers/ingredient-modifiers";

import Search from "./Search.View";

export default () => {
  const term = useSelector(state => state.ingredientModifiers.search);
  const dispatch = useDispatch();

  const [search, setSearch] = useState(term);

  const inputRef = useRef(null);

  const submitSearch = () => {
    if (search) {
      dispatch(setIngredientModifier("search", search));
      inputRef.current.focus();
    }
  };

  const clearSearch = () => {
    dispatch(setIngredientModifier("search", ""));
    setSearch("");
    inputRef.current.focus();
  };

  return (
    <Search
      term={term}
      search={search}
      setSearch={setSearch}
      submitSearch={submitSearch}
      clearSearch={clearSearch}
      inputRef={inputRef}
    />
  );
};
