// IMPORT DEPENDENCIES
import React, { Component } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";
// IMPORT COMPONENTS
import Header from "../Header/Header";
import BracketCard from "../BracketCard/BracketCard";
// IMPORT STYLING
import "react-day-picker/lib/style.css";
import "./Create.css";

// CLASS COMPONENT
class Create extends Component {
  constructor(props) {
    super(props);

    // COMPONENT STATE
    this.state = {
      name: "",
      start: moment(),
      subject: "",
      description: "",
      headerImage: ""
      // private: false,
      // format: "Single Elimination"
    };
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
  cancelCreate() {
    this.props.history.push("/manage");
  }
  createBracket() {
    if (!this.props.user.user_id) {
      alert("Please create an account or log in to create a bracket.");
    } else if (!this.state.name || !this.state.subject || !this.state.start) {
      alert("Please fill out all required(*) fields.");
    } else {
      axios
        .post("/api/bracket/create", {
          name: this.state.name,
          start: this.state.start,
          subject: this.state.subject,
          description: this.state.description,
          headerImage: this.state.headerImage,
          creatorID: this.props.user.user_id
        })
        .then(response => {
          console.log(response);
        })
        .catch(console.log);
    }
  }
  render() {
    console.log(this.state);
    return (
      <div className="content-wrapper">
        <Header
          breadcrumbs={[
            { link: "/manage", title: "Manage" },
            { link: "/manage/create", title: "Create Bracket" }
          ]}
        />
        <div className="content">
          <div className="title-wrapper">
            <h2>Bracket Details</h2>
            <div className="title-actions">
              <button
                className="icon-btn positive"
                onClick={() => this.createBracket()}
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
                  <title>Save and Create</title>
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                  <polyline points="17 21 17 13 7 13 7 21" />
                  <polyline points="7 3 7 8 15 8" />
                </svg>
              </button>
            </div>
          </div>
          <div className="create-inputs">
            <div className="responsive-input-2col">
              <div className="input-group">
                <p>Name *</p>
                <input
                  autoFocus
                  placeholder="What do you want to call your bracket?"
                  value={this.state.name}
                  type="text"
                  onChange={e => this.handleChange("name", e.target.value)}
                />
              </div>
              <div className="input-group">
                <p>Subject *</p>
                <input
                  placeholder="What are you competing in?"
                  value={this.state.subject}
                  type="text"
                  onChange={e => this.handleChange("subject", e.target.value)}
                  list="subjects"
                />
                <datalist
                  id="subjects"
                  style={{ height: "100px", overflowY: "scroll" }}
                >
                  <option>Baseball</option>
                  <option>Basketball</option>
                  <option>Beer Pong</option>
                  <option>Call of Duty</option>
                  <option>CounterStrike:GO</option>
                  <option>Fantasy Sports</option>
                  <option>Football</option>
                  <option>Hearthstone</option>
                  <option>Heroes of the Storm</option>
                  <option>Hockey</option>
                  <option>League of Legends</option>
                  <option>Overwatch</option>
                  <option>Ping Pong</option>
                  <option>Soccer</option>
                </datalist>
              </div>
            </div>
            <div className="responsive-input-2col">
              <div className="input-group">
                <p>Start Date *</p>
                <style>{`
              .DayPickerInput{
                width: 100%;
              }
              .DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):not(.DayPicker-Day--selected):hover {
                background: rgba(0, 0, 0, 0.1);
                border-radius: 0;
              }

              .DayPicker-Day--today {
                color: #35AAB5;
              }

              .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
                color: #FAFAFA;
                background: #35AAB5;
                border-radius: 0;
              }

              .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
                
                background: #35AAB5;
                
              }
              `}</style>
                <DayPickerInput
                  value={new Date(this.state.start)}
                  onDayChange={day => this.handleChange("start", moment(day))}
                  dayPickerProps={{
                    disabledDays: [
                      {
                        before: new Date()
                      }
                    ]
                  }}
                  inputProps={{
                    readOnly: "readOnly"
                  }}
                />
              </div>
              <div className="input-group">
                <p>Start Time *</p>
                <input
                  placeholder="HH:MM"
                  value={this.state.start.local().format("HH:mm")}
                  type="time"
                  onChange={e => this.setTime(e.target.value)}
                />
              </div>
            </div>
            <div className="input-group">
              <p>Description</p>
              <textarea
                placeholder="How would you describe your bracket?"
                value={this.state.description}
                type="text"
                onChange={e => this.handleChange("description", e.target.value)}
              />
            </div>
            <div className="input-group">
              <p>Header Image URL</p>
              <input
                placeholder="What image do you want for your bracket?"
                value={this.state.headerImage}
                type="text"
                onChange={e => this.handleChange("headerImage", e.target.value)}
              />
            </div>
          </div>
          <div className="title-wrapper">
            <h2>Card Preview</h2>
          </div>
          <div className="card-preview">
            <BracketCard
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
            <button className="btn small" onClick={() => this.cancelCreate()}>
              Cancel
            </button>
            <button
              className="btn positive small"
              onClick={() => this.createBracket()}
            >
              Save
            </button>
          </div>
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
export default connect(mapStateToProps)(Create);
