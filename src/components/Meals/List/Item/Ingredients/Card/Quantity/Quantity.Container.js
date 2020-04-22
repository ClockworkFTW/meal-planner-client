import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import * as mealIngredientServices from "../../../../../../../services/meal_ingredient";

import { modifyMealIngredient } from "../../../../../../../reducers/meal";

import { QuantityEditor, QuantityDisplay } from "./Quantity.View";

export default ({ mealId, ingredientId, quantity, color }) => {
  const dispatch = useDispatch();

  // Toggle editor
  const [editing, setEditing] = useState(false);
  const [initialQuantity, setInitialQuantity] = useState(null);
  const toggle = saving => {
    if (saving) {
      setInitialQuantity(null);
      setEditing(!editing);
    } else {
      // Save initial quantity to component state on open
      if (!initialQuantity) {
        setInitialQuantity(quantity);
      }
      // Reset quantity to initial state on cancel
      else {
        dispatch(modifyMealIngredient(mealId, ingredientId, initialQuantity));
        setInitialQuantity(null);
      }
      setEditing(!editing);
    }
  };

  const inputField = useRef(null);
  useEffect(() => {
    if (editing) {
      inputField.current.select();
    }
  }, [editing]);

  // Update redux state
  const setQuantity = value => {
    dispatch(modifyMealIngredient(mealId, ingredientId, value));
  };

  // Save to database
  const saveQuantity = () => {
    mealIngredientServices.updateIngredient(mealId, ingredientId, quantity);
    toggle(true);
  };

  return editing ? (
    <QuantityEditor
      inputField={inputField}
      quantity={quantity}
      setQuantity={setQuantity}
      saveQuantity={saveQuantity}
      toggle={toggle}
      color={color}
    />
  ) : (
    <QuantityDisplay quantity={quantity} toggle={toggle} color={color} />
  );
};
