import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import LocationsList from "./locations/LocationsList";
import EmployeeList from "./employees/EmployeeList";
import OwnersList from "./owners/OwnersList";
import AnimalDetail from "./animal/AnimalDetail";
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
      {/* Make sure you add the `exact` attribute here */}
      <Route
        exact
        path="/animals"
        render={props => {
          return <AnimalList />;
        }}
      />
      {/* Line 35 means get id from URL query string parameter */}
      {/* Line 36 means 'implicitly add more props from props argument' */}
      <Route
        path="/animals/:animalId(\d+)"
        render={props => {
          // Pass the animalId to the AnimalDetailComponent
          return (
            <AnimalDetail
              animalId={parseInt(props.match.params.animalId)}
              {...props}
            />
          );
        }}
      />
      <Route
        path="/locations"
        render={props => {
          return <LocationsList />;
        }}
      />
      <Route
        path="/employees"
        render={props => {
          return <EmployeeList />;
        }}
      />
      <Route
        path="/owners"
        render={props => {
          return <OwnersList />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
