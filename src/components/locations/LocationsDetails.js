import React, { useState, useEffect } from "react";
import LocationsManager from "../../modules/LocationsManager";
import "./LocationsDetails.css"
import { Link } from "react-router-dom";

// So right now it's not rendering the card by itself whose 'details' btn has been clicked, and it's
// stacking the path of the card that's clicked on into the URL....  
// Was missing 2 things: a beginning '/' in the link's 'to' path attribute & the 'exact' word before 'path' on first 
// 'locations' route in ApplicationViews.js, which prevents the list from reloading with the single card.
const LocationDetails = props => {
  const [location, setLocation] = useState({ name: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);
    LocationsManager.delete(props.locationId).then(() => {
      props.history.push("/locations");
    });
  };

  useEffect(() => {
    LocationsManager.get(props.locationId).then(location => {
      setLocation({
        name: location.name
      });
      setIsLoading(false);
    });
  }, [props.locationId]);

  return (
    <section>
      <h2>{location.name}</h2>

      <button type="button" disabled={isLoading} onClick={handleDelete}>Remove Location</button>
      <Link to="/locations">
        <button type="button">All Locations</button>
      </Link>
    </section>
  );
};

export default LocationDetails;