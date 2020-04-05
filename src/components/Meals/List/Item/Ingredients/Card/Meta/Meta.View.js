import React, { useState } from "react";

import * as Meta from "./Meta.Styles";

export default ({ ingredient, dragging }) => {
  const { quantity, serving_unit } = ingredient;
  let { calories, serving_size, carbs, protein, fat } = ingredient;

  calories = quantity ? calories * quantity : calories;
  serving_size = quantity ? serving_size * quantity : serving_size;

  carbs = quantity ? carbs * quantity : carbs;
  protein = quantity ? protein * quantity : protein;
  fat = quantity ? fat * quantity : fat;

  const [toggle, setToggle] = useState(true);

  return (
    <Meta.Container onClick={() => setToggle(!toggle)} dragging={dragging}>
      {toggle ? (
        <>
          <span>{calories}kcal</span>
          <span style={{ margin: "0 6px" }}>&bull;</span>
          <span>
            {serving_size}
            {serving_unit}
          </span>
        </>
      ) : (
        <>
          <span>{carbs}g carbs</span>
          <span style={{ margin: "0 6px" }}>&bull;</span>
          <span>{protein}g protein</span>
          <span style={{ margin: "0 6px" }}>&bull;</span>
          <span>{fat}g fat</span>
        </>
      )}
    </Meta.Container>
  );
};
