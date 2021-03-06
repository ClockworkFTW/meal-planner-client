import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import { getAllMeals, createMeal, deleteMeal } from "../../../reducers/meal";

import List from "./List.View";

export default ({ offset }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMeals());
  }, [dispatch]);

  const meals = useSelector(state => {
    let { all } = state.meals;

    // Filter for meals that match active day
    all = all.filter(meal =>
      moment(meal.time).isSame(moment.utc().add(offset, "day"), "day")
    );

    // Sort meals chronologically
    all = all.sort((a, b) => moment(a.time) - moment(b.time));

    return all;
  });

  const add = () => {
    let time = moment.utc().add(offset, "days");
    const mealCount = meals.length;

    // If active day has no meals, add new meal at 6:00 AM
    if (mealCount === 0) {
      time = time
        .hour(6)
        .minute(0)
        .second(0)
        .millisecond(0);
    }
    // Else, add new meal after last meal
    else {
      const lastMealTime = moment(meals[mealCount - 1].time);
      const hour = lastMealTime.hour();
      const minute = lastMealTime.minute() + 1;
      time = time
        .hour(hour)
        .minute(minute)
        .second(0)
        .millisecond(0);
    }

    dispatch(createMeal({ user: 1, time }));
  };

  const remove = id => dispatch(deleteMeal(id));

  return <List meals={meals} add={add} remove={remove} />;
};
