import React, { useState, useEffect } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import LocationsManager from "../../modules/LocationsManager";
import LocationsCard from './LocationsCard';

// TODO: When you click on location details, should be able to see which employee works there...

const LocationWithEmployees = props => {
    const [employee, setEmployee] = useState({});
    const [locations, setLocations] = useState([]);


  useEffect(() => {
    //got here now make call to get employee with animal
    LocationsManager.getWithEmployees(props.match.params.employeeId)
      .then(APIResult => {
        setEmployee(APIResult);
        setAnimals(APIResult.animals);
      });
  }, []);

  return (
    <div className="card">
      <p>Employee: {employee.name}</p>
      {locations.map(location =>
        <LocationsCard
          key={location.id}
          location={location}
          {...props}
        />
      )}
    </div>
  );
};

export default LocationWithEmployees;