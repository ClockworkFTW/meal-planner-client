import React from "react";

import * as Options from "./Options.Style";
import { Category } from "../../../Meals/List/Item/Ingredients/Card/Category";

const sortOptions = ["name", "calories", "carbs", "protein", "fat"];
const filterOptions = [
  "all",
  "vegetable",
  "fruit",
  "grain",
  "meat",
  "seafood",
  "dairy",
  "oil",
  "alcohol"
];

export default ({ menuHeight, mods, setMod }) => {
  const { filter, sort, ascending } = mods;
  return (
    <Options.Container menuHeight={menuHeight}>
      <Options.Group>
        {sortOptions.map(option => (
          <Options.SortButton
            key={option}
            active={option === sort}
            onClick={() => setMod("sort", option)}
          >
            {option}
          </Options.SortButton>
        ))}
        <button onClick={() => setMod("ascending", !ascending)}>
          {ascending ? "down" : "up"}
        </button>
      </Options.Group>
      <Options.Group>
        {filterOptions.map(option => (
          <Options.FilterButton
            key={option}
            active={option === filter}
            onClick={() => setMod("filter", option)}
          >
            <Category category={option} />
          </Options.FilterButton>
        ))}
      </Options.Group>
    </Options.Container>
  );
};
