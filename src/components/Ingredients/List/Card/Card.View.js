import React from "react";

import * as Card from "./Card.Styles";

import { Category, setCategory } from "./Category";

export default ({ search, ingredient }) => {
  const { color } = setCategory(ingredient.category);

  return (
    <Card.Container>
      <Card.Group>
        <Category category={ingredient.category} />
        <Card.Name
          searchWords={[search]}
          textToHighlight={ingredient.name}
          color={color}
        />
      </Card.Group>
      <Card.Group>
        <Card.Meta>
          <span>{ingredient.calories}kcal</span>
          <span style={{ margin: "0 6px" }}>&bull;</span>
          <span>
            {ingredient.serving}
            {ingredient.unit}
          </span>
        </Card.Meta>
      </Card.Group>
    </Card.Container>
  );
};
