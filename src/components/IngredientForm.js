import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  getIngredient,
  createIngredient,
  updateIngredient
} from "../services/ingredient";

const IngredientForm = () => {
  const { id } = useParams();

  const [ingredient, setIngredient] = useState({
    name: "",
    calories: "",
    carbs: "",
    protein: "",
    fat: "",
    serving: "",
    unit: ""
  });

  useEffect(() => {
    if (id) {
      getIngredient(id, setIngredient);
    }
  }, [id]);

  const handleChange = (event, prop) => {
    setIngredient({ ...ingredient, [prop]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (id) {
      updateIngredient(id, ingredient);
    } else {
      createIngredient(ingredient);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        value={ingredient.name}
        onChange={event => handleChange(event, "name")}
      />
      <input
        type="number"
        placeholder="calories"
        value={ingredient.calories}
        onChange={event => handleChange(event, "calories")}
      />
      <input
        type="number"
        placeholder="carbs"
        value={ingredient.carbs}
        onChange={event => handleChange(event, "carbs")}
      />
      <input
        type="number"
        placeholder="protein"
        value={ingredient.protein}
        onChange={event => handleChange(event, "protein")}
      />
      <input
        type="number"
        placeholder="fat"
        value={ingredient.fat}
        onChange={event => handleChange(event, "fat")}
      />
      <input
        type="number"
        placeholder="serving"
        value={ingredient.serving}
        onChange={event => handleChange(event, "serving")}
      />
      <input
        type="text"
        placeholder="unit"
        value={ingredient.unit}
        onChange={event => handleChange(event, "unit")}
      />
      <button type="submit">{id ? "update" : "create"}</button>
    </form>
  );
};

export default IngredientForm;
