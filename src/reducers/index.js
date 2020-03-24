import { combineReducers } from "redux";

import ingredients from "./ingredient";
import ingredientFilter from "./ingredient-filter";
import ingredientSort from "./ingredient-sort";

import meals from "./meal";

const rootReducer = combineReducers({
  ingredients,
  ingredientFilter,
  ingredientSort,
  meals
});

export default rootReducer;
