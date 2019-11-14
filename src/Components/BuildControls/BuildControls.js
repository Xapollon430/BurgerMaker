import React from "react";
import "../../index.css";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  {
    label: "salad",
    type: "salad"
  },
  {
    label: "meat",
    type: "meat"
  },
  {
    label: "bacon",
    type: "bacon"
  },
  {
    label: "cheese",
    type: "cheese"
  }
];

const BuildControls = props => {
  return (
    <div className="BuildControls">
      {controls.map(label => {
        return <BuildControl label={label.label} key={label.label}  />;
      })}
    </div>
  );
};

export default BuildControls;
