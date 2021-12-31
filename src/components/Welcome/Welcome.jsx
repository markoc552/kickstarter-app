import React from "react";
import "./styles.css";

const Welcome = () => {
  return (
    <div className="welcome-wrapper">
      <div className="current-state-wrapper">
        <div
          className="current-state-item"
          style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
        >
          <div className="current-state-item-text">20</div>
          <div className="current-state-item-text">Current campaigns</div>
        </div>
        <div className="current-state-item">
          <div className="current-state-item-text">2ETH</div>
          <div className="current-state-item-text">Funded</div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
