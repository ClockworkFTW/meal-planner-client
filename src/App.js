import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import IngredientList from "./components/IngredientList";
import IngredientPage from "./components/IngredientPage";
import IngredientForm from "./components/IngredientForm";

const App = () => (
  <Router>
    <Switch>
      <Route path="/ingredients" exact>
        <IngredientList />
      </Route>
      <Route path="/ingredients/form" exact>
        <IngredientForm />
      </Route>
      <Route path="/ingredients/form/:id">
        <IngredientForm />
      </Route>
      <Route path="/ingredients/:id">
        <IngredientPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
