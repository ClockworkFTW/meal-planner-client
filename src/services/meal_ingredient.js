import axios from "axios";

const baseURL = "http://localhost:5000/meal_ingredients";

const addIngredient = async (mealId, ingredientId) => {
  await axios.post(`${baseURL}/${mealId}/${ingredientId}`);
};

const removeIngredient = async (mealId, ingredientId) => {
  await axios.delete(`${baseURL}/${mealId}/${ingredientId}`);
};

const updateIngredient = async (mealId, ingredientId, quantity) => {
  await axios.patch(`${baseURL}/${mealId}/${ingredientId}`, { quantity });
};

export { addIngredient, removeIngredient, updateIngredient };
