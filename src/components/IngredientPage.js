import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { getIngredient } from "../reducers/ingredient";

const IngredientPage = ({ ingredient, getIngredient }) => {
  const { id } = useParams();

  useEffect(() => {
    getIngredient(id);
  }, []);

  return ingredient ? (
    <div>
      <h2>{ingredient.name}</h2>
      <p>calories: {ingredient.calories}</p>
      <p>carbs: {ingredient.carbs}</p>
      <p>protein: {ingredient.protein}</p>
      <p>fat: {ingredient.fat}</p>
    </div>
  ) : null;
};

const mapStateToProps = state => ({
  pending: state.ingredients.pending,
  ingredient: state.ingredients.one,
  error: state.ingredients.error
});

export default connect(mapStateToProps, { getIngredient })(IngredientPage);
