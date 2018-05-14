// IMPORT DEPENDENCIES
import React, { Component } from "react";
import { connect } from "react-redux";
// IMPORT REDUX FUNCTIONS
import { toggleMenu } from "../../reducers/menuReducer";
// IMPORT STYLING
import "./Header.css";
// IMPORT ICONS
import menuIcon from "../../assets/icons/menu-white-24px.svg";

// CLASS COMPONENT
class Header extends Component {
  render() {
    return (
      <div id="header-container">
        <img
          onClick={() => this.props.toggleMenu()}
          src={menuIcon}
          alt="menu"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

// EXPORT COMPONENT
export default connect(mapStateToProps, { toggleMenu })(Header);
