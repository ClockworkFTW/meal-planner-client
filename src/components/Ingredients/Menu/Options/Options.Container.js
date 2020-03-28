import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setIngredientModifier } from "../../../../reducers/ingredient-modifiers";

import Options from "./Options.View";

export default ({ menuHeight }) => {
  const mods = useSelector(state => state.ingredientModifiers);

  const dispatch = useDispatch();
  const setMod = (mod, value) => dispatch(setIngredientModifier(mod, value));

  return <Options menuHeight={menuHeight} mods={mods} setMod={setMod} />;
};
