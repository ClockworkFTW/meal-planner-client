import React from "react";

import * as Quantity from "./Quantity.Styles";

export const QuantityEditor = props => {
  const { inputField, toggle, color } = props;
  const { quantity, setQuantity, saveQuantity } = props;
  return (
    <Quantity.Container>
      <Quantity.Button onClick={saveQuantity}>
        <Quantity.Icon icon={["fas", "check"]} />
      </Quantity.Button>
      <Quantity.Input
        ref={inputField}
        type="number"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
        color={color}
      />
      <Quantity.Button onClick={() => toggle(false)}>
        <Quantity.Icon icon={["fas", "times"]} />
      </Quantity.Button>
    </Quantity.Container>
  );
};

export const QuantityDisplay = ({ quantity, toggle, color }) => (
  <Quantity.Display onClick={() => toggle(false)} color={color}>
    {quantity}
  </Quantity.Display>
);
