import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Meta from "./Meta.View";

export default ({ name, time }) => {
  const dispatch = useDispatch();

  return <Meta name={name} time={time} />;
};
