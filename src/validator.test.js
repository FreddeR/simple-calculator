import { validateArguments } from "./validator";

describe("validateArguments", () => {
  test("should throw if provided single empty argument", () => {
    const expectedError = new Error(
      "Arguments missing! Valid arguments are: [quit, print <register>, <register> <operation> <value>]"
    );

    expect(() => validateArguments([""])).toThrow(expectedError);
  });

  test("should throw if provided with single invalid argument", () => {
    const expectedError = new Error(
      "Invalid argument [test]! Valid arguments are: [quit, print <register>, <register> <operation> <value>]"
    );

    expect(() => validateArguments(["test"])).toThrow(expectedError);
  });

  test("should not throw if provided with single argument 'quit'", () => {
    const expectedError = new Error(
      "Invalid argument [test]! Valid arguments are: [quit, print <register>, <register> <operation> <value>]"
    );

    expect(() => validateArguments(["quit"])).not.toThrow(expectedError);
  });

  test("should throw if provided with two argumets arguments and first is not 'print'", () => {
    const expectedError = new Error(
      "First argument [test] is invalid! Valid arguments are: [quit, print <register>, <register> <operation> <value>]"
    );

    expect(() => validateArguments(["test", "test2"])).toThrow(expectedError);
  });

  test("should not throw if provided with two argumets arguments and first is 'print'", () => {
    const expectedError = new Error(
      "First argument [test] is invalid! Valid arguments are: [quit, print <register>, <register> <operation> <value>]"
    );

    expect(() => validateArguments(["print", "test"])).not.toThrow(
      expectedError
    );
  });

  test("should throw if no arguments", () => {
    const expectedError = new Error(
      "Invalid amount of arguments! Valid arguments are: [quit, print <register>, <register> <operation> <value>]"
    );

    expect(() => validateArguments([])).toThrow(expectedError);
  });

  test("should throw if too many arguments", () => {
    const expectedError = new Error(
      "Invalid amount of arguments! Valid arguments are: [quit, print <register>, <register> <operation> <value>]"
    );

    expect(() => validateArguments(["test", "add", "2", "2"])).toThrow(
      expectedError
    );
  });

  test("should throw if register format is invalid", () => {
    const expectedError = new Error(
      'Invalid register ["test-test"]! The register argument must be an alpha numerical string.'
    );

    expect(() => validateArguments(["test-test", "add", "2"])).toThrow(
      expectedError
    );
  });

  test("should throw if provided with invald operation", () => {
    const expectedError1 = new Error(
      'Invalid operation ["adddivide"]! Valid values for the operation argument are: "add", "subtract" and "multiply".'
    );
    const expectedError2 = new Error(
      'Invalid operation ["divide"]! Valid values for the operation argument are: "add", "subtract" and "multiply".'
    );

    expect(() => validateArguments(["test", "adddivide", "2"])).toThrow(
      expectedError1
    );
    expect(() => validateArguments(["test", "divide", "2"])).toThrow(
      expectedError2
    );
  });

  test("should throw if provided with invald value", () => {
    const expectedError = new Error(
      'Invalid value ["not-alpha_numeric"]! The value argument must be an alpha numerical string.'
    );

    expect(() =>
      validateArguments(["test", "add", "not-alpha_numeric"])
    ).toThrow(expectedError);
  });

  test("should not throw if provided with valid register, operation and value", () => {
    const expectedError = new Error(
      'Invalid value ["not-alpha_numeric"]! The value argument must be an alpha numerical string.'
    );

    expect(() => validateArguments(["test", "add", 2])).not.toThrow(
      expectedError
    );
  });
});
