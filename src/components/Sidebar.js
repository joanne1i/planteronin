import React from "react";
import "./Sidebar.css";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="navbar">
        <div id="navbar" className="collapse">
          <ul>
            <li>
              <a href="#main">My Current Plants</a>
            </li>
            <li>
              <a href="#monstera">Monstera</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
