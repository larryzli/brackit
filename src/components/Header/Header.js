// IMPORT DEPENDENCIES
import React, { Component } from "react";
import { connect } from "react-redux";
// IMPORT REDUX FUNCTIONS
import { toggleMenu } from "../../reducers/menuReducer";
// IMPORT STYLING
import "./Header.css";

// CLASS COMPONENT
class Header extends Component {
  render() {
    return (
      <div id="header-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FAFAFA"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="menu-icon"
          onClick={this.props.toggleMenu}
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

// EXPORT COMPONENT
export default connect(mapStateToProps, { toggleMenu })(Header);
