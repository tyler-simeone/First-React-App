import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

// NavBar component now takes a props arg and for the links we want to hide when user is logged out, we use a ternary operator on 
// those list items. 
const NavBar = props => {
  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/"> Home </Link>
          </li>
          {props.hasUser
            ? <li>
                <Link className="nav-link" to="/animals"> Animals </Link>
              </li>
            : null}
          <li>
            <Link className="nav-link" to="/locations"> Locations </Link>
          </li>
          {props.hasUser
            ? <li>
                <Link className="nav-link" to="/employees"> Employees </Link>
              </li>
            : null}
          {props.hasUser
            ? <li>
                <Link className="nav-link" to="/owners"> Owners </Link>
              </li>
            : null}
          {/* LOGIN TAB IF USER NOT LOGGED IN */}
          {!props.hasUser
            ? <li>
                <Link className="nav-link" to="/login"> Login </Link>
              </li>
            : null}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;