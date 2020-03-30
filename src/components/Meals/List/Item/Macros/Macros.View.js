import React from "react";

import * as Macros from "./Macros.Styles";

export default ({ ingredients }) => {
  let calories = 0,
    carbs = 0,
    protein = 0,
    fat = 0;

  ingredients.forEach(ingredient => {
    calories = calories + ingredient.calories * ingredient.quantity;
    carbs = carbs + ingredient.carbs * ingredient.quantity;
    protein = protein + ingredient.protein * ingredient.quantity;
    fat = fat + ingredient.fat * ingredient.quantity;
  });

  return (
    <Macros.Container>
      <Macros.Stat>{calories}kcal</Macros.Stat>
      <Macros.Stat>{carbs}g carbs</Macros.Stat>
      <Macros.Stat>{protein}g protein</Macros.Stat>
      <Macros.Stat>{fat}g fat</Macros.Stat>
    </Macros.Container>
  );
};
