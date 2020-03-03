import { Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalForm from "./animal/AnimalForm";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalEditForm from "./animal/AnimalEditForm";
import LocationsList from "./locations/LocationsList";
import LocationForm from "./locations/LocationsForm";
import LocationEditForm from "./locations/LocationsEditForm";
import LocationsDetails from "./locations/LocationsDetails";
import LocationWithEmployees from "./locations/LocationWithEmployees";
import EmployeeList from "./employees/EmployeeList";
import EmployeeForm from "./employees/EmployeeForm";
import EmployeeWithAnimals from "./employees/EmployeeWithAnimals";
import OwnersList from "./owners/OwnersList";
import OwnerForm from "./owners/OwnersForm";


/* 
  TODO: MONDAY 03-02: 
    2) Finish adding edit btns & functionality to 'Employees' & Owners 
    3) READ, FOLLOW ALONG & UNDERSTAND.... React chs. 12, 13 & 14. 
*/

const ApplicationViews = () => {
  // As long as sessionStorage has a key of 'credentials' then this func is true
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  return (
    <React.Fragment>
      {/* Rather than render JSX attribute, we use 'component' and pass in Login card */}
      <Route
        path="/login"
        render={props => {
          if (isAuthenticated()) {
            return <Redirect to="/" />;
          } else {
            return <Login {...props} />;
          }
        }}
      />

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
        // Using the 'exact' prop will require this exact path to render this component, and prevent rendering this component
        // when another path that includes this path is loaded (such as the 2 route below this first one).
        exact
        // The basic paths come from NavBar.js, the other paths come from different btn clicks.
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
        exact
        path="/animals/:animalId(\d+)"
        render={props => {
          if (isAuthenticated()) {
            return (
              <AnimalDetail
                animalId={parseInt(props.match.params.animalId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/animals/:animalId(\d+)/edit"
        render={props => {
          if (isAuthenticated()) {
            return <AnimalEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      {/* LOCATIONS */}
      <Route
        exact
        path="/locations"
        render={props => {
          if (isAuthenticated()) {
            return <LocationsList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/locations/new"
        render={props => {
          return <LocationForm {...props} />;
        }}
      />
      <Route
        exact
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
      <Route
        path="/locations/:locationId(\d+)/edit"
        render={props => {
          if (isAuthenticated()) {
            return <LocationEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/locations/:locationId(\d+)/details"
        render={props => {
          return <LocationWithEmployees {...props} />;
        }}
      />
      {/* EMPLOYEES */}
      <Route
        exact
        path="/employees"
        render={props => {
          if (isAuthenticated()) {
            return <EmployeeList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/employees/new"
        render={props => {
          return <EmployeeForm {...props} />;
        }}
      />
      {/* This new route is from Ch. 13, and will render the animal card under the employee name when you click on employee details btn */}
      <Route
        path="/employees/:employeeId(\d+)/details"
        render={props => {
          return <EmployeeWithAnimals {...props} />;
        }}
      />

      {/* OWNERS */}
      {/* TODO: Add 'owner details' route/component */}
      <Route
        exact
        path="/owners"
        render={props => {
          if (isAuthenticated()) {
            return <OwnersList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
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
