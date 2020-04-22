import React from "react";
import { Draggable } from "react-beautiful-dnd";

import * as Card from "./Card.Styles";

import { Quantity } from "./Quantity";
import { Category, setCategory } from "./Category";
import { Meta } from "./Meta";

export default props => {
  // General props
  const { index, mealId, ingredient } = props;
  const { id, dragId, category, quantity, name } = ingredient;

  // Meal list props
  const { editable, remove } = props;

  // Ingredient list props
  const { search } = props;
  const { color } = setCategory(category);

  return (
    <Draggable draggableId={dragId} index={index}>
      {(provided, snapshot) => (
        <Card.Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          dragging={snapshot.isDragging}
        >
          <Card.Group>
            {editable && (
              <Quantity
                mealId={mealId}
                ingredientId={id}
                quantity={quantity}
                color={color}
              />
            )}
            <Category category={category} />
            <Card.Name
              searchWords={[search]}
              textToHighlight={name}
              color={color}
              dragging={snapshot.isDragging}
            />
          </Card.Group>
          <Card.Group>
            <Meta ingredient={ingredient} dragging={snapshot.isDragging} />
            {editable && (
              <Card.Button onClick={() => remove(dragId)}>
                <Card.Icon icon={["fas", "times"]} />
              </Card.Button>
            )}
          </Card.Group>
        </Card.Container>
      )}
    </Draggable>
  );
};
