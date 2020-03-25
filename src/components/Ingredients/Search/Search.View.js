import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

import * as Search from "./Search.Styles";

export default ({ term, search, setSearch, submitSearch, clearSearch }) => (
  <Search.Container>
    <Search.Button type="button" onClick={term ? clearSearch : submitSearch}>
      <Icon icon={["far", term ? "times" : "search"]} />
    </Search.Button>
    <Search.Input
      type="text"
      placeholder="Search"
      value={search}
      onChange={event => setSearch(event.target.value)}
      onKeyPress={event => (event.key === "Enter" ? submitSearch() : null)}
    />
  </Search.Container>
);
