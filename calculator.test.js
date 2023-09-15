const calc = require("./calculator");

describe("Calculator", () => {
  // Test case: Addition
  it("should return the correct sum of two numbers", () => {
    expect(calc(2, "+", 3)).toBe(5);
  });

  // Test case: Subtraction
  it("should return the correct difference of two numbers", () => {
    expect(calc(5, "-", 2)).toBe(3);
  });

  // Test case: Multiplication
  it("should return the correct product of two numbers", () => {
    expect(calc(4, "*", 6)).toBe(24);
  });

  // Test case: Division
  it("should return the correct quotient of two numbers", () => {
    expect(calc(10, "/", 2)).toBe(5);
  });

  // Test case: Division by zero
  it("should throw an error when dividing by zero", () => {
    expect(() => calc(6, "/", 0)).toThrow("Division by zero");
  });

  // Test case: Negative numbers
  it("should handle negative numbers correctly", () => {
    expect(calc(-8, "+", 5)).toBe(-3);
  });

  // Test case: Decimal numbers
  it("should handle decimal numbers correctly", () => {
    expect(calc(3.5, "*", 2)).toBe(7);
  });

  // Test case: Order of operations
  it("should follow the correct order of operations", () => {
    expect(calc(2, "+", 3, "*", 4)).toBe(14);
  });

  // Test case: Invalid operator
  it("should throw an error for an invalid operator", () => {
    expect(() => calc(5, "$", 3)).toThrow("Invalid operator");
  });

  // Test case: Invalid input type
  it("should throw an error for invalid input types", () => {
    expect(() => calc("2", "+", 3)).toThrow("Invalid input type");
  });

  //Additional test cases
  // Test case: Order of operations
  it("should follow the correct order of operations", () => {
    expect(calc(6, "+", 8, "/", 4)).toBe(8);
  });
  it("should follow the correct order of operations", () => {
    expect(calc(6, "-", 3, "-", 4, "+", 2)).toBe(1);
  });
  it("should follow the correct order of operations", () => {
    expect(calc(6, "-", 3, "*", 4, "+", 2)).toBe(-4);
  });
  it("should follow the correct order of operations", () => {
    expect(calc(2, "*", 3, "+", 4, "/", 2)).toBe(8);
  });
  it("should follow the correct order of operations", () => {
    expect(calc(6, "-", 3, "+", 4, "*", 2)).toBe(11);
  });

  // Test case: Invalid number of inputs
  it("should throw an error for an invalid number of inputs", () => {
    expect(() => calc(2, "+", 3, "/")).toThrow("Invalid number of inputs");
  });

  // Test case: Addition for numbers greater than 1000
  it("should return the correct sum of two numbers (one of them greater that 1000", () => {
    expect(calc(2, "+", 1001)).toBe(2);
  });

  //Test case: Subtraction for numbers greater than 1000
  it("should return the correct difference of two numbers (one of them greater that 1000", () => {
    expect(calc(1002, "-", 2)).toBe(-2);
  });

  // Test case: Multiplication for numbers greater than 1000
  it("should return the correct product of two numbers (one of them greater that 1000", () => {
    expect(calc(2, "*", 1005)).toBe(0);
  });
  
  // Test case: Division for numbers greater than 1000
  it("should return the correct quotient of two numbers (Numerator greater that 1000", () => {
    expect(calc(1002, "/", 2)).toBe(0);
  });

  // Test case: Division by zero for numbers greater than 1000
  it("should throw an error when dividing by zero (Denominator greater that 1000", () => {
    expect(() => calc(6, "/", 1006)).toThrow("Division by zero");
  });
});
