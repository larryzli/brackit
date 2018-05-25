// IMPORT DEPENDENCIES
import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
// IMPORT STYLING
import "./SideNav.css";
// IMPORT ASSETS
import defaultPic from "../../assets/img/deafult_user.svg";
// import invalidPic from "../../assets/img/invalid_img.svg";
// REDUX FUNCTIONS
import { closeMenu } from "../../reducers/menuReducer";
import { getUser, logout } from "../../reducers/userReducer";

// CLASS COMPONENT
class SideNav extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  login() {
    window.location = process.env.REACT_APP_LOGIN || "/auth";
    this.props.closeMenu();
  }
  logout() {
    this.props.logout();
    this.props.closeMenu();
  }

  render() {
    return (
      <div
        id="nav-wrapper"
        className={this.props.menuToggle ? "open" : "close"}
        onClick={() => this.props.closeMenu()}
      >
        <div id="nav-container" onClick={e => e.stopPropagation()}>
          <div id="nav-user-info">
            <img
              className="profile-image"
              src={this.props.user.profile_image_url || defaultPic}
              alt="user"
              onError={e => {
                e.target.src = defaultPic;
              }}
            />
            <p id="user-name">{this.props.user.alias || "Guest"}</p>
            {this.props.user.user_id ? (
              <div id="user-links">
                <NavLink
                  to={`/profile/${this.props.user.user_id}`}
                  className="icon-nav-link"
                  activeClassName="icon-nav-link-active"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="user-icon"
                    onClick={() => this.props.closeMenu()}
                  >
                    <title>Profile</title>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </NavLink>
                <NavLink
                  to="/settings"
                  className="icon-nav-link"
                  activeClassName="icon-nav-link-active"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="user-icon"
                    onClick={() => this.props.closeMenu()}
                  >
                    <title>Settings</title>
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </NavLink>
                <Link className="icon-nav-link" to="/discover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="user-icon"
                    id="logout"
                    onClick={() => this.logout()}
                  >
                    <title>Logout</title>
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                </Link>
              </div>
            ) : (
              <div id="user-links">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="user-icon icon-nav-link"
                  id="login"
                  onClick={() => this.login()}
                >
                  <title>Login</title>
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
              </div>
            )}
          </div>
          <nav id="nav-links">
            <NavLink
              className="nav-link"
              activeClassName="active-nav-link"
              to="/discover"
              onClick={() => this.props.closeMenu()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="nav-icon"
              >
                <title>Search Brackets</title>
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              Discover
            </NavLink>
            {this.props.user.user_id ? (
              <NavLink
                className="nav-link"
                activeClassName="active-nav-link"
                to="/dashboard"
                onClick={() => this.props.closeMenu()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="nav-icon"
                >
                  <title>User Dashboard</title>
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Dashboard
              </NavLink>
            ) : null}
            {this.props.user.user_id ? (
              <NavLink
                className="nav-link"
                activeClassName="active-nav-link"
                to="/manage"
                onClick={() => this.props.closeMenu()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="nav-icon"
                >
                  <title>Manage Brackets</title>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                </svg>
                Manage
              </NavLink>
            ) : null}
            <NavLink
              className="nav-link"
              activeClassName="active-nav-link"
              to="/about"
              onClick={() => this.props.closeMenu()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="nav-icon"
              >
                <title>About Brackit</title>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              About
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active-nav-link"
              to="/donate"
              onClick={() => this.props.closeMenu()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="nav-icon"
              >
                <title>Donate</title>
                <polyline points="20 12 20 22 4 22 4 12" />
                <rect x="2" y="7" width="20" height="5" />
                <line x1="12" y1="22" x2="12" y2="7" />
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
              </svg>
              Support Me
            </NavLink>
          </nav>
        </div>
      </div>
    );
  }
}

// SUBSCRIBE TO REDUX
const mapStateToProps = state => {
  return {
    ...state.menu,
    ...state.user
  };
};

// EXPORT COMPONENT
export default withRouter(
  connect(mapStateToProps, { closeMenu, getUser, logout })(SideNav)
);
