import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMeals } from "../reducers/meal";

import MealCard from "./MealCard";

const MealList = ({ meals, getMeals }) => {
  useEffect(() => {
    getMeals();
  }, [getMeals]);

  return (
    <div>
      <Link to="/meals/form">create</Link>
      {meals.map(meal => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  pending: state.meals.pending,
  meals: state.meals.all,
  error: state.meals.error
});

export default connect(mapStateToProps, { getMeals })(MealList);
