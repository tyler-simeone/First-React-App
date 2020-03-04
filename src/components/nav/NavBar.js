import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css";

// Exporting and importing this NavBar component 'withRouter' so we can use 'props.history.push' method in the nested 'handleLogout' fn

// NavBar component now takes a props arg and for the links we want to hide when user is logged out, we use a ternary operator on those list items. 
const NavBar = props => {

  // clears session storage and redirects user to 'Home', and then should see only 3 tabs including 'Login' tab
  const handleLogout = () => {
    props.clearUser();
    props.history.push('/');
  };

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
          {/* LOGIN/LOGOUT TAB w/ logout functionality */}
          {/* used a span tag for the logout tab bc 'Link' React tags require a to="" prop. */}
          {props.hasUser
            ? <li>
                <span className="nav-link" onClick={handleLogout}> Logout </span>
              </li>
            : <li>
                <Link className="nav-link" to="/login"> Login </Link>
              </li>}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);