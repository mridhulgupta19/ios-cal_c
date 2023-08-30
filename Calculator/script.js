document.addEventListener("DOMContentLoaded", function () {
    const resultElement = document.getElementById("result");
    const buttons = document.querySelectorAll(".buttons button");
    let currentInput = "";
    let currentOperator = "";
    let firstOperand = null;
  
    buttons.forEach(button => {
      button.addEventListener("click", function () {
        const buttonText = button.textContent;
  
        if (/[0-9.]/.test(buttonText)) {
          currentInput += buttonText;
          updateDisplay(currentInput);
        } else if (buttonText === "C") {
          clear();
        } else if (buttonText === "=") {
          calculate();
        } else {
          handleOperator(buttonText);
        }
      });
    });
  
    function updateDisplay(value) {
      resultElement.textContent = value;
    }
  
    function clear() {
      currentInput = "";
      currentOperator = "";
      firstOperand = null;
      updateDisplay("0");
    }
  
    function handleOperator(operator) {
      if (currentOperator !== "") {
        calculate();
      }
      firstOperand = parseFloat(currentInput);
      currentInput = "";
      currentOperator = operator;
    }
  
    function calculate() {
      if (currentOperator === "") return;
  
      const secondOperand = parseFloat(currentInput);
      let result = 0;
  
      switch (currentOperator) {
        case "+":
          result = firstOperand + secondOperand;
          break;
        case "-":
          result = firstOperand - secondOperand;
          break;
        case "×":
          result = firstOperand * secondOperand;
          break;
        case "÷":
          result = firstOperand / secondOperand;
          break;
      }
  
      currentInput = result.toString();
      currentOperator = "";
      updateDisplay(currentInput);
    }
  });
  