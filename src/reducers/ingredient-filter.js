const SET_INGREDIENT_FILTER = "SET_INGREDIENT_FILTER";

export const setIngredientFilter = (prop, val) => ({
  type: SET_INGREDIENT_FILTER,
  payload: { prop, val }
});

const INITIAL_STATE = {
  search: ""
};

const ingredientFilterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_INGREDIENT_FILTER:
      const { prop, val } = action.payload;
      return { ...state, [prop]: val };
    default:
      return state;
  }
};

export default ingredientFilterReducer;
