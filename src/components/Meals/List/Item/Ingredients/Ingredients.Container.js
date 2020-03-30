import React from "react";
import { useDispatch } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

import {
  addMealIngredient,
  modifyMealIngredient,
  removeMealIngredient
} from "../../../../../reducers/meal";

import { Card } from "../../../../Ingredients/List/Card";

import * as Ingredients from "./Ingredients.Styles";

export default ({ meal }) => {
  const dispatch = useDispatch();

  const add = id => dispatch(addMealIngredient(meal.id, id));
  const modify = (id, quantity) =>
    dispatch(modifyMealIngredient(meal.id, id, quantity));
  const remove = id => dispatch(removeMealIngredient(meal.id, id));

  return (
    <Droppable droppableId={`meal-${meal.id}`}>
      {provided => (
        <Ingredients.Container
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {meal.ingredients.map((ingredient, index) => (
            <Ingredients.Item key={index}>
              <input
                type="number"
                value={ingredient.quantity}
                onChange={event => modify(ingredient.id, event.target.value)}
              />
              <Card ingredient={ingredient} index={index} />
              <button onClick={() => remove(ingredient.id)}>remove</button>
            </Ingredients.Item>
          ))}
          {provided.placeholder}
        </Ingredients.Container>
      )}
    </Droppable>
  );
};
