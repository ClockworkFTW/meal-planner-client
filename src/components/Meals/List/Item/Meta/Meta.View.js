import React from "react";
import moment from "moment";

import * as Meta from "./Meta.Styles";

export default ({ edit, setEdit, name, setName, time }) => (
  <Meta.Container>
    <Meta.Time>{moment(time).format("H:mm")}</Meta.Time>
    {edit ? (
      <Meta.NameInput
        type="text"
        placeholder="Name"
        value={name}
        onChange={setName}
      />
    ) : (
      <Meta.NameDisplay onClick={() => setEdit(true)}>{name}</Meta.NameDisplay>
    )}
  </Meta.Container>
);
