import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalForm from "./animal/AnimalForm";
import LocationsList from "./locations/LocationsList";
import LocationForm from "./locations/LocationsForm"
import EmployeeList from "./employees/EmployeeList";
import EmployeeForm from "./employees/EmployeeForm";
import OwnersList from "./owners/OwnersList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationsDetails from "./locations/LocationsDetails";

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
          return <AnimalList {...props} />;
        }}
      />
      <Route
        path="/animals/new"
        render={props => {
          return <AnimalForm {...props} />;
        }}
      />
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
        exact
        path="/locations"
        render={props => {
          return <LocationsList {...props} />;
        }}
      />
      <Route
        path="/locations/new"
        render={props => {
          return <LocationForm {...props} />;
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
          );
        }}
      />
      {/* EMPLOYEES */}
      <Route
        exact
        path="/employees"
        render={props => {
          return <EmployeeList {...props} />;
        }}
      />
      <Route
        path="/employees/new"
        render={props => {
          return <EmployeeForm {...props} />;
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
