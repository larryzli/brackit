// IMPORT DEPENDENCIES
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// IMPORT COMPONENTS
import SideNav from "./components/SideNav/SideNav";
// IMPORT ROUTES
import routes from "./routes";
// IMPORT STYLING
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SideNav />
          <div className="content">{routes}</div>
        </div>
      </Router>
    );
  }
}

export default App;
