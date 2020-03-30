import React from "react";
import { Draggable } from "react-beautiful-dnd";

import * as Card from "./Card.Styles";

import { Category, setCategory } from "./Category";

export default ({ index, ingredient, search }) => {
  const { color } = setCategory(ingredient.category);

  return (
    <Draggable draggableId={ingredient.id.toString()} index={index}>
      {provided => (
        <Card.Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
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
                {ingredient.serving_size}
                {ingredient.serving_unit}
              </span>
            </Card.Meta>
          </Card.Group>
        </Card.Container>
      )}
    </Draggable>
  );
};
