import React, { useState, useEffect } from 'react';
//import the components we will need
import AnimalCard from './AnimalCard';
import AnimalManager from '../../modules/AnimalManager';

const AnimalList = () => {
  // The initial state of 'animals' is an empty array
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    // .. and when the state changes, the data component will re-render to DOM
    return AnimalManager.getAll().then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };

  // got the animals from the API on the component's first render... useEffect waits for components to 'Mount'/render to the DOM
  // and THEN fetches the API data and displays it. 
  useEffect(() => {
    getAnimals();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards.
  // 'key' & 'animal' are necessary properties for the 'props' object argument that will be
  // referenced in AnimalCard.js... 'animal' property in the props obj holds the animal obj of each animal, 
  // and that is what will be referenced in AnimalCard.js JSX, the 'key' property will not be referenced,
  // as that acts like JSON id property in a JSON file. Just a unique identifier for each AnimalCard component.
  // We need that unique idenfier for React to keep track of only re-rendering child components whose state has changed.

  // Also, AnimalCard is a child component of AnimalList (which is what is returned when 'animals' tab is clicked on),
  // and the child component always inherits the state of the parent component via 'props' obj argument. 
  return (
    <div className="container-cards">
      {animals.map(animal => <AnimalCard key={animal.id} animal={animal} />)}
    </div>
  );
};
export default AnimalList