// IMPORT DEPENDENCIES
import React, { Component } from "react";
// IMPORT COMPONENTS
import Header from "../Header/Header";
// IMPORT STYLING
import "./ManageBracket.css";

// CLASS COMPONENT
class ManageBracket extends Component {
  constructor(props) {
    super(props);

    // COMPONENT STATE
    this.state = {
      loading: true,
      notCreator: false,
      bracketInfo: {}
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
  }
  render() {
    return (
      <div className="content-wrapper">
        <Header breadcrumbs={[{ link: "/manage", title: "Manage" }, { link: `/manage/${this.props.match.params.id}`, title: "Bracket Name" }]} />
        <div className="content">
          <div className="title-wrapper">
            <h2>Manage Bracket</h2>
            <div className="title-actions" />
          </div>
        </div>
      </div>
    );
  }
}

// EXPORT COMPONENT
export default ManageBracket;
