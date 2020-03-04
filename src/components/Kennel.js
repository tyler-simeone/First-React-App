import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";

const Kennel = () => {
  // will return true / false
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  // sets initial state either true / false
  const [hasUser, setHasUser] = useState(isAuthenticated());

  // if initial state is false run this func with user credentials as arg, which will then update state to true
  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  // will clear out session storage and set hasUser state to false, bringing our site back to logged-out mode.
  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  };

  // passing state and functions as props to our child components
  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default Kennel;