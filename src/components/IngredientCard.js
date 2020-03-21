import React from "react";
import { Link } from "react-router-dom";

const IngredientCard = ({ ingredient }) => (
  <div>
    <h2>{ingredient.name}</h2>
    <p>calories: {ingredient.calories}</p>
    <p>carbs: {ingredient.carbs}</p>
    <p>protein: {ingredient.protein}</p>
    <p>fat: {ingredient.fat}</p>
    <Link to={`/ingredients/${ingredient.id}`}>view</Link>
    <Link to={`/ingredients/form/${ingredient.id}`}>edit</Link>
  </div>
);

export default IngredientCard;
