import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import {
  getIngredient,
  createIngredient,
  updateIngredient
} from "../reducers/ingredient";

const INITIAL_STATE = {
  name: "",
  calories: "",
  carbs: "",
  protein: "",
  fat: "",
  serving: "",
  unit: ""
};

const IngredientForm = props => {
  // Destructure all props
  const { pending, ingredient, error } = props;
  const { getIngredient, createIngredient, updateIngredient } = props;

  // Get the ID from the URL parameters
  const { id } = useParams();

  const [ingredientForm, setIngredientForm] = useState(INITIAL_STATE);

  // If ID exists, fetch the ingredient
  useEffect(() => {
    if (id) getIngredient(id);
  }, [id]);

  useEffect(() => {
    // When ingredient has been fetched, update the form state
    if (id && ingredient) setIngredientForm(ingredient);
  }, [ingredient]);

  // Controlled inputs for form
  const handleChange = (event, prop) => {
    setIngredientForm({ ...ingredientForm, [prop]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // If ID, update the ingredient
    if (id) {
      updateIngredient(id, ingredientForm);
    }
    // Else, create a new ingredient
    else {
      createIngredient(ingredientForm);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        value={ingredientForm.name}
        onChange={event => handleChange(event, "name")}
      />
      <input
        type="number"
        placeholder="calories"
        value={ingredientForm.calories}
        onChange={event => handleChange(event, "calories")}
      />
      <input
        type="number"
        placeholder="carbs"
        value={ingredientForm.carbs}
        onChange={event => handleChange(event, "carbs")}
      />
      <input
        type="number"
        placeholder="protein"
        value={ingredientForm.protein}
        onChange={event => handleChange(event, "protein")}
      />
      <input
        type="number"
        placeholder="fat"
        value={ingredientForm.fat}
        onChange={event => handleChange(event, "fat")}
      />
      <input
        type="number"
        placeholder="serving"
        value={ingredientForm.serving}
        onChange={event => handleChange(event, "serving")}
      />
      <input
        type="text"
        placeholder="unit"
        value={ingredientForm.unit}
        onChange={event => handleChange(event, "unit")}
      />
      <button type="submit">{id ? "update" : "create"}</button>
    </form>
  );
};

const mapStateToProps = state => ({
  pending: state.ingredients.pending,
  ingredient: state.ingredients.one,
  error: state.ingredients.error
});

export default connect(mapStateToProps, {
  getIngredient,
  createIngredient,
  updateIngredient
})(IngredientForm);
