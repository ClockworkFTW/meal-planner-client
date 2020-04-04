import React from "react";
import { Draggable } from "react-beautiful-dnd";

import * as Card from "./Card.Styles";

import { Category, setCategory } from "./Category";
import { Meta } from "./Meta";

export default props => {
  // General props
  const { index, ingredient } = props;

  // Meal list props
  const { editable, modify, remove } = props;

  // Ingredient list props
  const { search } = props;
  const { color } = setCategory(ingredient.category);

  return (
    <Draggable draggableId={ingredient.dragId} index={index}>
      {provided => (
        <Card.Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card.Group>
            {editable && (
              <Card.Quantity
                type="number"
                value={ingredient.quantity}
                onChange={event => modify(ingredient.id, event.target.value)}
                color={color}
              />
            )}
            <Category category={ingredient.category} />
            <Card.Name
              searchWords={[search]}
              textToHighlight={ingredient.name}
              color={color}
            />
          </Card.Group>
          <Card.Group>
            <Meta ingredient={ingredient} />
            {editable && (
              <Card.Button onClick={() => remove(ingredient.dragId)}>
                <Card.Icon icon={["fas", "times"]} />
              </Card.Button>
            )}
          </Card.Group>
        </Card.Container>
      )}
    </Draggable>
  );
};
