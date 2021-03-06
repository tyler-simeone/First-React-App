import React from "react";
import { Link } from "react-router-dom";
import "./LocationsDetails.css";

const LocationsCard = props => {
  return (
    <section>
      <h2>{props.location.name}</h2>
      <address>{props.location.address}</address>
      {props.hasUser ? (
        <section>
          <Link to={`/locations/${props.location.id}/details`}>
            <button type="button">Details</button>
          </Link>
          <Link to={`/locations/${props.location.id}/edit`}>
            <button type="button">Edit Location</button>
          </Link>
          <button
            type="button"
            onClick={() => props.deleteLocation(props.location.id)}
          >
            Delete Location
          </button>
        </section>
      ) : null}
    </section>
  );
};

export default LocationsCard;
