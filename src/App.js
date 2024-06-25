import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        Developed by <b>TITIKSHA SHARMA</b> 
      </div>
    </React.Fragment>
  );
}

export default App;
