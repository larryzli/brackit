// IMPORT DEPENDENCIES
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// IMPORT COMPONENTS
import SideNav from "./components/SideNav/SideNav";
// IMPORT ROUTES
import routes from "./routes";
// IMPORT STYLING
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.location.pathname !== "/" ? <SideNav /> : null}
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
