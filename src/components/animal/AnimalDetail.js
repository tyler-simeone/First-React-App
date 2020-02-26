import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalDetail.css";

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);

    // Line 15 pushes the id of the animal being deleted to the browser's history, for when going
    // back a page. Line 13 allows CSS to gray out the delete button when clicked (see line 40)..
  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    AnimalManager.delete(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };
    // Line 26 means run useEffect() when URL/path includes animal id and that animal renders to DOM
  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    // (look at ApplicationView.js to see where props.animalId comes from)
    AnimalManager.get(props.animalId).then(animal => {
      setAnimal({
        name: animal.name,
        breed: animal.breed
      });
      setIsLoading(false);
    });
  }, [props.animalId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{animal.name}</span>
        </h3>
        <p>Breed: {animal.breed}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
};

export default AnimalDetail;