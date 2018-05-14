// IMPORT DEPENDENCIES
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
// IMPORT STYLING
import "./SideNav.css";
// REDUX FUNCTIONS
import { toggleMenu } from "../../reducers/menuReducer";

// CLASS COMPONENT
class SideNav extends Component {
  render() {
    return (
      <div
        id="nav-wrapper"
        className={this.props.menuToggle ? "open" : "close"}
        onClick={() => this.props.toggleMenu()}
      >
        <div id="nav-container" onClick={e => e.stopPropagation()}>
          <Link
            to="/"
            onClick={() =>
              this.props.menuToggle ? this.props.toggleMenu() : null
            }
          >
            <div id="main-logo">[ BRACK IT ]</div>
          </Link>
          <div id="nav-links">
            <nav>
              <NavLink
                className="nav-link"
                to="/discover"
                onClick={() =>
                  this.props.menuToggle ? this.props.toggleMenu() : null
                }
              >
                Discover
              </NavLink>
              <NavLink
                className="nav-link"
                to="/dashboard"
                onClick={() =>
                  this.props.menuToggle ? this.props.toggleMenu() : null
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                className="nav-link"
                to="/manage"
                onClick={() =>
                  this.props.menuToggle ? this.props.toggleMenu() : null
                }
              >
                Manage
              </NavLink>
              <NavLink
                className="nav-link"
                to="/donate"
                onClick={() =>
                  this.props.menuToggle ? this.props.toggleMenu() : null
                }
              >
                Donate
              </NavLink>
            </nav>
            <nav>
              <NavLink
                className="nav-link"
                to="/profile"
                onClick={() =>
                  this.props.menuToggle ? this.props.toggleMenu() : null
                }
              >
                Profile
              </NavLink>
              <button
                onClick={() =>
                  this.props.menuToggle ? this.props.toggleMenu() : null
                }
              >
                Login
              </button>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

// SUBSCRIBE TO REDUX
const mapStateToProps = state => {
  return {
    ...state.menu
  };
};

// EXPORT COMPONENT
export default connect(mapStateToProps, { toggleMenu })(SideNav);
