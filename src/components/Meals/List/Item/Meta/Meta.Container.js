import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { editMeal } from "../../../../../reducers/meal";

import Meta from "./Meta.View";

export default ({ id, name, time }) => {
  const dispatch = useDispatch();

  const setName = event => dispatch(editMeal(id, "name", event.target.value));

  const [edit, setEdit] = useState(false);

  return (
    <Meta
      edit={edit}
      setEdit={setEdit}
      name={name}
      setName={setName}
      time={time}
    />
  );
};
