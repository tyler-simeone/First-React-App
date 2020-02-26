import React, {useState, useEffect} from 'react';
import LocationsManager from '../../modules/LocationsManager';
import LocationsCard from './LocationsCard';

const LocationsList = () => {
    const [locations, setLocations] = useState([]);

    const getLocations = () => {
        return LocationsManager.getAll().then(locationsFromAPI => {
            setLocations(locationsFromAPI);
        });
    };
    // I believe useEffect() is what actually triggers the getLocations() to run in React, once the JSX component renders
    useEffect(() => {        
        getLocations();
    }, []);

    return (
        <div className="container-cards">
            {locations.map(location => <LocationsCard key={location.id} location={location} />)}
        </div>
    );
};

export default LocationsList