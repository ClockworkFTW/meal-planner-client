import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { updateMeal } from "../../../../../../reducers/meal";

import { NameEditor, NameDisplay } from "./Name.View";

export default ({ id, name }) => {
  // Toggle editor
  const [editing, setEditing] = useState(false);
  const toggle = () => {
    setNameInput(name);
    setEditing(!editing);
  };

  // Component form state
  const nameField = useRef(null);
  const [nameInput, setNameInput] = useState(name);

  useEffect(() => {
    if (editing) {
      nameField.current.focus();
    }
  }, [editing]);

  // Save meal name to database
  const dispatch = useDispatch();
  const saveName = () => {
    dispatch(updateMeal(id, { name: nameInput }));
    toggle();
  };

  return editing ? (
    <NameEditor
      field={nameField}
      name={nameInput}
      setName={setNameInput}
      saveName={saveName}
      toggle={toggle}
    />
  ) : (
    <NameDisplay name={name} toggle={toggle} />
  );
};
