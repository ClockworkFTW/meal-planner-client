import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllIngredients } from "../../../reducers/ingredient";

import { Card } from "./Card";

import * as List from "./List.Styles";

export default ({ menuHeight }) => {
  let ingredients = useSelector(state => reduceIngredients(state));
  const { search } = useSelector(state => state.ingredientModifiers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllIngredients());
  }, [dispatch]);

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

const reduceIngredients = state => {
  const { search, filter, sort, ascending } = state.ingredientModifiers;

  let ingredients = state.ingredients.all;

  // Filter by search term
  ingredients = ingredients.filter(ingredient =>
    ingredient.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort ascending or descending
  if (sort === "name") {
    ingredients = ingredients.sort((a, b) =>
      ascending
        ? a[sort].localeCompare(b[sort])
        : b[sort].localeCompare(a[sort])
    );
  } else {
    ingredients = ingredients.sort((a, b) =>
      ascending ? a[sort] - b[sort] : b[sort] - a[sort]
    );
  }

  // Filter by category
  if (filter !== "all") {
    ingredients = ingredients.filter(
      ingredient => ingredient.category === filter
    );
  }

  return ingredients;
};
