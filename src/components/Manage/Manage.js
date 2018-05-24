// IMPORT DEPENDENCIES
import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            <h2>Manage Brackets</h2>
            <div className="title-actions">
              <Link to="/manage/create">
                <button className="icon-btn positive">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>Create Bracket</title>
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// EXPORT COMPONENT
export default Manage;
