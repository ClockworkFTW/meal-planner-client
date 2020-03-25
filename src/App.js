import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "./store";

import Home from "./routes/Home";

import { GlobalStyle } from "./App.Styles";

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
