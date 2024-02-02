import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
      Copyright {"©"} 2024 by {" "}
        <a target="_blank" href="https://www.linkedin.com/in/pranjal-kumar-singh-92aa131bb/" rel="noreferrer">
          Pranjal Kumar Singh
        </a>{"."} All Rights Reserved.
      
      </div>
    </React.Fragment>
  );
}

export default App;
