import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

import { moveMealIngredient, addMealIngredient } from "../../reducers/meal";

import { Meals } from "../../components/Meals";
import { Ingredients } from "../../components/Ingredients";

import * as Home from "./Home.Styles";

export default () => {
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.ingredients.all);

  // Handle ingredient dragging
  const onDragEnd = useCallback(
    result => {
      const { draggableId, source, destination } = result;

      // If ingredient was dragged onto a droppable...
      if (destination) {
        const srcId = source.droppableId;
        const dstId = destination.droppableId;
        const dstInd = destination.index;

        // Add ingredient to meal
        if (srcId === "ingredient-list" && dstId !== "ingredient-list") {
          const ingredient = ingredients.find(
            ingredient => ingredient.id == draggableId
          );
          dispatch(addMealIngredient(dstId, dstInd, ingredient));
        }

        // Move ingredient within or between meals
        else {
          dispatch(moveMealIngredient(result));
        }
      }
    },
    [dispatch, ingredients]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Home.Container>
        <Meals />
        <Ingredients />
      </Home.Container>
    </DragDropContext>
  );
};
