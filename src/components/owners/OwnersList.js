import React, { useEffect, useState } from "react";
import OwnersManager from "../../modules/OwnersManager";
import OwnersCard from "./OwnersCard";

const OwnersList = () => {
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    OwnersManager.getAll().then(ownersFromAPI => setOwners(ownersFromAPI));
  };

  const removeOwners = id => {
    OwnersManager.delete(id).then(() => OwnersManager.getAll()).then(setOwners);
  };

  useEffect(() => {
    getOwners();
  }, []);

  return (
    <div>
      {owners.map(owner => (
        <OwnersCard key={owner.id} owner={owner} removeOwner={removeOwners} />
      ))}
    </div>
  );
};

export default OwnersList;
