import React from "react";

const sortableProps = ["name", "calories", "carbs", "protein", "fat"];

const IngredientListHeader = ({ ingredientSort, setIngredientSort }) => {
  const { activeProp, ascending } = ingredientSort;

  return (
    <thead>
      <tr>
        {sortableProps.map(prop => (
          <th
            active={prop === activeProp}
            onClick={() => setIngredientSort(prop, !ascending)}
          >
            {prop}
          </th>
        ))}
        <th>serving</th>
        <th>unit</th>
        <th>edit</th>
      </tr>
    </thead>
  );
};

export default IngredientListHeader;
