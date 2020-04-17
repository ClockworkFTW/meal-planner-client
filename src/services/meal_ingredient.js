import axios from "axios";

const baseURL = "http://localhost:5000/meal_ingredients";

const addIngredient = async (mealId, ingredientId, position) => {
  await axios.post(baseURL, { mealId, ingredientId, position });
};

const removeIngredient = async (mealId, ingredientId, position) => {
  await axios.delete(`${baseURL}/${mealId}/${ingredientId}/${position}`);
};

const updateIngredient = async (mealId, ingredientId, update) => {
  await axios.patch(`${baseURL}/${mealId}/${ingredientId}`, update);
};

export { addIngredient, removeIngredient, updateIngredient };
