import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getIngredient } from "../services/ingredient";

const IngredientPage = () => {
  const { id } = useParams();

  const [ingredient, setIngredient] = useState(null);

  useEffect(() => {
    getIngredient(id, setIngredient);
  }, [id]);

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

export default IngredientPage;
