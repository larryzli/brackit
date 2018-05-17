// IMPORT DEPENDENCIES
import React, { Component } from "react";
import { connect } from "react-redux";
// IMPORT COMPONENTS
import Header from "../Header/Header";
// IMPORT REDUX FUNCTIONS
import { getUser, updateUser } from "../../reducers/userReducer";
// IMPORT STYLING
import "./Profile.css";

// CLASS COMPONENT
class Profile extends Component {
  constructor(props) {
    super(props);

    // COMPONENT STATE
    this.state = {
      alias: "",
      name: "",
      image: "",
      loading: true,
      saved: false,
      error: false
    };
  }
  componentDidMount() {
    this.props.getUser().then(response => {
      this.setState({
        alias: this.props.user.alias,
        name: this.props.user.name,
        image: this.props.user.profile_image_url,
        loading: false
      });
    });
  }
  revert() {
    this.setState({
      alias: this.props.user.alias,
      name: this.props.user.name,
      image: this.props.user.profile_image_url
    });
  }
  handleChange(prop, val) {
    this.setState({ [prop]: val });
  }
  handleSave() {
    this.setState({ loading: true });
    this.props
      .updateUser(
        this.props.user.user_id,
        this.state.alias,
        this.state.name,
        this.state.image
      )
      .then(this.setState({ loading: false, saved: true, error: false }))
      .catch(e => {
        this.setState({ error: true });
      });
  }
  render() {
    console.log(this.props);
    return (
      <div className="content">
        <Header breadcrumbs={[{ link: "/profile", title: "Profile" }]} />
        {this.state.loading ? (
          !this.props.user.user_id ? (
            <div>Please Log In</div>
          ) : (
            <div>Loading profile...</div>
          )
        ) : (
          <div>
            <div>
              <div>
                Alias:{" "}
                <input
                  value={this.state.alias}
                  type="text"
                  onChange={e => this.handleChange("alias", e.target.value)}
                />
              </div>
              <div>
                Name:{" "}
                <input
                  value={this.state.name}
                  type="text"
                  onChange={e => this.handleChange("name", e.target.value)}
                />
              </div>
              <div>
                Profile Image:{" "}
                <input
                  value={this.state.image}
                  type="text"
                  onChange={e => this.handleChange("image", e.target.value)}
                />
              </div>
            </div>
            <div>
              <button onClick={() => this.revert()}>Revert</button>
              <button onClick={() => this.handleSave()}>Save</button>
            </div>
          </div>
        )}
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
export default connect(mapStateToProps, { getUser, updateUser })(Profile);
