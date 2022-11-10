import React from "react";
import "./Header.css";
import { BiMenu } from "react-icons/bi";
import Clock from "../Clock/Clock";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo-container">
        <BiMenu className="menu" />
        <img
          className="weather-logo"
          src="http://weaths.kitmanyiu.com/static/media/weather.57ef9c2b.png"
          alt="weather icon"></img>
      </div>
      <div>
        <Clock/>
      </div>
      <div className="search-container">
        <input className="search-input" type="text"></input>
      </div>
    </div>
  );
};

export default Header;
