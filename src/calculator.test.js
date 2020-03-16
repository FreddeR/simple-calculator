import Calculator from "./calculator";

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("should add register operations", () => {
    calculator.addOperation(["test", "add", 2]);

    const calculatorRegisters = calculator.registerManager.registers;
    expect(calculatorRegisters.length).toEqual(1);
    expect(calculatorRegisters[0].id).toEqual("test");
  });

  test("should evaluate register", () => {
    calculator.addOperation(["test", "add", 2]);
    calculator.addOperation(["test", "multiply", 3]);
    calculator.addOperation(["test2", "add", 4]);
    calculator.addOperation(["test2", "add", "test"]);

    const testValue = calculator.evaluateRegister("test");
    const test2Value = calculator.evaluateRegister("test2");
    expect(testValue).toEqual(6);
    expect(test2Value).toEqual(10);
  });
});
