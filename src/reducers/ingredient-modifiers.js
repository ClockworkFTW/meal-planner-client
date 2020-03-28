const SET_INGREDIENT_MODIFIER = "SET_INGREDIENT_MODIFIER";

export const setIngredientModifier = (prop, val) => ({
  type: SET_INGREDIENT_MODIFIER,
  payload: { prop, val }
});

const INITIAL_STATE = {
  search: "",
  filter: "all",
  sort: "name",
  ascending: true
};

const ingredientModifierReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_INGREDIENT_MODIFIER:
      const { prop, val } = action.payload;
      return { ...state, [prop]: val };
    default:
      return state;
  }
};

export default ingredientModifierReducer;
