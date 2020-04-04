import React from "react";
import { useDispatch } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

import {
  modifyMealIngredient,
  removeMealIngredient
} from "../../../../../reducers/meal";

import { Card } from "./Card";

export default ({ meal }) => {
  const dispatch = useDispatch();

  const modify = (id, quantity) =>
    dispatch(modifyMealIngredient(meal.dropId, id, quantity));
  const remove = id => dispatch(removeMealIngredient(meal.dropId, id));

  return (
    <Droppable droppableId={meal.dropId}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{ width: "100%" }}
        >
          {meal.ingredients.map((ingredient, index) => (
            <Card
              key={ingredient.dragId}
              index={index}
              ingredient={ingredient}
              editable={true}
              modify={modify}
              remove={remove}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
