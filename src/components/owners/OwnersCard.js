import React from "react";

/* For some reason it's trying to grab img from 'employees' DB arr instead of 'owners' */
const OwnersCard = props => {
  return (
    <section>
      <img src={require(`${props.owner.image}`)} alt="Will Ferrell" />
      <h2>Will Ferrell</h2>
      <button type="button" onClick={() => props.removeOwner(props.owner.id)}>
        Remove Owner
      </button>
    </section>
  );
};

export default OwnersCard;
