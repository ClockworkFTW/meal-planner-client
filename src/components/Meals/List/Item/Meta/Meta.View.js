import React from "react";
import moment from "moment";

import * as Meta from "./Meta.Styles";

export default ({ name, setName, time }) => (
  <Meta.Container>
    <Meta.Time>{moment(time).format("H:mm")}</Meta.Time>
    <Meta.Name type="text" placeholder="Name" value={name} onChange={setName} />
  </Meta.Container>
);
