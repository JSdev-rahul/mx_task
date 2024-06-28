import React from "react";

const ButtonComponent = ({ bgColor, text }) => {
  return (
    <button
      className={`bg-${bgColor}-500 hover:bg-${bgColor}-700 text-white font-bold py-2 px-4 rounded w-64 mt-4`}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
