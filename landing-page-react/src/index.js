import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./components/navbar";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div className="main-container">
      <Navbar />
    </div>
  </>
);
