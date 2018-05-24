// IMPORT DEPENDENCIES
import React, { Component } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
// IMPORT COMPONENTS
import Header from "../Header/Header";
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
      startDate: new Date(),
      startTime: "00:00",
      subject: ""
    };
  }
  handleChange(prop, val) {
    this.setState({ [prop]: val });
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
                // onClick={() => this.handleSave()}
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
            <div className="input-group">
              <p>Bracket Name</p>
              <input
                placeholder="What do you want to call your bracket?"
                value={this.state.name}
                type="text"
                onChange={e => this.handleChange("name", e.target.value)}
              />
            </div>
            <div className="responsive-input-2col">
              <div className="input-group">
                <p>Start Date</p>
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
                  value={this.state.startDate}
                  onDayChange={day => this.handleChange("startDate", day)}
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
                <p>Start Time</p>
                <input
                  placeholder="HH:MM"
                  value={this.state.startTime}
                  type="time"
                  onChange={e => this.handleChange("startTime", e.target.value)}
                />
              </div>
            </div>
            <div className="input-group">
              <p>Subject</p>
              <input
                placeholder="What are you competing in?"
                value={this.state.subject}
                type="text"
                onChange={e => this.handleChange("subject", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// EXPORT COMPONENT
export default Create;
