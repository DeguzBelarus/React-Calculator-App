import React, { useState } from "react";
import "./CalculatorLogs.scss";

function CalculatorLogs(props) {
  let equally = "";

  if (props.result != "") {
    equally = " = ";
  }

  return (
    <div className="calculator-logs">
      <p className="logs">Logs:</p>
      <span className="firstnumber">
        {props.logFirstNumber +
          " " +
          props.logOperation +
          " " +
          props.logSecondNumber +
          " " +
          equally +
          props.result}
      </span>
    </div>
  );
}

export default CalculatorLogs;
