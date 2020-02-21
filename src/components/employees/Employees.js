import React from "react";

const EmployeeCard = () => {
    return (
        <section>
            <ul>
                <img src={require("./owenwilson.jpg")} className="owenWilsonImage" />
                <li>Owen Wilson</li>
                <img src={require("./braddpitt.jpg")} className="bradPittImage" />
                <li>Bradd Pitt</li>
            </ul>
        </section>
    )
}

export default EmployeeCard;