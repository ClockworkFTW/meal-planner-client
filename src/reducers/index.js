import { combineReducers } from "redux";

import ingredients from "./ingredient";
import ingredientModifiers from "./ingredient-modifiers";

const rootReducer = combineReducers({
  ingredients,
  ingredientModifiers
});

export default rootReducer;
