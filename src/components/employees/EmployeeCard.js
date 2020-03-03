import React from "react";
import "./Employee.css";

const EmployeeCard = props => {
  return (
    <section>
      <picture>
        {props.employee.image ? (
          <img
            src={require(`${props.employee.image}`)}
            alt={`${props.employee.name}`}
          />
        ) : null}
      </picture>
      <h2>{props.employee.name}</h2>
      <p>
        {props.employee.name === "Sean Evans"
          ? `${props.employee.name} just loves.... chicken?`
          : `${props.employee.name} just loves dogs.`}
      </p>
      <button
        type="button"
        onClick={() => {
          props.history.push(`/employees/${props.employee.id}/details`);
        }}
      >
        Details
      </button>
      <button
        type="button"
        onClick={() => props.deleteEmployee(props.employee.id)}
      >
        Fire Employee
      </button>
    </section>
  );
};

export default EmployeeCard;
