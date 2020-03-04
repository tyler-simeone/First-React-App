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

  // pass initial state as a prop and func to update state to both child components
  return (
    <>
      <NavBar hasUser={hasUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default Kennel;