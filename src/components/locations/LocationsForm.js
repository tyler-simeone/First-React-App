import React, { useState } from 'react';
import LocationsManager from '../../modules/LocationsManager';
import './LocationForm.css'

const LocationForm = props => {
  // Will need to match input field ID vals to these obj keys in the returning JSX.
  const [location, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(false);

  // This one is tricky, but basically its called twice, once on each 'onChange' attribute in the two input fields. Whenever the value
  // of those fields change this function will run, then see which property of the 'location' obj is being updated (via ID value) and 
  // update 'location' with that new value.
  const handleFieldChange = evt => {
    // { ...location } means get all the props from 'location' obj state. Here it's getting 'name' and 'address'
    const stateToChange = { ...location };
    // below code accesses one of the 'location' obj's properties via input field's ID, and updates respective 'location' prop value 
    // to whatever vals are entered in input field...
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create location bject, invoke the LocationManager post method, and redirect to the full location list
  */
  const constructNewLocation = evt => {
    evt.preventDefault();
    if (location.name === "" || location.address === "") {
      window.alert("Please input a location name and address");
    } else {
      setIsLoading(true);
      // Create the location and redirect user to location list
      LocationsManager.post(location)
      // After new location is posted, redirects URL to re-render all locations again.
        .then(() => props.history.push("/locations"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Location Name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="address"
              placeholder="Location Address"
            />
            <label htmlFor="address">Location Address</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              // when isLoading is false, submit btn is clickable, when it's true, submit btn is not clickable.
              disabled={isLoading}
              onClick={constructNewLocation}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LocationForm