import React from "react";
import "./CalculatorAddButtons.scss";

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
        <div className="result" onClick={this.props.resultFunctionality}>
          =
        </div>
      </div>
    );
  }
}

export default CalculatorAddButtons;
