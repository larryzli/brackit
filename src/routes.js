// ROUTE DEPENDENCIES
import React from "react";
import { Switch, Route } from "react-router-dom";
// IMPORT COMPONENTS
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Discover from "./components/Discover/Discover";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import ManageBracket from "./components/ManageBracket/ManageBracket";
import Manage from "./components/Manage/Manage";
import About from "./components/About/About";
import Donate from "./components/Donate/Donate";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings.js";

// EXPORT ROUTES
export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/discover" component={Discover} />
    <Route path="/manage/create" component={Create} />
    <Route path="/manage/:id/edit" component={Edit} />
    <Route path="/manage/:id" component={ManageBracket} />
    <Route path="/manage" component={Manage} />
    <Route path="/about" component={About} />
    <Route path="/donate" component={Donate} />
    <Route path="/profile/:id" component={Profile} />
    <Route path="/settings" component={Settings} />
  </Switch>
);
