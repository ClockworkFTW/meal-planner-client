import React from "react";
import { Link } from "react-router-dom";

const IngredientListBody = ({ ingredients }) => (
  <tbody>
    {ingredients.map(ingredient => (
      <tr key={ingredient.id}>
        <td>
          <Link to={`/ingredients/${ingredient.id}`}>{ingredient.name}</Link>
        </td>
        <td>{ingredient.calories}</td>
        <td>{ingredient.carbs}</td>
        <td>{ingredient.protein}</td>
        <td>{ingredient.fat}</td>
        <td>{ingredient.serving}</td>
        <td>{ingredient.unit}</td>
        <td>
          <Link to={`/ingredients/form/${ingredient.id}`}>edit</Link>
        </td>
      </tr>
    ))}
  </tbody>
);

export default IngredientListBody;
