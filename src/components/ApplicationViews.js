import { Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalForm from "./animal/AnimalForm";
import AnimalDetail from "./animal/AnimalDetail";
import LocationsList from "./locations/LocationsList";
import LocationForm from "./locations/LocationsForm";
import LocationsDetails from "./locations/LocationsDetails";
import EmployeeList from "./employees/EmployeeList";
import EmployeeForm from "./employees/EmployeeForm";
import OwnersList from "./owners/OwnersList";
import OwnerForm from "./owners/OwnersForm";

const ApplicationViews = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  return (
    <React.Fragment>
      <Route path="/login" component={Login} />

      {/* HOME */}
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />

      {/* ANIMALS */}
      <Route
        exact
        path="/animals"
        render={props => {
          if (isAuthenticated()) {
            return <AnimalList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
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
        exact
        path="/owners"
        render={props => {
          return <OwnersList {...props} />;
        }}
      />
      <Route
        path="/owners/new"
        render={props => {
          return <OwnerForm {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
