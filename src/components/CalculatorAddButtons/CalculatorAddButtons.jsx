import React from "react";
import "./CalculatorAddButtons.css";

class CalculatorAddButtons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="calculator-addbuttons">
        <div className="clear" onClick={this.props.cleringFunctionality}>
          C
        </div>
        <div className="result">=</div>
      </div>
    );
  }
}

export default CalculatorAddButtons;
