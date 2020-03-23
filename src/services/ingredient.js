import axios from "axios";

const baseURL = "http://localhost:5000/ingredients";

const getIngredients = async () => {
  const result = await axios.get(baseURL);
  return result.data;
};

const getIngredient = async id => {
  const result = await axios.get(`${baseURL}/${id}`);
  return result.data;
};

const createIngredient = async ingredient => {
  const result = await axios.post(baseURL, ingredient);
  return result.data;
};

const updateIngredient = async (id, ingredient) => {
  const result = await axios.put(`${baseURL}/${id}`, ingredient);
  return result.data;
};

const deleteIngredient = async id => {
  await axios.delete(`${baseURL}/${id}`);
};

export {
  getIngredients,
  getIngredient,
  createIngredient,
  updateIngredient,
  deleteIngredient
};
