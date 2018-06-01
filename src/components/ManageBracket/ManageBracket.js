// IMPORT DEPENDENCIES
import React, { Component } from "react";
import axios from "axios";
// IMPORT COMPONENTS
import Header from "../Header/Header";
import BracketTabs from "../BracketTabs/BracketTabs";
// IMPORT ASSETS
import loadingIcon from "../../assets/loading/loading-spin.svg";
// IMPORT STYLING
import "./ManageBracket.css";

// CLASS COMPONENT
class ManageBracket extends Component {
  constructor(props) {
    super(props);

    // COMPONENT STATE
    this.state = {
      loading: true,
      bracketInfo: {},
      errorMsg: ""
    };
  }

  componentDidMount() {
    axios
      .get(`/api/bracket/${this.props.match.params.id}`)
      .then(response => {
        console.log("bracketData: ", response.data);
        this.setState({ bracketInfo: response.data, loading: false });
      })
      .catch(error => {
        this.setState({ errorMsg: error.response.data, loading: false });
      });
  }
  render() {
    return (
      <div className="content-wrapper">
        <Header
          breadcrumbs={[
            { link: "/manage", title: "Manage" },
            {
              link: `/manage/${this.props.match.params.id}`,
              title: this.state.loading
                ? "Loading..."
                : this.state.bracketInfo.bracket_name || "Error"
            }
          ]}
        />
        <div className="content">
          {this.state.bracketInfo.bracket_name ? (
            <div className="title-wrapper">
              <h2>
                <span>{this.state.bracketInfo.bracket_name}</span>
                <span
                  className={`bracket-card-status ${this.state.bracketInfo.status.toLowerCase()}`}
                >
                  {this.state.bracketInfo.status}
                </span>
              </h2>
              <div className="title-actions">
                <button
                  className="icon-btn positive"
                  // onClick={() => this.createBracket()}
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
                    <title>Publish Bracket</title>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </button>
                <button
                  className="icon-btn"
                  // onClick={() => this.toggleEdit()}
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
                    <title>Edit Bracket</title>
                    <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
                    <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="title-wrapper">
              <h2>Bracket Error</h2>
            </div>
          )}
          {this.state.loading ? (
            <div className="loading-container">
              <img src={loadingIcon} alt="Loading..." />
            </div>
          ) : this.state.errorMsg ? (
            <div className="error-text">{this.state.errorMsg}</div>
          ) : (
            <div className="manage-bracket-info">
              <BracketTabs bracketInfo={this.state.bracketInfo} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

// EXPORT COMPONENT
export default ManageBracket;
