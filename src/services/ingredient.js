import axios from "axios";

const baseURL = "http://localhost:5000/ingredients";

const getIngredients = async setIngredients => {
  const result = await axios.get(baseURL);
  setIngredients(result.data);
};

const getIngredient = async (id, setIngredient) => {
  const result = await axios.get(`${baseURL}/${id}`);
  setIngredient(result.data);
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
