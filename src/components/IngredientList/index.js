import React, { useEffect } from "react";
import { connect } from "react-redux";

// Redux Actions
import { getIngredients } from "../../reducers/ingredient";
import { setIngredientFilter } from "../../reducers/ingredient-filter";
import { setIngredientSort } from "../../reducers/ingredient-sort";

// Components
import IngredientListMenu from "./Menu";
import IngredientListHeader from "./Header";
import IngredientListBody from "./Body";

const IngredientList = props => {
  const {
    ingredients,
    getIngredients,
    ingredientFilter,
    setIngredientFilter,
    ingredientSort,
    setIngredientSort
  } = props;

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div>
      <IngredientListMenu
        ingredientFilter={ingredientFilter}
        setIngredientFilter={setIngredientFilter}
      />
      <table style={{ width: "100%" }}>
        <IngredientListHeader
          ingredientSort={ingredientSort}
          setIngredientSort={setIngredientSort}
        />
        <IngredientListBody ingredients={ingredients} />
      </table>
    </div>
  );
};

// Apply filters and sorts to ingredients array
const reduceIngredients = state => {
  const { search } = state.ingredientFilter;
  const { activeProp, ascending } = state.ingredientSort;

  let reducedIngredients = state.ingredients.all;

  reducedIngredients = reducedIngredients.filter(ingredient =>
    ingredient.name.toLowerCase().includes(search.toLowerCase())
  );

  reducedIngredients = reducedIngredients.sort((a, b) => {
    if (ascending) {
      if (activeProp === "name") {
        return a[activeProp].localeCompare(b[activeProp]);
      } else {
        return a[activeProp] - b[activeProp];
      }
    } else {
      if (activeProp === "name") {
        return b[activeProp].localeCompare(a[activeProp]);
      } else {
        return b[activeProp] - a[activeProp];
      }
    }
  });

  return reducedIngredients;
};

const mapStateToProps = state => ({
  pending: state.ingredients.pending,
  ingredients: reduceIngredients(state),
  error: state.ingredients.error,
  ingredientFilter: state.ingredientFilter,
  ingredientSort: state.ingredientSort
});

export default connect(mapStateToProps, {
  getIngredients,
  setIngredientFilter,
  setIngredientSort
})(IngredientList);
