import React from "react";
import "./CalculatorButtons.css";
import CalculatorLogs from "../CalculatorLogs/CalculatorLogs";

class CalculatorButtons extends React.Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div className="calculator-buttons">
        <div className="number one" onClick={this.props.numbersFunctionality}>1</div>
        <div className="number two" onClick={this.props.numbersFunctionality}>2</div>
        <div className="number three" onClick={this.props.numbersFunctionality}>3</div>
        <div className="number four" onClick={this.props.numbersFunctionality}>4</div>
        <div className="number five" onClick={this.props.numbersFunctionality}>5</div>
        <div className="number six" onClick={this.props.numbersFunctionality}>6</div>
        <div className="number seven" onClick={this.props.numbersFunctionality}>7</div>
        <div className="number eight" onClick={this.props.numbersFunctionality}>8</div>
        <div className="number nine" onClick={this.props.numbersFunctionality}>9</div>
        <div className="zero" onClick={this.props.numbersFunctionality}>0</div>
        <CalculatorLogs />
      </div>
    );
  }
}

export default CalculatorButtons;
