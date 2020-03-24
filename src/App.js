import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "./store";

import Header from "./components/Header";

import IngredientList from "./components/IngredientList";
import IngredientForm from "./components/IngredientForm";
import IngredientPage from "./components/IngredientPage";

import MealList from "./components/MealList";
import MealForm from "./components/MealForm";
import MealPage from "./components/MealPage";

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
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
        <Route path="/meals" exact>
          <MealList />
        </Route>
        <Route path="/meals/form" exact>
          <MealForm />
        </Route>
        <Route path="/meals/form/:id">
          <MealForm />
        </Route>
        <Route path="/meals/:id">
          <MealPage />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
