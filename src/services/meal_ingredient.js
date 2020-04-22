import axios from "axios";

const baseURL = "http://localhost:5000/meal_ingredients";

const addIngredient = async (mealId, ingredientId, position) => {
  await axios.post(baseURL, { mealId, ingredientId, position });
};

const removeIngredient = async (mealId, ingredientId, position) => {
  await axios.delete(`${baseURL}/${mealId}/${ingredientId}/${position}`);
};

const updateIngredient = async (mealId, ingredientId, quantity) => {
  await axios.patch(`${baseURL}/${mealId}/${ingredientId}`, { quantity });
};

export { addIngredient, removeIngredient, updateIngredient };
