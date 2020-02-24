import React from "react";
import "./Employee.css";

const EmployeeCard = props => {
    return (
        <section>
            <picture>
                <img src={require(`${props.employee.image}`)} alt={`${props.employee.name}`} />
            </picture>
            <h2>
                {props.employee.name}
            </h2>
            <p>
                {props.employee.name} just loves dogs. 
            </p>
        </section>
    )
}

export default EmployeeCard;