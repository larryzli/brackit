// IMPORT DEPENDENCIES
import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
// IMPORT COMPONENTS
import Header from "../Header/Header";
// IMPORT REDUX FUNCTIONS
import { updateUser } from "../../reducers/userReducer";
// IMPORT ASSETS
import defaultPic from "../../assets/img/deafult_user.svg";
import invalidPic from "../../assets/img/invalid_img.svg";
import loadingIcon from "../../assets/loading/loading-spin.svg";
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
      bio: "",
      loading: true,
      saved: false,
      error: false,
      editing: false
    };
  }
  componentDidMount() {
    // GET CURRENT USER DATA
    this.getUserData();
  }
  componentDidUpdate(newProps) {
    // IF NEW USER ID PROVIDED REFETCH USER DATA WITH NEW ID
    if (newProps.match.params.id !== this.props.match.params.id) {
      this.getUserData();
    }
  }

  // FETCHES USER DATA
  getUserData() {
    // SET LOADING STATE
    if (!this.state.loading) {
      this.setState({ loading: true });
    }
    // GET USER DATA WITH ID PROVIDED IN URL
    axios.get(`/api/user/${this.props.match.params.id}`).then(response => {
      // SET USER DATA ON STATE
      this.setState({
        alias: response.data.alias || "",
        name: response.data.name || "",
        image: response.data.profile_image_url || "",
        bio: response.data.bio || "No bio",
        loading: false
      });
    });
  }

  // REVERTS EDIT CHANGES AND FLAG
  revert() {
    this.setState({
      alias: this.props.user.alias || "",
      name: this.props.user.name || "",
      image: this.props.user.profile_image_url || "",
      bio: this.props.user.bio || "No bio",
      editing: false
    });
  }

  // TOGGLES EDIT FLAG
  toggleEdit() {
    this.setState({
      editing: !this.state.editing
    });
  }

  // HANDLES INPUT CHANGES
  handleChange(prop, val) {
    this.setState({ [prop]: val });
  }

  // SAVES CHANGES TO USER DATA
  handleSave() {
    this.setState({ loading: true });
    this.props
      .updateUser(
        this.props.user.user_id,
        this.state.alias,
        this.state.name,
        this.state.image,
        this.state.bio
      )
      .then(
        this.setState({
          loading: false,
          saved: true,
          error: false,
          editing: false
        })
      )
      .catch(e => {
        this.setState({ error: true });
      });
  }

  render() {
    return (
      <div className="content-wrapper">
        <Header
          breadcrumbs={[
            { link: `/profile/${this.props.match.params.id}`, title: "Profile" }
          ]}
        />
        {this.state.loading ? (
          <div className="loading-container">
            <img src={loadingIcon} alt="Loading..." />
          </div>
        ) : (
          <div className="content">
            <div className="title-wrapper">
              <h2>User Profile</h2>
              {this.state.editing ? (
                <div className="title-actions">
                  <button
                    className="icon-btn negative"
                    onClick={() => this.revert()}
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
                      <title>Discard Changes</title>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                  <button
                    className="icon-btn positive"
                    onClick={() => this.handleSave()}
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
                      <title>Save Changes</title>
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                      <polyline points="17 21 17 13 7 13 7 21" />
                      <polyline points="7 3 7 8 15 8" />
                    </svg>
                  </button>
                </div>
              ) : this.props.user.user_id === +this.props.match.params.id ? (
                <div className="title-actions">
                  <button
                    className="icon-btn"
                    onClick={() => this.toggleEdit()}
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
                      <title>Edit Profile</title>
                      <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
                      <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
                    </svg>
                  </button>
                </div>
              ) : null}
            </div>
            <div className="profile-inputs">
              <div className="responsive-input-2col">
                <div className="input-group">
                  <p>Alias</p>
                  {this.state.editing ? (
                    <input
                      autoFocus
                      placeholder="Enter an alias"
                      value={this.state.alias}
                      type="text"
                      onChange={e => this.handleChange("alias", e.target.value)}
                    />
                  ) : (
                    <p>{this.state.alias}</p>
                  )}
                </div>
                <div className="input-group">
                  <p>Name</p>
                  {this.state.editing ? (
                    <input
                      placeholder="Enter your name"
                      value={this.state.name}
                      type="text"
                      onChange={e => this.handleChange("name", e.target.value)}
                    />
                  ) : (
                    <p>{this.state.name}</p>
                  )}
                </div>
              </div>
              {/* <div className="responsive-input-2col"> */}
              <div className="input-group">
                <p>Image</p>
                <img
                  className="profile-image"
                  src={this.state.image || defaultPic}
                  style={
                    this.state.editing
                      ? null
                      : { width: "110px", height: "110px" }
                  }
                  onError={e => {
                    e.target.src = invalidPic;
                  }}
                  alt="profile"
                />
                {this.state.editing ? (
                  <input
                    value={this.state.image}
                    placeholder="Image URL"
                    type="text"
                    onChange={e => this.handleChange("image", e.target.value)}
                  />
                ) : null}
              </div>
              <div className="input-group">
                <p>Bio</p>
                {this.state.editing ? (
                  <textarea
                    value={this.state.bio}
                    placeholder="Write a short bio"
                    type="text"
                    onChange={e => this.handleChange("bio", e.target.value)}
                  />
                ) : (
                  <p className="formatted-text">{this.state.bio}</p>
                )}
              </div>
              {/* </div> */}
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
export default connect(mapStateToProps, { updateUser })(Profile);
