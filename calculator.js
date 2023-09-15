function calc(...args) {
  if (args.length % 2 === 0) throw new Error("Invalid number of inputs");

  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  const performCalculations = (num1, num2, operator) => {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) throw new Error("Division by zero");
        return num1 / num2;
    }
  };

  const evaluateExpressions = (operands, operators) => {
    while (operators.length > 0) {
      const operator = operators.pop();
      const num2 = operands.pop();
      const num1 = operands.pop();
      operands.push(performCalculations(num1, num2, operator));
    }
  };

  const operands = [];
  const operators = [];
  let itShouldBeNumber = true;

  for (const arg of args) {
    if (typeof arg === "number") {
      operands.push(arg);
      itShouldBeNumber = false;
    } else if (arg in precedence) {
      while (
        operators.length > 0 &&
        precedence[operators[operators.length - 1]] >= precedence[arg]
      ) {
        evaluateExpressions(operands, operators);
      }
      operators.push(arg);
      itShouldBeNumber = true;
    } else if (itShouldBeNumber) {
      throw new Error("Invalid input type");
    } else {
      throw new Error("Invalid operator");
    }
  }

  evaluateExpressions(operands, operators);

  return operands[0];
}

module.exports = calc;
