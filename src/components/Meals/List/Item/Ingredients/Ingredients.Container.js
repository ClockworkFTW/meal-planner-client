import React from "react";
import { useDispatch } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

import { removeMealIngredient } from "../../../../../reducers/meal";

import { Card } from "./Card";

import * as Ingredients from "./Ingredients.Style";

export default ({ meal }) => {
  const ingredients = meal.ingredients.sort((a, b) => a.position - b.position);
  const noIngredients = meal.ingredients.length === 0;

  const dispatch = useDispatch();
  const remove = ingredientId =>
    dispatch(removeMealIngredient(meal.dropId, ingredientId));

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
              mealId={meal.id}
              ingredient={ingredient}
              remove={remove}
              editable={true}
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
