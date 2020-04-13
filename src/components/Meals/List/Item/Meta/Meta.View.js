import React from "react";

import { Time } from "../../../../Time";

import * as Meta from "./Meta.Styles";

export default ({ id, edit, setEdit, name, setName, time }) => (
  <Meta.Container>
    <Time id={id} time={time} />
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
