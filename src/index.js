import React from "react";
import ReactDOM from "react-dom/client";
import Headline from "./components/Headline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Headline />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
