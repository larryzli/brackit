// IMPORT DEPENDENCIES
import React, { Component } from "react";
// IMPORT COMPONENTS
import Header from "../Header/Header";
// IMPORT STYLING
import "./Settings.css";

// CLASS COMPONENT
class Settings extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <Header />
        <div className="content">SETTINGS</div>
      </div>
    );
  }
}

// EXPORT COMPONENT
export default Settings;
