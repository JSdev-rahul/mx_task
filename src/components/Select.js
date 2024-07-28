// src/Select.js
import React, { useState } from "react";

const Select = ({ options, placeholder }) => {
  console.log("options", options);
  const [selected, setSelected] = useState("");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="select-container">
        <h1>Select</h1>
      <select data-testid='select' value={selected} onChange={handleSelect} className="select-input">
        <option value="select" disabled>
          {placeholder}
        </option>
           {options?.map((option, index) => {
            console.log(option)
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {selected && <div className="select-result">Selected: {selected}</div>}
    </div>
  );
};

export default Select;
