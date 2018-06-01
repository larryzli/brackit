// IMPORT DEPENDENCIES
import React, { Component } from "react";
import moment from "moment";
// IMPORT STYLING
import "./BracketTabs.css";

// CLASS COMPONENT
class BracketTabs extends Component {
  constructor(props) {
    super(props);

    // COMPONENT STATE
    this.state = {
      currentTab: 0
    };
  }

  setTab(val) {
    this.setState({ currentTab: val });
  }
  render() {
    return (
      <div className="bracket-tabs-container">
        <div className="bracket-tabs-control">
          <div
            className={`bracket-tab ${this.state.currentTab === 0 &&
              "selected"}`}
            onClick={() => this.setTab(0)}
          >
            Overview
          </div>
          <div
            className={`bracket-tab ${this.state.currentTab === 1 &&
              "selected"} ${this.props.bracketInfo.status === "Draft" &&
              "disabled"}`}
            onClick={() =>
              this.props.bracketInfo.status === "Draft" ? null : this.setTab(1)
            }
          >
            Players
          </div>
          <div
            className={`bracket-tab ${this.state.currentTab === 2 &&
              "selected"} ${this.props.bracketInfo.status === "Draft" &&
              "disabled"}`}
            onClick={() =>
              this.props.bracketInfo.status === "Draft" ? null : this.setTab(2)
            }
          >
            Bracket
          </div>
          <div
            className={`bracket-tab ${this.state.currentTab === 3 &&
              "selected"} ${this.props.bracketInfo.status === "Draft" &&
              "disabled"}`}
            onClick={() =>
              this.props.bracketInfo.status === "Draft" ? null : this.setTab(3)
            }
          >
            Matches
          </div>
        </div>
        <div className="bracket-tabs-content-container">
          {this.state.currentTab === 0 && (
            <div className="bracket-overview tab-content">
              {this.props.bracketInfo.image_url && (
                <img
                  src={this.props.bracketInfo.image_url}
                  alt="bracket cover"
                  onError={e => {
                    console.log(e.target);
                    e.target.className = "broken";
                  }}
                />
              )}
              <div className="input-group">
                <p>Subject</p>
                <p>{this.props.bracketInfo.subject}</p>
              </div>
              <div className="input-group">
                <p>Start Date & Time</p>
                <p>
                  {moment(this.props.bracketInfo.start).format(
                    "dddd, MMMM Do, YYYY"
                  )}
                  {" at "}
                  {moment(this.props.bracketInfo.start).format("h:mmA")}
                  <span className="bracket-tz">
                    UTC
                    {moment(this.props.bracketInfo.start).format("Z")}
                  </span>
                </p>
              </div>
              <div className="input-group">
                <p>Format</p>
                <p>{this.props.bracketInfo.format}</p>
              </div>
              <div className="input-group">
                <p>Host</p>
                <p>{this.props.bracketInfo.alias}</p>
              </div>
              <div className="input-group">
                <p>Description</p>
                <p className="formatted-text">
                  {this.props.bracketInfo.description}
                </p>
              </div>
            </div>
          )}
          {this.state.currentTab === 1 && (
            <div className="bracket-players tab-content">Players Here</div>
          )}
          {this.state.currentTab === 2 && (
            <div className="bracket-bracket tab-content">Bracket Here</div>
          )}
          {this.state.currentTab === 3 && (
            <div className="bracket-matches tab-content">Matches Here</div>
          )}
        </div>
      </div>
    );
  }
}

// EXPORT COMPONENT
export default BracketTabs;
