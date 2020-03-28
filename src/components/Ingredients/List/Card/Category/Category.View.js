import React from "react";

import * as Category from "./Category.Styles";

export default ({ category }) => {
  const { color, icon } = setCategory(category);

  return (
    <Category.Container background={color}>
      <Category.Icon icon={["fas", icon]} />
    </Category.Container>
  );
};

export const setCategory = category => {
  let icon = "question";
  let color = "#A0AEC0";

  switch (category) {
    case "all":
      icon = "shopping-basket";
      color = "#A0AEC0";
      break;
    case "vegetable":
      icon = "leaf";
      color = "#48BB78";
      break;
    case "fruit":
      icon = "apple-alt";
      color = "#ED64A6";
      break;
    case "grain":
      icon = "wheat";
      color = "#ED8936";
      break;
    case "meat":
      icon = "meat";
      color = "#F56565";
      break;
    case "seafood":
      icon = "fish";
      color = "#4299E1";
      break;
    case "dairy":
      icon = "cheese-swiss";
      color = "#ECC94B";
      break;
    case "oil":
      icon = "tint";
      color = "#9F7AEA";
      break;
    case "alcohol":
      icon = "cocktail";
      color = "#667EEA";
      break;
    default:
      break;
  }

  return { icon, color };
};
