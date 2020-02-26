import React from 'react';
import { Link } from 'react-router-dom'
import "./LocationsDetails.css"


const LocationsCard = props => {
    return (
        <section>
            <address>
                {props.location.name}
            </address>
            <Link to={`/locations/${props.location.id}`}>
                <button type="button">Details</button>
            </Link>
        </section>
    )
}

export default LocationsCard;