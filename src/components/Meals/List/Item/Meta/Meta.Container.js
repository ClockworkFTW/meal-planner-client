import React from "react";
import { useDispatch } from "react-redux";

import { editMeal } from "../../../../../reducers/meal";

import Meta from "./Meta.View";

export default ({ id, name, time }) => {
  const dispatch = useDispatch();

  const setName = event => dispatch(editMeal(id, "name", event.target.value));

  return <Meta name={name} setName={setName} time={time} />;
};
