import React from "react";
import "./CalculatorOperators.scss";

class CalculatorOperators extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="calculator-operantors">
        <div className="operator plus" onClick={this.props.operatorsFunctionality}>+</div>
        <div className="operator" onClick={this.props.operatorsFunctionality}>-</div>
        <div className="operator" onClick={this.props.operatorsFunctionality}>/</div>
        <div className="operator multiply" onClick={this.props.operatorsFunctionality}>*</div>
      </div>
    );
  }
}

export default CalculatorOperators;
