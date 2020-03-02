import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import EmployeeManager from "../../modules/EmployeeManager";
import "./AnimalForm.css";

// This form will look very similar to the 'post' form to create an animal, but this form will have user interface pre-populated w/ vals of the obj being edited
const AnimalEditForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Gets all properties from 'animal' obj state, then updates specified properties based on which input invokes this function.
  const handleFieldChange = evt => {
    console.log("handling input field change");
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  // This fn prevents btn being clicked after saving update -> creates a new animal obj with values of input field vals from our current
  // 'animal' state -> then updates existing animal obj in "animals" DB arr with this new animal obj, then resets URL to redirect user.
  const updateExistingAnimal = evt => {
    console.log("updating existing animal");
    evt.preventDefault();
    // when this fn fires on btn click, will not be able to click btn again until 'setIsLoading()' is reset to val of 'false'
    setIsLoading(true);

    // This is an edit, so we need the id (retrieved from URL qs param)
    // TODO: Get employeeId to update in DB....
    const editedAnimal = {
      id: props.match.params.animalId,
      name: animal.name,
      breed: animal.breed,
      employeeId: employees.id
    };

    AnimalManager.update(editedAnimal).then(() =>
      props.history.push("/animals")
    );
  };
  // Gets an animal from the DB based on ID from URL qs param, then sets 'animal' state = to that animal obj, which pre-populates user
  // interface when in edit mode. (This func runs first)
  useEffect(() => {
    console.log("getting animal from DB");
    AnimalManager.get(props.match.params.animalId).then(animal => {
      EmployeeManager.getAll().then(employees => {
        setEmployees(employees);
        setAnimal(animal);
        // Need below line to come after the prior 2 lines, bc you need btn to be clickable .......
        setIsLoading(false);
      })
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
          <select
            className="form-control"
            id="employeeId"
            value={animal.employeeId}
            onChange={handleFieldChange}
          >
            {employees.map(employee => (
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
            ))}
          </select>
          <label htmlFor="employeeId">Employee</label>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalEditForm;
