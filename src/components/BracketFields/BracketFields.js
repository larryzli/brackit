import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import moment from "moment";

const BracketFields = props => {
  return (
    <div className="create-inputs">
      <div className="responsive-input-2col">
        <div className="input-group">
          <p>Name *</p>
          <input
            className={props.error && !props.name ? "error" : ""}
            autoFocus
            placeholder="What do you want to call your bracket?"
            value={props.name}
            type="text"
            onChange={e => props.handleChange("name", e.target.value)}
          />
        </div>
        <div className="input-group">
          <p>Subject *</p>
          <input
            className={props.error && !props.subject ? "error" : ""}
            placeholder="What are you competing in?"
            value={props.subject}
            type="text"
            onChange={e => props.handleChange("subject", e.target.value)}
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
            value={new Date(props.start)}
            onDayChange={day => props.handleChange("start", moment(day))}
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
            value={props.start.local().format("HH:mm")}
            type="time"
            onChange={e => props.setTime(e.target.value)}
          />
        </div>
      </div>
      <div className="input-group">
        <p>Description</p>
        <textarea
          placeholder="How would you describe your bracket?"
          value={props.description}
          type="text"
          onChange={e => props.handleChange("description", e.target.value)}
        />
      </div>
      <div className="input-group">
        <p>Header Image URL</p>
        <input
          placeholder="What image do you want for your bracket?"
          value={props.headerImage}
          type="text"
          onChange={e => props.handleChange("headerImage", e.target.value)}
        />
      </div>
    </div>
  );
};

export default BracketFields;
