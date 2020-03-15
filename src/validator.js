export const validateArguments = (args = []) => {
  const argsLength = args.length;
  const [arg1] = args;

  switch (argsLength) {
    case 1:
      if (arg1 == "") {
        throw new Error(
          "Arguments missing! Valid arguments are: [quit, print <register>, <register> <operation> <value>]"
        );
      } else if (arg1.toLowerCase() !== "quit") {
        throw new Error(
          `Invalid argument [${arg1}]! Valid arguments are: [quit, print <register>, <register> <operation> <value>]`
        );
      }
      break;
    case 2:
      if (arg1.toLowerCase() !== "print") {
        throw new Error(
          `First argument [${arg1}] is invalid! Valid arguments are: [quit, print <register>, <register> <operation> <value>]`
        );
      }
      break;
    case 3:
      return validateCalculatorOperation(args);
    default:
      throw new Error(
        "Invalid amount of arguments! Valid arguments are: [quit, print <register>, <register> <operation> <value>]"
      );
  }
};

const validateCalculatorOperation = args => {
  const alphaNumericRegex = /^[a-zA-Z0-9]+$/;
  const operationRegex = /^(add|subtract|multiply)$/i;
  const [register, operation, value] = args;
  const hasValidRegister = register.match(alphaNumericRegex);
  const hasValidOperation = operation.match(operationRegex);
  const hasValidValue = value.match(alphaNumericRegex);

  if (!hasValidRegister) {
    throw new Error(
      `Invalid register ["${register}"]! The register argument must be an alpha numerical string.`
    );
  }

  if (!hasValidOperation) {
    throw new Error(
      `Invalid operation ["${operation}"]! Valid values for the operation argument are: "add", "subtract" and "multiply".`
    );
  }

  if (!hasValidValue) {
    throw new Error(
      `Invalid value ["${value}"]! The value argument must be an alpha numerical string.`
    );
  }
};
