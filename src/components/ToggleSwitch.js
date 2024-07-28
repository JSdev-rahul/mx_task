import React, { useState } from "react";

const ToggleSwitch = ({ label, initialState }) => {
  const [isOn, setIsOn] = useState(initialState || false);

  const handleChange = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center mt-4">
      <span className="mr-2">{label}</span>
      <button
        onClick={handleChange}
        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
          isOn ? "bg-green-500" : "bg-gray-300"
        }`}
        data-testid="toggle-switch"
      >
        <div
          className={`w-5 h-5 bg-white rounded-full transform ${
            isOn ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
};

export default ToggleSwitch;
