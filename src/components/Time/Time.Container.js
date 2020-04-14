import React, { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

import { updateMeal } from "../../reducers/meal";

import { TimeEditor, TimeDisplay } from "./Time.View";

export default ({ id, time }) => {
  // Toggle editor
  const [editing, setEditing] = useState(false);
  const toggle = () => {
    if (editing) {
      setHour(moment(time).hour());
      setMin(moment(time).minute());
    }
    setEditing(!editing);
  };

  // Component form state
  const [hour, setHour] = useState(moment(time).hour());
  const [min, setMin] = useState(moment(time).minute());

  // Update redux state with new meal time
  const dispatch = useDispatch();
  const setTime = () => {
    const newTime = moment(time)
      .hour(hour)
      .minute(min);
    dispatch(updateMeal(id, { time: newTime }));
    toggle();
  };

  return editing ? (
    <TimeEditor
      hour={hour}
      setHour={setHour}
      min={min}
      setMin={setMin}
      setTime={setTime}
      toggle={toggle}
    />
  ) : (
    <TimeDisplay time={time} toggle={toggle} />
  );
};
