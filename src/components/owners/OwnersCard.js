import React from "react";

const OwnersCard = props => {
  return (
    <section>
      {props.owner.image ? (
        <img src={require(`${props.owner.image}`)} alt={`${props.owner.name}`} />
      ) : null}
      <h2>{props.owner.name}</h2>
      <button type="button" onClick={() => props.removeOwner(props.owner.id)}>
        Remove Owner
      </button>
    </section>
  );
};

export default OwnersCard;
