import React from "react";
import ReactDOM from "react-dom/client";
import Headline from "./components/Headline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Article from "./components/Article";
import Context from "./components/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <Routes>
          <Route path="/" element={<Headline />} />
          <Route path="/articles" element={<Article />} />
        </Routes>
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
