import React from "react";
import moment from "moment";

import Menu from "./Menu.View";

export default ({ offset, setOffset }) => {
  const decOffset = () => setOffset(offset - 1);
  const incOffset = () => setOffset(offset + 1);

  const now = moment()
    .add(offset, "day")
    .format("dddd - MMM DD, YYYY");

  return <Menu decOffset={decOffset} incOffset={incOffset} now={now} />;
};
