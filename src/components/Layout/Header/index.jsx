import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerIcon">
        <img
          src="https://cdn-icons-png.flaticon.com/512/21/21601.png"
          alt="news-logo"
        />
      </div>
      <div className="navigation">
        <p>Home</p>
        <p>Leatest</p>
        <p>Sport</p>
        <p>Health</p>
        <p>More</p>
      </div>
    </div>
  );
};

export default Header;
