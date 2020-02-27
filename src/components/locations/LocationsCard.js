import React from 'react';
import { Link } from 'react-router-dom'
import "./LocationsDetails.css"


const LocationsCard = props => {
    return (
        <section>
            <h2>{props.location.name}</h2>
            <address>
                {props.location.address}
            </address>
            <Link to={`/locations/${props.location.id}`}>
                <button type="button">Details</button>
            </Link>
            <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Delete Location</button>
        </section>
    )
}

export default LocationsCard;