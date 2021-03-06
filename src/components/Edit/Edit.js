// IMPORT DEPENDENCIES
import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";
// IMPORT COMPONENTS
import Header from "../Header/Header";
import BracketCard from "../BracketCard/BracketCard";
import BracketFields from "../BracketFields/BracketFields";
// IMPORT ASSETS
import loadingIcon from "../../assets/loading/loading-spin.svg";
// IMPORT STYLING
import "react-day-picker/lib/style.css";
import "./Edit.css";

// CLASS COMPONENT
class Edit extends Component {
  constructor(props) {
    super(props);

    // COMPONENT STATE
    this.state = {
      name: "",
      start: moment(),
      subject: "",
      description: "",
      headerImage: "",
      saving: false,
      error: false,
      loading: true,
      errorMsg: ""
      // private: false,
      // format: "Single Elimination"
    };

    this.handleChange = this.handleChange.bind(this);
    this.setTime = this.setTime.bind(this);
  }
  componentDidMount() {
    axios
      .get(`/api/bracket/manage/${this.props.match.params.id}`)
      .then(response => {
        console.log("bracketData: ", response.data);
        this.setState({
          name: response.data.bracket_name,
          start: moment(response.data.start),
          subject: response.data.subject,
          description: response.data.description,
          headerImage: response.data.image_url,
          loading: false
        });
      })
      .catch(error => {
        this.setState({ errorMsg: error.response.data, loading: false });
      });
  }

  handleChange(prop, val) {
    this.setState({ [prop]: val });
  }
  setTime(val) {
    const time = val.split(":");
    const tempDate = this.state.start;
    tempDate.set({
      hours: time[0],
      minutes: time[1]
    });
    this.setState({
      start: tempDate
    });
  }
  cancelEdit() {
    this.props.history.push("/manage");
  }
  saveBracket() {
    if (!this.props.user.user_id) {
      alert("Please create an account or log in to create a bracket.");
    } else if (!this.state.name || !this.state.subject || !this.state.start) {
      this.setState({ error: true });
      alert("Please fill out all required(*) fields.");
    } else {
      this.setState({ saving: true });
      axios
        .put(`/api/bracket/manage/${this.props.match.params.id}`, {
          name: this.state.name,
          start: this.state.start,
          subject: this.state.subject,
          description: this.state.description,
          headerImage: this.state.headerImage
        })
        .then(response => {
          console.log(response.data);
          this.props.history.push(`/manage/${response.data.bracket_id}`);
        })
        .catch(console.log);
    }
  }
  render() {
    return (
      <div className="content-wrapper">
        <Header
          breadcrumbs={[
            { link: "/manage", title: "Manage" },
            {
              link: `/manage/${this.props.match.params.id}`,
              title: `${
                this.state.errorMsg
                  ? "Error"
                  : this.state.loading
                    ? "Loading..."
                    : this.state.name
              }`
            },
            {
              link: `/manage/${this.props.match.params.id}/edit`,
              title: "Edit Bracket"
            }
          ]}
        />
        <div className="content">
          <div className="title-wrapper">
            <h2>Edit Bracket</h2>
            <div className="title-actions">
              <button
                className="icon-btn positive"
                onClick={() => this.saveBracket()}
              >
                {!this.state.loading &&
                  !this.state.errorMsg && (
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
                      <title>Save Changes</title>
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                      <polyline points="17 21 17 13 7 13 7 21" />
                      <polyline points="7 3 7 8 15 8" />
                    </svg>
                  )}
              </button>
            </div>
          </div>
          {this.state.loading ? (
            <div className="loading-container">
              <img src={loadingIcon} alt="Loading..." />
            </div>
          ) : this.state.errorMsg ? (
            <div className="error-text">{this.state.errorMsg}</div>
          ) : (
            <div>
              <BracketFields
                name={this.state.name}
                error={this.state.error}
                handleChange={this.handleChange}
                subject={this.state.subject}
                start={this.state.start}
                setTime={this.setTime}
                description={this.state.description}
                headerImage={this.state.headerImage}
              />
              <div className="title-wrapper">
                <h2>Card Preview</h2>
              </div>
              <div className="card-preview">
                <BracketCard
                  style={{ maxWidth: "450px" }}
                  name={this.state.name}
                  start={this.state.start}
                  subject={this.state.subject}
                  description={this.state.description}
                  image={this.state.headerImage}
                  author={this.props.user.alias}
                  status="Draft"
                />
              </div>
              <div className="btn-group">
                <button className="btn small" onClick={() => this.cancelEdit()}>
                  Cancel
                </button>
                <button
                  className="btn positive small"
                  onClick={() => this.saveBracket()}
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.user
  };
};

// EXPORT COMPONENT
export default connect(mapStateToProps)(Edit);
