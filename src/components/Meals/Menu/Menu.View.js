import React from "react";

import * as Menu from "./Menu.Styles";

export default ({ decOffset, incOffset, now }) => (
  <Menu.Container>
    <Menu.Button onClick={decOffset}>
      <Menu.Icon icon={["fas", "chevron-left"]} />
    </Menu.Button>
    <Menu.Now>{now}</Menu.Now>
    <Menu.Button onClick={incOffset}>
      <Menu.Icon icon={["fas", "chevron-right"]} />
    </Menu.Button>
  </Menu.Container>
);
