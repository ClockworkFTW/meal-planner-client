import React from "react";

import * as Quantity from "./Quantity.Styles";

export const QuantityEditor = props => {
  const { quantity, setQuantity, saveQuantity, toggle, color } = props;
  return (
    <Quantity.Container>
      <button onClick={saveQuantity}>save</button>
      <input
        type="number"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
        color={color}
      />
      <button onClick={() => toggle(false)}>close</button>
    </Quantity.Container>
  );
};

export const QuantityDisplay = ({ quantity, toggle, color }) => (
  <Quantity.Display onClick={() => toggle(false)} color={color}>
    {quantity}
  </Quantity.Display>
);
