// ROUTE DEPENDENCIES
import React from "react";
import { Switch, Route } from "react-router-dom";
// IMPORT COMPONENTS
import Discover from "./components/Discover/Discover";
import Dashboard from "./components/Dashboard/Dashboard";
import Manage from "./components/Manage/Manage";
import Donate from "./components/Donate/Donate";
import Profile from "./components/Profile/Profile";

// EXPORT ROUTES
export default (
  <Switch>
    <Route exact path="/" component={Discover} />
    <Route path="/discover" component={Discover} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/manage" component={Manage} />
    <Route path="/donate" component={Donate} />
    <Route path="/profile" component={Profile} />
  </Switch>
);
