import React, { useState } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeForm.css'

const EmployeeForm = props => {
  const [employee, setEmployee] = useState({ name: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    // { ...animal } means get all the props from animal obj state.
    const stateToChange = { ...employee };
    // below code accesses the obj state via its id, and updates its value to whatever vals are entered in input fields...
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
  const constructNewEmployee = evt => {
    evt.preventDefault();
    if (employee.name === "") {
      window.alert("Please input an employee name");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      EmployeeManager.post(employee)
      // After new animal is posted, redirects URL to re-render all animals again.
        .then(() => props.history.push("/employees"));
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
              placeholder="Employee Name"
            />
            <label htmlFor="employeeName">Name</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              // when isLoading is false, submit btn is clickable, when it's true, submit btn is not clickable.
              disabled={isLoading}
              onClick={constructNewEmployee}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeForm