import React from 'react';


const LocationsCard = props => {
    return (
        <section>
            <address>
                {props.location.name}
            </address>
        </section>
    )
}

export default LocationsCard;