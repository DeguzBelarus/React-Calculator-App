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
      let result = (
        this.state.firstNumber + this.state.secondNumber
      ).toString();

      if (
        (result.includes(".") && result.includes("00000000000000")) ||
        (result.includes(".") && result.includes("99999999999999"))
      ) {
        result = Number(result);
        this.setState({
          result: result.toFixed(1),
          calculatorDisplayValue: Number(result).toFixed(1),
        });
      } else if (
        (result.includes(".") && result.includes("00000000000")) ||
        (result.includes(".") && result.includes("99999999999"))
      ) {
        result = Number(result);
        this.setState({
          result: result.toFixed(2),
          calculatorDisplayValue: Number(result).toFixed(2),
        });
      } else
        this.setState({
          result: this.state.firstNumber + this.state.secondNumber,
          calculatorDisplayValue:
            this.state.firstNumber + this.state.secondNumber,
        });

      this.reset();
    }

    if (this.state.secondNumber != "" && this.state.operation == "-") {
      let result = (
        this.state.firstNumber - this.state.secondNumber
      ).toString();

      if (
        (result.includes(".") && result.includes("00000000000000")) ||
        (result.includes(".") && result.includes("99999999999999"))
      ) {
        result = Number(result);
        this.setState({
          result: result.toFixed(1),
          calculatorDisplayValue: Number(result).toFixed(1),
        });
      } else if (
        (result.includes(".") && result.includes("00000000000")) ||
        (result.includes(".") && result.includes("99999999999"))
      ) {
        result = Number(result);
        this.setState({
          result: result.toFixed(2),
          calculatorDisplayValue: Number(result).toFixed(2),
        });
      } else
        this.setState({
          result: this.state.firstNumber - this.state.secondNumber,
          calculatorDisplayValue:
            this.state.firstNumber - this.state.secondNumber,
        });

      this.reset();
    }

    if (this.state.secondNumber != "" && this.state.operation == "*") {
      let result = (
        this.state.firstNumber * this.state.secondNumber
      ).toString();

      if (
        (result.includes(".") && result.includes("00000000000000")) ||
        (result.includes(".") && result.includes("99999999999999"))
      ) {
        result = Number(result);
        this.setState({
          result: result.toFixed(1),
          calculatorDisplayValue: Number(result).toFixed(1),
        });
      } else if (
        (result.includes(".") && result.includes("00000000000")) ||
        (result.includes(".") && result.includes("99999999999"))
      ) {
        result = Number(result);
        this.setState({
          result: result.toFixed(2),
          calculatorDisplayValue: Number(result).toFixed(2),
        });
      } else
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
      let result = (
        this.state.firstNumber / this.state.secondNumber
      ).toString();

      if (
        (result.includes(".") && result.includes("00000000000000")) ||
        (result.includes(".") && result.includes("99999999999999"))
      ) {
        result = Number(result);
        this.setState({
          result: result.toFixed(1),
          calculatorDisplayValue: Number(result).toFixed(1),
        });
      } else if (
        (result.includes(".") && result.includes("00000000000")) ||
        (result.includes(".") && result.includes("99999999999"))
      ) {
        result = Number(result);
        this.setState({
          result: result.toFixed(2),
          calculatorDisplayValue: Number(result).toFixed(2),
        });
      } else
        this.setState({
          result: this.state.firstNumber / this.state.secondNumber,
          calculatorDisplayValue:
            this.state.firstNumber / this.state.secondNumber,
        });

      this.reset();
    }

    let display = document.querySelector(".calculator-display");
    if (display.value.length > 12) {
      display.style.fontSize = 18 + "px";
    }
    if (display.value.length > 23) {
      display.style.fontSize = 12 + "px";
    }
    if (display.value.length > 34) {
      display.style.fontSize = 8 + "px";
    }
  }

  numbersFunctionality(event) {
    let value = event.target.innerHTML;
    let element = event.target;

    const classAdd = () => {
      element.classList.add("click");

      const classRemove = () => {
        element.classList.remove("click");
      };

      setTimeout(classRemove, 115);
    };
    classAdd();

    if (this.state.calculatorDisplayValue.includes(".") && value == ".") {
      return;
    }

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
    if (this.state.result != "") {
      this.setState({
        logSecondNumber: "",
      });
    }

    let operationValue = event.target.innerHTML;
    if (this.state.firstNumber == "") {
      this.setState({
        calculatorDisplayValue: "0",
        firstNumber: Number(this.state.calculatorDisplayValue),
        logFirstNumber: Number(this.state.calculatorDisplayValue),
        operation: operationValue,
        logOperation: operationValue,
      });
    } else if (this.state.firstNumber != "") {
      this.setState({
        operation: operationValue,
        logOperation: operationValue,
      });
    }
  }

  resultFunctionality() {
    if (this.state.firstNumber == "") return;
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
