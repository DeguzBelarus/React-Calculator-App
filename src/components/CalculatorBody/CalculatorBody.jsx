import React from "react";
import "./CalculatorBody.css";
import CalculatorButtons from "../CalculatorButtons/CalculatorButtons";
import CalculatorOperators from "../CalculatorOperators/CalculatorOperators";
import CalculatorAddButtons from "../CalculatorAddButtons/CalculatorAddButtons";

class CalculatorBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calculatorDisplayValue: "0",
      firstNumber: "",
      secondNumber: "",
      result: "",
    };

    this.numbersFunctionality = this.numbersFunctionality.bind(this);
    this.cleringFunctionality = this.cleringFunctionality.bind(this);
  }

  numbersFunctionality(event) {
    let value = event.target.innerHTML;

    if (this.state.calculatorDisplayValue === "0") {
      this.setState({
        calculatorDisplayValue: value,
      });
    } else {
      this.setState({
        calculatorDisplayValue: this.state.calculatorDisplayValue + value,
      });
    }
  }

  cleringFunctionality() {
    let display = document.querySelector(".calculator-display");
    display.style.fontSize = 35 + "px";
    this.setState({
      calculatorDisplayValue: "0",
    });
  }

  render() {
    let display = document.querySelector(".calculator-display");
    if (this.state.calculatorDisplayValue.length > 12) {
      display.style.fontSize = 18 + "px";
    }
    if (this.state.calculatorDisplayValue.length > 23) {
      display.style.fontSize = 12 + "px";
    }
    if (this.state.calculatorDisplayValue.length > 34) {
      display.style.fontSize = 8 + "px";
    }

    return (
      <div className="calculator-body">
        <input
          readOnly
          className="calculator-display"
          value={this.state.calculatorDisplayValue}
        />
        <CalculatorAddButtons
          cleringFunctionality={this.cleringFunctionality}
        />
        <CalculatorOperators />
        <CalculatorButtons numbersFunctionality={this.numbersFunctionality} />
      </div>
    );
  }
}

export default CalculatorBody;
