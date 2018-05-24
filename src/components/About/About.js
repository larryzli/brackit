// IMPORT DEPENDENCIES
import React, { Component } from "react";
// IMPORT COMPONENTS
import Header from "../Header/Header";
// IMPORT STYLING
import "./About.css";

// CLASS COMPONENT
class About extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <Header />
        <div className="content">ABOUT</div>
      </div>
    );
  }
}

// EXPORT COMPONENT
export default About;
