// IMPORT DEPENDENCIES
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import moment from "moment";
// IMPORT COMPONENTS
import Header from "../Header/Header";
import BracketCard from "../BracketCard/BracketCard";
// IMPORT ASSETS
import loadingIcon from "../../assets/loading/loading-spin.svg";
// IMPORT STYLING
import "./Manage.css";

// CLASS COMPONENT
class Manage extends Component {
  constructor(props) {
    super(props);

    // COMPONENT STATE
    this.state = {
      brackets: [],
      errorMsg: "No Brackets Here",
      loading: true
    };

    // BIND METHODS
    this.manageRoute = this.manageRoute.bind(this);
  }

  // ROUTE USER TO BRACKET MANAGE PAGE
  manageRoute(bracketID) {
    this.props.history.push(`/manage/${bracketID}`);
  }

  componentDidMount() {
    // GET LOGGED IN USER'S BRACKETS
    axios
      .get(`/api/bracket/creator/`)
      .then(response => {
        this.setState({ brackets: response.data, loading: false });
      })
      .catch(error => {
        // IF NO LOGGED IN USER THEN CHANGE ERROR TO LOGIN ERROR
        this.setState({ errorMsg: error.response.data, loading: false });
      });
  }

  render() {
    // MAP THROUGH BRACKETS AND SHOW CARDS
    const brackets = this.state.brackets.length ? (
      this.state.brackets.map((bracket, index) => {
        return (
          <BracketCard
            key={index}
            id={bracket.bracket_id}
            name={bracket.bracket_name}
            start={moment(bracket.start)}
            subject={bracket.subject}
            description={bracket.description}
            image={bracket.image_url}
            author={bracket.alias}
            status="Draft"
            manage={true}
            mng={this.manageRoute}
          />
        );
      })
    ) : (
      // IF NO BRACKETS THEN SHOW ERROR
      <div className="error-text">{this.state.errorMsg}</div>
    );
    return (
      <div className="content-wrapper">
        <Header breadcrumbs={[{ link: "/manage", title: "Manage" }]} />
        <div className="content">
          <div className="title-wrapper">
            <h2>Manage Brackets</h2>
            <div className="title-actions">
              {this.props.user.user_id && (
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
              )}
            </div>
          </div>
          {this.state.loading ? (
            <div className="loading-container">
              <img src={loadingIcon} alt="Loading..." />
            </div>
          ) : (
            <div className="brackets-grid">{brackets}</div>
          )}
        </div>
      </div>
    );
  }
}

// SUBSCRIBE TO REDUX
const mapStateToProps = state => {
  return {
    ...state.user
  };
};

// EXPORT COMPONENT
export default connect(mapStateToProps)(Manage);
