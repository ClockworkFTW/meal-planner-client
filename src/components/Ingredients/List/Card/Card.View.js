import React from "react";

import * as Card from "./Card.Styles";

export default ({ ingredient }) => (
  <Card.Container>
    <h2>{ingredient.name}</h2>
  </Card.Container>
);
