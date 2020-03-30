import React, { useCallback } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { Meals } from "../../components/Meals";
import { Ingredients } from "../../components/Ingredients";

import * as Home from "./Home.Styles";

export default () => {
  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Home.Container>
        <Meals />
        <Ingredients />
      </Home.Container>
    </DragDropContext>
  );
};
