// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import StoryPage from "./pages/storyPage";
import StoryDetails from "./pages/storyPage/storyDetails";

axios.defaults.baseURL = "https://child.onrender.com/api"; // Removed extra '/'

function App() {
  return (
   
      <div className="App">
        <Routes>
          <Route exact path="/" element={<StoryPage />} />
          <Route path="/storyDetails/:id" element={<StoryDetails />} />
        </Routes>
      </div>
   
  );
}

export default App;
