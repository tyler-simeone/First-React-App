import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import LocationsManager from "../../modules/LocationsManager";
import EmployeeCard from "../employees/EmployeeCard";

// TODO: When you click on location details, should be able to see which employee works there...

const LocationWithEmployees = props => {
  const [location, setLocation] = useState({});
  const [employees, setEmployees] = useState([]);

//  TODO: Why is this returning an empty embedded "employees" arr for locations w/ employeeId of 1....
// So it doesn't have anything to do w/ the employeeId, bc if I put employeeId of 2 instead of 1 on 1st & 3rd locations they still
// don't load an embedded "employees" arr.
  useEffect(() => {
    console.log("Getting location with employees");
    LocationsManager.getWithEmployees(props.match.params.locationId).then(
      APIResult => {
        console.log(APIResult);
        setLocation(APIResult);
        setEmployees(APIResult.employees);
      }
    );
  }, []);

  return (
    <div className="card">
      <p>Name: {location.name}</p>
      <p>Location: {location.address}</p>
      {employees.map(employee => (
        <EmployeeCard key={employee.id} employee={employee} {...props} />
      ))}
    </div>
  );
};

export default LocationWithEmployees;
