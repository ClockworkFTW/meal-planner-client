import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/pro-regular-svg-icons";
import "reset-css";

import store from "./store";

import Home from "./routes/Home";

library.add(far);

const App = () => (
  <Provider store={store}>
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
