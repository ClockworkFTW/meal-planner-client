import * as mealServices from "../services/meal";

const API_MEALS_PENDING = "API_MEALS_PENDING";
const API_MEALS_SUCCESS = "API_MEALS_SUCCESS";
const API_MEALS_FAILURE = "API_MEALS_FAILURE";

const apiMealsPending = () => ({
  type: API_MEALS_PENDING
});

const apiMealsSuccess = (method, data) => ({
  type: API_MEALS_SUCCESS,
  payload: { method, data }
});

const apiMealsFailure = error => ({
  type: API_MEALS_FAILURE,
  error
});

export const getMeals = () => {
  return async dispatch => {
    dispatch(apiMealsPending);
    try {
      const meals = await mealServices.getMeals();
      dispatch(apiMealsSuccess("get all", meals));
    } catch (error) {
      dispatch(apiMealsFailure(error));
    }
  };
};

export const getIngredient = id => {
  return async dispatch => {
    dispatch(apiMealsPending);
    try {
      const meal = await mealServices.getMeal(id);
      dispatch(apiMealsSuccess("get one", meal));
    } catch (error) {
      dispatch(apiMealsFailure(error));
    }
  };
};

export const createIngredient = ingredient => {
  return async dispatch => {
    dispatch(apiMealsPending);
    try {
      const newMeal = await mealServices.createMeal(ingredient);
      dispatch(apiMealsSuccess("create", newMeal));
    } catch (error) {
      dispatch(apiMealsFailure(error));
    }
  };
};

export const updateIngredient = (id, ingredient) => {
  return async dispatch => {
    dispatch(apiMealsPending);
    try {
      const updatedMeal = await mealServices.updateMeal(id, ingredient);
      dispatch(apiMealsSuccess("update", updatedMeal));
    } catch (error) {
      dispatch(apiMealsFailure(error));
    }
  };
};

export const deleteIngredient = id => {
  return async dispatch => {
    dispatch(apiMealsPending);
    try {
      await mealServices.deleteMeal(id);
      dispatch(apiMealsSuccess("delete", id));
    } catch (error) {
      dispatch(apiMealsFailure(error));
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
    case API_MEALS_PENDING:
      return { ...state, pending: true };
    case API_MEALS_SUCCESS:
      return handleSuccess(state, action);
    case API_MEALS_FAILURE:
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
