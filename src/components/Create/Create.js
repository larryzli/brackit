// IMPORT DEPENDENCIES
import React, { Component } from "react";
// IMPORT COMPONENTS
import Header from "../Header/Header";
// IMPORT STYLING
import "./Create.css";

// CLASS COMPONENT
class Create extends Component {
  constructor(props) {
    super(props);

    // COMPONENT STATE
    this.state = {
      name: ""
    };
  }
  handleChange(prop, val) {
    this.setState({ [prop]: val });
  }
  render() {
    return (
      <div className="content-wrapper">
        <Header
          breadcrumbs={[
            { link: "/manage", title: "Manage" },
            { link: "/manage/create", title: "Create Bracket" }
          ]}
        />
        <div className="content">
          <div className="title-wrapper">
            <h2>Bracket Details</h2>
            <div className="title-actions">
              <button
                className="icon-btn positive"
                // onClick={() => this.handleSave()}
              >
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
                  <title>Save and Create</title>
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="create-inputs">
            <div className="input-group">
              <p>Bracket Name</p>
              <input
                placeholder="Enter a name to call your bracket"
                value={this.state.name}
                type="text"
                onChange={e => this.handleChange("name", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// EXPORT COMPONENT
export default Create;
