// IMPORT DEPENDENCIES
import React from "react";
// IMPORT STYLING
import "./BracketCard.css";
// IMPORT ASSETS
import defaultPic from "../../assets/img/default_brackit.png";

// CLASS COMPONENT
const BracketCard = function(props) {
  return (
    <div className="bracket-card-container">
      <div className="bracket-card-content">
        <div
          className="bracket-card-image"
          style={{
            backgroundImage: `url("${props.image}"), url(${defaultPic})`
          }}
        >
          <div
            className={`bracket-card-status ${
              props.status ? props.status.toLowerCase() : ""
            }`}
          >
            {props.status || "Draft"}
          </div>
        </div>
        <div className="bracket-card-title">
          <div className="bracket-card-name">
            {props.name || "Bracket Name"}
          </div>
          <div className="bracket-card-subject">
            {props.subject || "Subject"}
          </div>
          <div className="bracket-card-author">
            {"Managed by "}
            <span>{props.author || "Guest"}</span>
          </div>
        </div>
        <div className="bracket-card-details">
          <div className="bracket-card-times">
            <div className="bracket-card-times-entry">
              <div className="entry-label">Date</div>
              <div className="entry-data">
                {props.start
                  ? `${props.start.local().month() +
                      1}/${props.start.local().date()}`
                  : "MM/DD"}
              </div>
            </div>
            <div className="bracket-card-times-entry">
              <div className="entry-label">Time</div>
              <div className="entry-data">
                {props.start ? props.start.format("HH:mm") : "HH:MM"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bracket-card-overlay">
        <div className="bracket-card-description">
          {props.description || "No Description"}
        </div>
        {props.manage ? (
          <div className="bracket-card-controls">
            <button
              className="btn card-btn"
              onClick={e =>
                props.mng && props.id ? props.mng(props.id) : null
              }
            >
              Manage
            </button>
            <button
              className="btn card-btn caution"
              onClick={e =>
                props.edit && props.id ? props.edit(props.id) : null
              }
            >
              Edit
            </button>
          </div>
        ) : (
          <div className="bracket-card-controls">
            <button
              className="btn card-btn"
              onClick={e =>
                props.view && props.id ? props.view(props.id) : null
              }
            >
              Details
            </button>
            <button
              className="btn card-btn positive"
              onClick={e =>
                props.join && props.id ? props.join(props.id) : null
              }
            >
              Join
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// EXPORT COMPONENT
export default BracketCard;
