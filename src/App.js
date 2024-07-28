
import React from "react";
import "./App.css";
import axios from "axios";
import Select from "./components/Select.js";
// axios.defaults.baseURL = "https://child.onrender.com/api"; // Removed extra '/'

function App() {

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
   
      <div className="App">
        {/* <UserComponent /> */}
        {/* <PostsComponent /> */}
        <Select options={options} placeholder="select"/>
        {/* <ToggleSwitch /> */}
      
      </div>
   
  );
}

export default App;
