import React from "react";
import "./CalculatorOperators.css"

class CalculatorOperators extends React.Component {
    render() {
        return(
            <div className="calculator-operantors">
                <div className="operator plus">+</div>
                <div className="operator">-</div>
                <div className="operator">/</div>
                <div className="operator multiply">*</div>
            </div>
        )
    }
}

export default CalculatorOperators;