import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import { getAllMeals } from "../../../reducers/meal";

import List from "./List.View";

export default ({ offset }) => {
  const meals = useSelector(state =>
    state.meals.all.filter(meal =>
      moment(meal.time).isSame(moment().add(offset, "day"), "day")
    )
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMeals());
  }, [dispatch]);

  return <List meals={meals} />;
};
