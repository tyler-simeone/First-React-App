import React, { useState, useEffect } from "react";
import LocationsManager from "../../modules/LocationsManager";
import LocationsCard from "./LocationsCard";

const LocationsList = props => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return LocationsManager.getAll().then(locationsFromAPI => {
      setLocations(locationsFromAPI);
    });
  };

  const deleteLocation = id => {
    LocationsManager.delete(id).then(() =>
      LocationsManager.getAll().then(setLocations)
    );
  };

  // I believe useEffect() is what actually triggers the getLocations() to run in React, once the JSX component renders
  useEffect(() => {
    getLocations();
  }, []);

  return (
    <React.Fragment>
      {props.hasUser ? (
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              props.history.push("/locations/new");
            }}
          >
            Add Location
          </button>
        </section>
      ) : null}
      <div className="container-cards">
        {locations.map(location => (
          <LocationsCard
            key={location.id}
            location={location}
            deleteLocation={deleteLocation}
            hasUser={props.hasUser}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default LocationsList;
