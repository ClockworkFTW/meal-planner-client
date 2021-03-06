import React from "react";

import * as Search from "./Search.Styles";

export default props => {
  const { term, search, setSearch } = props;
  const { submitSearch, clearSearch, inputRef } = props;
  return (
    <Search.Container>
      <Search.Button type="button" onClick={term ? clearSearch : submitSearch}>
        <Search.Icon icon={["fas", term ? "times" : "search"]} />
      </Search.Button>
      <Search.Input
        type="text"
        placeholder="Search ingredients..."
        value={search}
        onChange={event => setSearch(event.target.value)}
        onKeyPress={event => (event.key === "Enter" ? submitSearch() : null)}
        ref={inputRef}
      />
    </Search.Container>
  );
};
