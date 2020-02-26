import React from "react";
import "./Employee.css";

const EmployeeCard = props => {
  return (
    <section>
      <picture>
        <img
          src={require(`${props.employee.image}`)}
          alt={`${props.employee.name}`}
        />
      </picture>
      <h2>{props.employee.name}</h2>
      <p>{props.employee.name} just loves dogs.</p>
      <button
        type="button"
        onClick={() => props.deleteEmployee(props.employee.id)}
      >
        Fire Employee!
      </button>
    </section>
  );
};

export default EmployeeCard;
