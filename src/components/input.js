import React, { useState } from "react";

const InputBox = () => {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col items-center mt-8">
      <h1>Name:</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter Your Name"
        className="border border-gray-300 p-2 rounded w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputBox;
