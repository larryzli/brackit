// IMPORT DEPENDENCIES
import React, { Component } from "react";
// IMPORT COMPONENTS
import Header from "../Header/Header";
// IMPORT STYLING
import "./Donate.css";

// CLASS COMPONENT
class Donate extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <Header />
        <div className="content">DONATE</div>
      </div>
    );
  }
}

// EXPORT COMPONENT
export default Donate;
