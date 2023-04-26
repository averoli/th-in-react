import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Repeat from "./Repeat";
import Interactivity from "./addidngInteractivity/Interactivity";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Interactivity />
    {/* <Repeat /> */}
  </React.StrictMode>
);


