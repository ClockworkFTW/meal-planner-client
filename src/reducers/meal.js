import uniqid from "uniqid";
import * as mealServices from "../services/meal";
import * as mealIngredientServices from "../services/meal_ingredient";

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

export const createMeal = meal => {
  return async dispatch => {
    dispatch(apiMealsPending);
    try {
      const newMeal = await mealServices.createMeal(meal);
      dispatch(apiMealsSuccess("create", newMeal));
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

const EDIT_MEAL = "EDIT_MEAL";

const ADD_MEAL_INGREDIENT = "ADD_MEAL_INGREDIENT";
const MOVE_MEAL_INGREDIENT = "MOVE_MEAL_INGREDIENT";
const MODIFY_MEAL_INGREDIENT = "MODIFY_MEAL_INGREDIENT";
const REMOVE_MEAL_INGREDIENT = "REMOVE_MEAL_INGREDIENT";

// Actions

export const editMeal = (id, prop, val) => ({
  type: EDIT_MEAL,
  payload: { id, prop, val }
});

export const addMealIngredient = (mealId, ingredientInd, ingredient) => ({
  type: ADD_MEAL_INGREDIENT,
  payload: { mealId, ingredientInd, ingredient }
});

export const moveMealIngredient = result => ({
  type: MOVE_MEAL_INGREDIENT,
  result
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

const handleEditMeal = (state, action) => {
  const { id, prop, val } = action.payload;
  return state.all.map(meal => {
    if (meal.dropId === id) {
      return { ...meal, [prop]: val };
    } else {
      return meal;
    }
  });
};

const handleAddMealIngredient = (state, action) => {
  const { mealId, ingredientInd, ingredient } = action.payload;
  // Update state
  return state.all.map(meal => {
    if (mealId === meal.dropId) {
      // Update database
      mealIngredientServices.addIngredient(meal.id, ingredient.id);

      const { ingredients } = meal;

      ingredients.splice(ingredientInd, 0, {
        ...ingredient,
        dragId: uniqid(),
        quantity: 1
      });

      return { ...meal, ingredients };
    } else {
      return meal;
    }
  });
};

const handleMoveMealIngredient = (state, action) => {
  const meals = state.all;
  const { source, destination } = action.result;

  if (!destination) {
    // Dragging outside droppables
    return meals;
  } else {
    const srcId = source.droppableId;
    const srcInd = source.index;
    const dstId = destination.droppableId;
    const dstInd = destination.index;

    // Dragging within meal
    if (srcId === dstId) {
      return meals.map(meal => {
        if (srcId === meal.dropId) {
          const { ingredients } = meal;
          const ingredient = ingredients[srcInd];

          ingredients.splice(srcInd, 1);
          ingredients.splice(dstInd, 0, ingredient);

          return { ...meal, ingredients };
        } else {
          return meal;
        }
      });
    }
    // Dragging between meals
    else if (srcId !== "ingredient-list" && dstId !== "ingredient-list") {
      // Get the dragged ingredient
      let targetIngredient;
      meals.forEach(meal => {
        meal.ingredients.forEach((ingredient, index) => {
          if (srcId === meal.dropId && srcInd === index) {
            targetIngredient = ingredient;
          }
        });
      });

      // Move the ingredient
      return meals.map(meal => {
        const { ingredients } = meal;
        if (srcId === meal.dropId) {
          // Update database
          mealIngredientServices.removeIngredient(meal.id, targetIngredient.id);
          ingredients.splice(srcInd, 1);
        } else if (dstId === meal.dropId) {
          // Update database
          mealIngredientServices.addIngredient(meal.id, targetIngredient.id);
          ingredients.splice(dstInd, 0, targetIngredient);
        }
        return { ...meal, ingredients };
      });
    }
    // Dragging from ingredient list to meal
    else {
      return meals;
    }
  }
};

const handleModifyMealIngredient = (state, action) => {
  const { mealId, ingredientId, quantity } = action.payload;
  return state.all.map(meal => {
    if (meal.dropId === mealId) {
      const ingredients = meal.ingredients.map(ingredient => {
        if (ingredient.dragId === ingredientId) {
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
    if (meal.dropId === mealId) {
      const ingredients = meal.ingredients.filter(ingredient => {
        if (ingredient.dragId !== ingredientId) {
          return true;
        } else {
          // Update database
          mealIngredientServices.removeIngredient(meal.id, ingredient.id);
          return false;
        }
      });
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
    case EDIT_MEAL:
      return { ...state, all: handleEditMeal(state, action) };
    case ADD_MEAL_INGREDIENT:
      return { ...state, all: handleAddMealIngredient(state, action) };
    case MOVE_MEAL_INGREDIENT:
      return { ...state, all: handleMoveMealIngredient(state, action) };
    case MODIFY_MEAL_INGREDIENT:
      return { ...state, all: handleModifyMealIngredient(state, action) };
    case REMOVE_MEAL_INGREDIENT:
      return { ...state, all: handleRemoveMealIngredient(state, action) };
    default:
      return state;
  }
};

export default mealsReducer;
