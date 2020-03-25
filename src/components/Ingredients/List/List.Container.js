import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllIngredients } from "../../../reducers/ingredient";

import { Card } from "./Card";

import * as List from "./List.Styles";

export default ({ menuHeight }) => {
  let ingredients = useSelector(state => state.ingredients.all);
  const search = useSelector(state => state.ingredientModifiers.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllIngredients());
  }, []);

  ingredients = ingredients.filter(ingredient =>
    ingredient.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <List.Container menuHeight={menuHeight}>
      {ingredients.map(ingredient => (
        <Card key={ingredient.id} search={search} ingredient={ingredient} />
      ))}
    </List.Container>
  );
};
