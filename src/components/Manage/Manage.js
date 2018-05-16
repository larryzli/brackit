// IMPORT DEPENDENCIES
import React, { Component } from "react";
// IMPORT COMPONENTS
import Header from "../Header/Header";
// IMPORT STYLING
import "./Manage.css";

// CLASS COMPONENT
class Manage extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <Header breadcrumbs={[{ link: "/manage", title: "Manage" }]} />
        <div className="content">
          <div className="title-wrapper">
            <h2>Created Brackets</h2>
            <div className="title-actions">
              <button>Create</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// EXPORT COMPONENT
export default Manage;
