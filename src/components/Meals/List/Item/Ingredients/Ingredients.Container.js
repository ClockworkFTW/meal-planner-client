import React from "react";
import { useDispatch } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

import {
  modifyMealIngredient,
  removeMealIngredient
} from "../../../../../reducers/meal";

import { Card } from "./Card";

import * as Ingredients from "./Ingredients.Style";

export default ({ meal }) => {
  const ingredients = meal.ingredients.sort((a, b) => a.position - b.position);
  const noIngredients = meal.ingredients.length === 0;

  const dispatch = useDispatch();
  const modify = (id, quantity) =>
    dispatch(modifyMealIngredient(meal.dropId, id, quantity));
  const remove = id => dispatch(removeMealIngredient(meal.dropId, id));

  return (
    <Droppable droppableId={meal.dropId}>
      {(provided, snapshot) => (
        <Ingredients.Container
          ref={provided.innerRef}
          {...provided.droppableProps}
          dropping={noIngredients || snapshot.isDraggingOver}
        >
          {ingredients.map((ingredient, index) => (
            <Card
              key={ingredient.dragId}
              index={index}
              ingredient={ingredient}
              editable={true}
              modify={modify}
              remove={remove}
            />
          ))}
          {noIngredients && (
            <Ingredients.Message>Add Ingredients</Ingredients.Message>
          )}
          {provided.placeholder}
        </Ingredients.Container>
      )}
    </Droppable>
  );
};
