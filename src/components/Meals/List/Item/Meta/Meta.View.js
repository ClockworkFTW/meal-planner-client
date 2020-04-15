import React from "react";

import { Name } from "./Name";
import { Time } from "./Time";

import * as Meta from "./Meta.Styles";

export default ({ id, name, time }) => (
  <Meta.Container>
    <Time id={id} time={time} />
    <Name id={id} name={name} />
  </Meta.Container>
);
