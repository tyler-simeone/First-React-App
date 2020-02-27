import React, { useState } from 'react';
import OwnersManager from '../../modules/OwnersManager';
import './OwnersForm.css'

const OwnerForm = props => {
  const [owner, setOwner] = useState({ name: ""});
  const [isLoading, setIsLoading] = useState(false);

  // This one is tricky, but basically its called twice, once on each 'onChange' attribute in the two input fields. Whenever the value
  // of those fields change this function will run, then see which property of the 'location' obj is being updated (via ID value) and 
  // update 'location' with that new value.
  const handleFieldChange = evt => {
    // { ...owner } means get all the props from 'owner' obj state. Here it's just getting 'name' as it's the only prop on 'owner'
    const stateToChange = { ...owner };
    // below code accesses one of the 'location' obj's properties via input field's ID, and updates respective 'location' prop value 
    // to whatever vals are entered in input field...
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create location bject, invoke the LocationManager post method, and redirect to the full location list
  */
  const constructNewLocation = evt => {
    evt.preventDefault();
    if (owner.name === "") {
      window.alert("Please input an owner name");
    } else {
      setIsLoading(true);
      // Create the location and redirect user to owners list
      OwnersManager.post(owner)
      // After new location is posted, redirects URL to re-render all owners again.
        .then(() => props.history.push("/owners"));
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
              placeholder="Owner Name"
            />
            <label htmlFor="name">Name</label>
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

export default OwnerForm