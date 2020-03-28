import React from "react";

import * as Button from "./Button.Styles";

export default ({ showMenu, toggleMenu }) => (
  <Button.Container onClick={toggleMenu}>
    <Button.Icon icon={["fas", showMenu ? "times" : "sliders-h"]} />
  </Button.Container>
);
