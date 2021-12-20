import React from "react";
import "./CalculatorBody.scss";
import CalculatorButtons from "../CalculatorButtons/CalculatorButtons";
import CalculatorOperators from "../CalculatorOperators/CalculatorOperators";
import CalculatorAddButtons from "../CalculatorAddButtons/CalculatorAddButtons";
class CalculatorBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calculatorDisplayValue: "0",
      firstNumber: "",
      logFirstNumber: "",
      operation: "",
      logOperation: "",
      secondNumber: "",
      logSecondNumber: "",
      result: "",
    };

    this.numbersFunctionality = this.numbersFunctionality.bind(this);
    this.cleringFunctionality = this.cleringFunctionality.bind(this);
    this.operatorsFunctionality = this.operatorsFunctionality.bind(this);
    this.resultFunctionality = this.resultFunctionality.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({
      firstNumber: "",
      operation: "",
      secondNumber: "",
    });
  }

  componentDidUpdate() {
    if (this.state.secondNumber != "" && this.state.operation == "+") {
      this.setState({
        result: this.state.firstNumber + this.state.secondNumber,
        calculatorDisplayValue:
          this.state.firstNumber + this.state.secondNumber,
      });

      this.reset();
    }

    if (this.state.secondNumber != "" && this.state.operation == "-") {
      this.setState({
        result: this.state.firstNumber - this.state.secondNumber,
        calculatorDisplayValue:
          this.state.firstNumber - this.state.secondNumber,
      });

      this.reset();
    }

    if (this.state.secondNumber != "" && this.state.operation == "*") {
      this.setState({
        result: this.state.firstNumber * this.state.secondNumber,
        calculatorDisplayValue:
          this.state.firstNumber * this.state.secondNumber,
      });

      this.reset();
    }

    if (this.state.secondNumber === 0 && this.state.operation == "/") {
      this.setState({
        result: "you can't divide by zero!",
        calculatorDisplayValue: "you can't divide by zero!",
      });

      this.reset();
    }

    if (
      this.state.secondNumber != "" &&
      this.state.operation == "/" &&
      this.state.secondNumber != 0
    ) {
      this.setState({
        result: this.state.firstNumber / this.state.secondNumber,
        calculatorDisplayValue:
          this.state.firstNumber / this.state.secondNumber,
      });

      this.reset();
    }
  }

  numbersFunctionality(event) {
    let value = event.target.innerHTML;

    if (this.state.calculatorDisplayValue === "0") {
      if (value == ".") {
        this.setState({
          calculatorDisplayValue: this.state.calculatorDisplayValue + value,
        });
      } else {
        this.setState({
          calculatorDisplayValue: value,
        });
      }
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
      firstNumber: "",
      logFirstNumber: "",
      operation: "",
      logOperation: "",
      secondNumber: "",
      logSecondNumber: "",
      result: "",
    });
  }

  operatorsFunctionality(event) {
    let operationValue = event.target.innerHTML;

    this.setState({
      calculatorDisplayValue: "0",
      firstNumber: Number(this.state.calculatorDisplayValue),
      logFirstNumber: Number(this.state.calculatorDisplayValue),
      operation: operationValue,
      logOperation: operationValue,
    });
  }

  resultFunctionality() {
    this.setState({
      calculatorDisplayValue: "0",
      secondNumber: Number(this.state.calculatorDisplayValue),
      logSecondNumber: Number(this.state.calculatorDisplayValue),
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
          resultFunctionality={this.resultFunctionality}
        />
        <CalculatorOperators
          operatorsFunctionality={this.operatorsFunctionality}
        />
        <CalculatorButtons
          numbersFunctionality={this.numbersFunctionality}
          logFirstNumber={this.state.logFirstNumber}
          logOperation={this.state.logOperation}
          logSecondNumber={this.state.logSecondNumber}
          result={this.state.result}
        />
      </div>
    );
  }
}

export default CalculatorBody;
