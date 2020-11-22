import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import WalletOperation from "../pages/WalletOperation";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login}></Route>
    <Route path="/dashboard" exact component={Dashboard}></Route>
    <Route path="/wallet-operation" exact component={WalletOperation}></Route>
  </Switch>
);

export default Routes;
