import React, { useEffect, useState } from "react";
import OwnersManager from "../../modules/OwnersManager";
import OwnersCard from "./OwnersCard";

const OwnersList = props => {
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
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/owners/new");
          }}
        >
          Add Owner
        </button>
      </section>
      <div>
        {owners.map(owner => (
          <OwnersCard key={owner.id} owner={owner} removeOwner={removeOwners} />
        ))}
      </div>
    </>
  );
};

export default OwnersList;
