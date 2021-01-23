import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <h3>Summer assignment</h3>
      <ul className="nav-links">
        <Link to="/beanies" className="nav-items">
          <li>beanies</li>
        </Link>
        <Link to="/facemasks" className="nav-items">
          <li>facemasks</li>
        </Link>
        <Link to="gloves" className="nav-items">
          <li>gloves</li>
        </Link>
      </ul>
    </nav>
  );
}
