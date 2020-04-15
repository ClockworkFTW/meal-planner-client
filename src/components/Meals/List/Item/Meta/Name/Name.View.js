import React from "react";

import * as Name from "./Name.Styles";

export const NameEditor = ({ field, name, setName, saveName, toggle }) => (
  <Name.Container>
    <Name.Input
      ref={field}
      type="text"
      placeholder="name"
      value={name}
      onChange={e => setName(e.target.value)}
    />
    <Name.Buttons>
      <Name.Button onClick={saveName}>
        <Name.Icon icon={["fas", "check"]} />
      </Name.Button>
      <Name.Button onClick={toggle}>
        <Name.Icon icon={["fas", "times"]} />
      </Name.Button>
    </Name.Buttons>
  </Name.Container>
);

export const NameDisplay = ({ name, toggle }) => (
  <Name.Display onClick={toggle}>{name}</Name.Display>
);
