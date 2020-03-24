import React from "react";
import { Link } from "react-router-dom";

const IngredientListMenu = ({ ingredientFilter, setIngredientFilter }) => (
  <div>
    <Link to="/ingredients/form">create ingredient</Link>
    <input
      type="text"
      value={ingredientFilter.search}
      onChange={event => setIngredientFilter("search", event.target.value)}
    />
  </div>
);

export default IngredientListMenu;
