import React, { useState } from "react";

const Checkbox = ({ label, checkedInitially }) => {
  const [isChecked, setIsChecked] = useState(checkedInitially || false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center mt-4">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="form-checkbox h-5 w-5 text-blue-600"
        data-testid="checkbox"
      />
      <label className="ml-2">{label}</label>
    </div>
  );
};

export default Checkbox;
