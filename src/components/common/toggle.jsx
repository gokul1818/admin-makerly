import React, { useState } from "react";
import ReactSwitch from "react-switch";

function ToggleSwitch({ checked, onChange }) {
  return (
    <div className="app" style={{ textAlign: "center" }}>
      <h6>{checked ? "paid" : "unpaid"}</h6>
      <ReactSwitch
        checked={checked}
        // onColor={switchColor}
        onChange={onChange}
      />
    </div>
  );
}

export default ToggleSwitch;
