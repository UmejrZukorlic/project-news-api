import React from "react";
import ReactDOM from "react-dom/client";
import Headline from "./components/Headline";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Headline />
  </React.StrictMode>
);

reportWebVitals();
