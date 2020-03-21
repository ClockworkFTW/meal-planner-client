import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getIngredients } from "../services/ingredient";

import IngredientCard from "./IngredientCard";

const IngredientList = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getIngredients(setIngredients);
  }, []);

  return (
    <div>
      <Link to="/ingredients/form">create</Link>
      {ingredients.map(ingredient => (
        <IngredientCard key={ingredient.id} ingredient={ingredient} />
      ))}
    </div>
  );
};

export default IngredientList;
