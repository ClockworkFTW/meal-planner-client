import * as ingredientServices from "../services/ingredient";

const API_INGREDIENTS_PENDING = "API_INGREDIENTS_PENDING";
const API_INGREDIENTS_SUCCESS = "API_INGREDIENTS_SUCCESS";
const API_INGREDIENTS_FAILURE = "API_INGREDIENTS_FAILURE";

const apiIngredientsPending = () => ({
  type: API_INGREDIENTS_PENDING
});

const apiIngredientsSuccess = (method, data) => ({
  type: API_INGREDIENTS_SUCCESS,
  payload: { method, data }
});

const apiIngredientsFailure = error => ({
  type: API_INGREDIENTS_FAILURE,
  error
});

export const getAllIngredients = () => {
  return async dispatch => {
    dispatch(apiIngredientsPending);
    try {
      const ingredients = await ingredientServices.getIngredients();
      dispatch(apiIngredientsSuccess("get all", ingredients));
    } catch (error) {
      dispatch(apiIngredientsFailure(error));
    }
  };
};

export const getOneIngredient = id => {
  return async dispatch => {
    dispatch(apiIngredientsPending);
    try {
      const ingredient = await ingredientServices.getIngredient(id);
      dispatch(apiIngredientsSuccess("get one", ingredient));
    } catch (error) {
      dispatch(apiIngredientsFailure(error));
    }
  };
};

export const createIngredient = ingredient => {
  return async dispatch => {
    dispatch(apiIngredientsPending);
    try {
      const newIngredient = await ingredientServices.createIngredient(
        ingredient
      );
      dispatch(apiIngredientsSuccess("create", newIngredient));
    } catch (error) {
      dispatch(apiIngredientsFailure(error));
    }
  };
};

export const updateIngredient = (id, ingredient) => {
  return async dispatch => {
    dispatch(apiIngredientsPending);
    try {
      const updatedIngredient = await ingredientServices.updateIngredient(
        id,
        ingredient
      );
      dispatch(apiIngredientsSuccess("update", updatedIngredient));
    } catch (error) {
      dispatch(apiIngredientsFailure(error));
    }
  };
};

export const deleteIngredient = id => {
  return async dispatch => {
    dispatch(apiIngredientsPending);
    try {
      await ingredientServices.deleteIngredient(id);
      dispatch(apiIngredientsSuccess("delete", id));
    } catch (error) {
      dispatch(apiIngredientsFailure(error));
    }
  };
};

const INITIAL_STATE = {
  pending: false,
  all: [],
  one: null,
  error: null
};

const ingredientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_INGREDIENTS_PENDING:
      return { ...state, pending: true };
    case API_INGREDIENTS_SUCCESS:
      return handleSuccess(state, action);
    case API_INGREDIENTS_FAILURE:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

const handleSuccess = (state, action) => {
  const { method, data } = action.payload;

  let { all, one } = state;

  switch (method) {
    case "get all":
      all = data;
      break;
    case "get one":
      one = data;
      break;
    case "create":
      all = [...all, data];
      break;
    case "update":
      all = all.map(e => (e.id === data.id ? data : e));
      break;
    case "delete":
      all = state.all.filter(e => e.id !== data);
      break;
    default:
      break;
  }

  return { ...state, pending: false, all, one };
};

export default ingredientsReducer;
