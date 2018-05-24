// IMPORT DEPENDENCIES
import React, { Component } from "react";
// IMPORT COMPONENTS
import Header from "../Header/Header";
// IMPORT STYLING
import "./Dashboard.css";

// CLASS COMPONENT
class Dashboard extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <Header />
        <div className="content">DASHBOARD</div>
      </div>
    );
  }
}

// EXPORT COMPONENT
export default Dashboard;
