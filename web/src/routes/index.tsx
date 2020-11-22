import React from "react";
import { Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import WalletOperation from "../pages/WalletOperation";

import Route from "./Route";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login}></Route>
    <Route path="/dashboard" isPrivate={true} component={Dashboard}></Route>
    <Route
      path="/wallet-operation"
      isPrivate={true}
      component={WalletOperation}
    ></Route>
  </Switch>
);

export default Routes;
