import React from "react";
import moment from "moment";

import * as Meta from "./Meta.Styles";

export default ({ name, time }) => (
  <Meta.Container>
    <Meta.Time>{moment(time).format("HH:mm")}</Meta.Time>
    <Meta.Name>{name}</Meta.Name>
  </Meta.Container>
);
