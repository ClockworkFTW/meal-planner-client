import { combineReducers } from "redux";

import ingredientsReducer from "./ingredient";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer
});

export default rootReducer;
