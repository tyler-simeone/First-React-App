import React, { useState, useEffect } from "react";
import LocationsManager from "../../modules/LocationsManager";

// So right now it's not rendering the card by itself whose 'details' btn has been clicked, and it's
// stacking the path of the card that's clicked on into the URL....  
const LocationDetails = props => {
  const [location, setLocation] = useState([{ name: "" }]);
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
      <address>{location.name}</address>

      <button type="button" disabled={isLoading} onClick={handleDelete}>Remove Location</button>
    </section>
  );
};

export default LocationDetails;