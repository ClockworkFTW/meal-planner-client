import { combineReducers } from "redux";

import ingredients from "./ingredient";
import ingredientModifiers from "./ingredient-modifiers";
import meals from "./meal";

const rootReducer = combineReducers({
  ingredients,
  ingredientModifiers,
  meals
});

export default rootReducer;
