import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

import { NewsContext } from "../../context";
import "./header.css";
import { useContext } from "react";

const Header = () => {
  const [inputValue, setInputValue] = useState("sport");

  const {
    firstParameter,
    setFirstParameter,
    secondParameter,
    setSecondParameter,
    page,
    setPage,
  } = useContext(NewsContext);

  const searchFuction = () => {
    setFirstParameter("everything");
    setSecondParameter("q=" + inputValue);
    setPage(20);
    console.log(secondParameter);
  };

  return (
    <div className="header">
      <Link
        to="/"
        className="headerIcon"
        onClick={() => {
          setFirstParameter("top-headline");
          setSecondParameter("country=us");
          setPage(20);
        }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/21/21601.png"
          alt="news-logo"
        />
      </Link>
      <div className="navigation">
        <div className="search">
          <input
            type="text"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button onClick={searchFuction}>
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
