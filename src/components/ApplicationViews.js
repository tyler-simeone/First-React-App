import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import LocationsList from "./locations/LocationsList";
import EmployeeList from "./employees/EmployeeList";
import OwnersList from "./owners/OwnersList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationsDetails from "./locations/LocationsDetails"

const ApplicationViews = () => {
  return (
    <React.Fragment>
      {/* HOME */}
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      {/* ANIMALS */}
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
      {/* LOCATIONS */}
      <Route
        path="/locations"
        render={props => {
          return <LocationsList />;
        }}
      />
      <Route 
        path="/locations/:locationId(\d+)"
        render={props => {
          return (
            <LocationsDetails 
              locationId={parseInt(props.match.params.locationId)}
              {...props}
            />
          )
        }}
      />
      {/* EMPLOYEES */}
      <Route
        path="/employees"
        render={props => {
          return <EmployeeList />;
        }}
      />
      {/* OWNERS */}
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
