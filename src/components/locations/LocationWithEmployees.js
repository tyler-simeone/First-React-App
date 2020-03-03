import React, { useState, useEffect } from "react";
import LocationsManager from "../../modules/LocationsManager";
import EmployeeCard from "../employees/EmployeeCard";

const LocationWithEmployees = props => {
  const [location, setLocation] = useState({});
  const [employees, setEmployees] = useState([]);

//  TODO: Why is this returning an empty embedded "employees" arr for locations 1 & 3? --> The trouble was with where I was using the FKs (wrong array). After moving the FKs to correct array I was then able to successfully embed the employees within the locations array. 
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
