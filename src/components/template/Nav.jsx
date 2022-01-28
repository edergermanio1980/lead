import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      {/*Refatorar em casa*/}
      <Link to="/">
        <i className="fa fa-home"></i> Inicio
      </Link>
      <Link to="/users">
        <i className="fa fa-users"></i> Leads
      </Link>
    </nav>
  </aside>
);
