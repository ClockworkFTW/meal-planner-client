import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getIngredients } from "../reducers/ingredient";

import IngredientCard from "./IngredientCard";

const IngredientList = ({ ingredients, getIngredients }) => {
  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div>
      <Link to="/ingredients/form">create</Link>
      {ingredients.map(ingredient => (
        <IngredientCard key={ingredient.id} ingredient={ingredient} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  pending: state.ingredients.pending,
  ingredients: state.ingredients.all,
  error: state.ingredients.error
});

export default connect(mapStateToProps, { getIngredients })(IngredientList);
