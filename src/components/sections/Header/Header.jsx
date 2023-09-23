import React from "react";
import "./index.scss";
import logo from "../../../assets/images/logo.svg";
import TimeCounter from "../../containers/timer/TimeCounter";

const Header = () => {
  return (
    <div id="header">
      <nav>
        <div className="header-nav">
          <div className="navbar container">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
            <button className="navbar-btn">
              <div></div>
              <div></div>
              <div></div>
            </button>
          </div>
          <div className="header-title container">
            <h1>РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В Украине</h1>
            <h3>стадионы, газопроводы, мосты, дамбы</h3>
          </div>
          <div className="header-timer container">
            <TimeCounter />
            <div className="timer-where">на рынке</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
