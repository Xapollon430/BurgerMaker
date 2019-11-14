import React from "react";
import "../../../index.css";

const BuildControl = props => {
  return (
    <div className="BuildControl">
      <div>{props.label}</div>
      <button className="Less">Less</button>
      <button className="More">More</button>
    </div>
  );
};

export default BuildControl;
