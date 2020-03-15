export default class Register {
  constructor(id) {
    this.id = id;
    this.operations = [];
  }

  addOperation(operation, value) {
    this.operations.push([operation, value]);
  }

  evaluate(getRegister) {
    return this.operations.reduce((currentValue, [operation, value]) => {
      let operationValue = value;
      const valueIsNotNumber = isNaN(Number(value));

      if (valueIsNotNumber) {
        const register = getRegister(value);
        operationValue = register.evaluate(getRegister);
      }

      switch (operation.toLowerCase()) {
        case "add":
          return (currentValue += Number(operationValue));
        case "subtract":
          return (currentValue -= Number(operationValue));
        case "multiply":
          return (currentValue *= Number(operationValue));
        default:
          return currentValue;
      }
    }, 0);
  }
}
