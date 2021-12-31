import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import Home from "./pages/Home";
import ShowCampaign from "./pages/ShowCampaign";

import history from "./history";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/campaign/:address" exact component={ShowCampaign} />
      </Switch>
    </Router>
  );
};

export default App;
