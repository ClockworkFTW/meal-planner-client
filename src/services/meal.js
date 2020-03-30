import axios from "axios";

const baseURL = "http://localhost:5000/meals";

const getMeals = async () => {
  const result = await axios.get(baseURL);
  return result.data;
};

const createMeal = async meal => {
  const result = await axios.post(baseURL, meal);
  return result.data;
};

const updateMeal = async (id, meal) => {
  const result = await axios.put(`${baseURL}/${id}`, meal);
  return result.data;
};

const deleteMeal = async id => {
  await axios.delete(`${baseURL}/${id}`);
};

export { getMeals, createMeal, updateMeal, deleteMeal };
