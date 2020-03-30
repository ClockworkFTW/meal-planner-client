import * as mealServices from "../services/meal";

// MEAL API: Logic for handling all meal API calls

// Types

const API_MEALS_PENDING = "API_MEALS_PENDING";
const API_MEALS_SUCCESS = "API_MEALS_SUCCESS";
const API_MEALS_FAILURE = "API_MEALS_FAILURE";

// Actions

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

export const getAllMeals = () => {
  return async dispatch => {
    dispatch(apiMealsPending);
    try {
      const ingredients = await mealServices.getMeals();
      dispatch(apiMealsSuccess("get all", ingredients));
    } catch (error) {
      dispatch(apiMealsFailure(error));
    }
  };
};

export const createMeal = ingredient => {
  return async dispatch => {
    dispatch(apiMealsPending);
    try {
      const newIngredient = await mealServices.createMeal(ingredient);
      dispatch(apiMealsSuccess("create", newIngredient));
    } catch (error) {
      dispatch(apiMealsFailure(error));
    }
  };
};

export const updateMeal = (id, ingredient) => {
  return async dispatch => {
    dispatch(apiMealsPending);
    try {
      const updatedIngredient = await mealServices.updateMeal(id, ingredient);
      dispatch(apiMealsSuccess("update", updatedIngredient));
    } catch (error) {
      dispatch(apiMealsFailure(error));
    }
  };
};

export const deleteMeal = id => {
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

// Handlers

const handleApiSuccess = (state, action) => {
  const { method, data } = action.payload;

  let { all } = state;

  switch (method) {
    case "get all":
      all = data;
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

  return { ...state, pending: false, all };
};

// MEAL EDITOR: Logic for handling meal editor state

// Types

const ADD_MEAL_INGREDIENT = "ADD_MEAL_INGREDIENT";
const MODIFY_MEAL_INGREDIENT = "MODIFY_MEAL_INGREDIENT";
const REMOVE_MEAL_INGREDIENT = "REMOVE_MEAL_INGREDIENT";

// Actions

export const addMealIngredient = id => ({
  type: ADD_MEAL_INGREDIENT,
  id
});

export const modifyMealIngredient = (mealId, ingredientId, quantity) => ({
  type: MODIFY_MEAL_INGREDIENT,
  payload: { mealId, ingredientId, quantity }
});

export const removeMealIngredient = (mealId, ingredientId) => ({
  type: REMOVE_MEAL_INGREDIENT,
  payload: { mealId, ingredientId }
});

// Handlers

const handleModifyMealIngredient = (state, action) => {
  const { mealId, ingredientId, quantity } = action.payload;
  return state.all.map(meal => {
    if (meal.id === mealId) {
      const ingredients = meal.ingredients.map(ingredient => {
        if (ingredient.id === ingredientId) {
          if (quantity < 0) {
            return { ...ingredient, quantity: 0 };
          } else {
            return { ...ingredient, quantity };
          }
        } else {
          return ingredient;
        }
      });
      return { ...meal, ingredients };
    } else {
      return meal;
    }
  });
};

const handleRemoveMealIngredient = (state, action) => {
  const { mealId, ingredientId } = action.payload;
  return state.all.map(meal => {
    if (meal.id === mealId) {
      const ingredients = meal.ingredients.filter(
        ingredient => ingredient.id !== ingredientId
      );
      return { ...meal, ingredients };
    } else {
      return meal;
    }
  });
};

// MEAL REDUCER

const INITIAL_STATE = {
  pending: false,
  all: [],
  error: null
};

const mealsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_MEALS_PENDING:
      return { ...state, pending: true };
    case API_MEALS_SUCCESS:
      return handleApiSuccess(state, action);
    case API_MEALS_FAILURE:
      return { ...state, pending: false, error: action.error };
    case MODIFY_MEAL_INGREDIENT:
      return { ...state, all: handleModifyMealIngredient(state, action) };
    case REMOVE_MEAL_INGREDIENT:
      return { ...state, all: handleRemoveMealIngredient(state, action) };
    default:
      return state;
  }
};

export default mealsReducer;
