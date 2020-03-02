import React from "react";
import { Link } from "react-router-dom";
import "./Animal.css";

const AnimalCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.animal.name}</span>
        </h3>
        <p>Breed: {props.animal.breed}</p>
        {/* The 3 btns below are 2 different ways to redirect the user on btn click. */}
        <Link to={`/animals/${props.animal.id}`}>
          <button type="button">Details</button>
        </Link>
        <button
          type="button"
          onClick={() => props.history.push(`/animals/${props.animal.id}/edit`)}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => props.deleteAnimal(props.animal.id)}
        >
          Discharge
        </button>
      </div>
    </div>
  );
};

export default AnimalCard;
