// IMPORT DEPENDENCIES
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
// IMPORT STYLING
import "./SideNav.css";
// REDUX FUNCTIONS
import { closeMenu } from "../../reducers/menuReducer";
import { getUser } from "../../reducers/userReducer";

// CLASS COMPONENT
class SideNav extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  login() {
    this.props.closeMenu();
    window.location = process.env.REACT_APP_LOGIN || "/auth";
  }
  render() {
    return (
      <div
        id="nav-wrapper"
        className={this.props.menuToggle ? "open" : "close"}
        onClick={() => this.props.closeMenu()}
      >
        <div id="nav-container" onClick={e => e.stopPropagation()}>
          <Link to="/" onClick={() => this.props.closeMenu()}>
            <div id="main-logo">[ BRACK IT ]</div>
          </Link>
          <div id="nav-links">
            <nav>
              <NavLink
                className="nav-link"
                activeClassName="active-nav-link"
                to="/discover"
                onClick={() => this.props.closeMenu()}
              >
                Discover
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="active-nav-link"
                to="/dashboard"
                onClick={() => this.props.closeMenu()}
              >
                Dashboard
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="active-nav-link"
                to="/manage"
                onClick={() => this.props.closeMenu()}
              >
                Manage
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="active-nav-link"
                to="/donate"
                onClick={() => this.props.closeMenu()}
              >
                Donate
              </NavLink>
            </nav>
            {this.props.user.alias ? (
              <nav>
                <div id="user-name">{this.props.user.alias}</div>
                <div className="user-links">
                  <button onClick={() => this.login()}>Logout</button>
                </div>
              </nav>
            ) : (
              <nav>
                <div id="user-name">Guest</div>
                <div className="user-links">
                  <button onClick={() => this.login()}>Login</button>
                </div>
              </nav>
            )}
          </div>
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
export default connect(mapStateToProps, { closeMenu, getUser })(SideNav);
