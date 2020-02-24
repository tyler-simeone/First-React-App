import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList"
import LocationsList from "./locations/LocationsList"
import EmployeeCard from "./employees/Employees"
import OwnersCard from "./owners/Owners"

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        path="/animals"
        render={props => {
          return <AnimalList />;
        }}
      />
      <Route
        path="/locations"
        render={props => {
          return <LocationsList />
        }}
      />
      <Route
        path="/employees"
        render={props => {
          return <EmployeeCard />
        }}
      />
      <Route
        path="/owners"
        render={props => {
          return <OwnersCard />
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;