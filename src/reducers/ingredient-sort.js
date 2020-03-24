const SET_INGREDIENT_SORT = "SET_INGREDIENT_SORT";

export const setIngredientSort = (activeProp, ascending) => ({
  type: SET_INGREDIENT_SORT,
  payload: { activeProp, ascending }
});

const INITIAL_STATE = {
  activeProp: "name",
  ascending: true
};

const ingredientSortReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_INGREDIENT_SORT:
      return action.payload;
    default:
      return state;
  }
};

export default ingredientSortReducer;
