function calc(number1, operator, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number")
    throw new Error("Invalid input type");

  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/": {
      if (number2 === 0) throw new Error("Division by zero");
      return number1 / number2;
    }
    default:
      throw new Error("Invalid operator");
  }
}

module.exports = calc;
