import React from "react";

const EmployeeCard = () => {
    return (
        <section>
            <ul>
                <img src={require("./owenwilson.jpg")} className="owenWilsonImage" alt="Owen Wilson" />
                <li>Owen Wilson</li>
                <img src={require("./braddpitt.jpg")} className="bradPittImage" alt="Brad Pitt" />
                <li>Bradd Pitt</li>
            </ul>
        </section>
    )
}

export default EmployeeCard;