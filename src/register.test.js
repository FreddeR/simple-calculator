import Register from "./register";

describe("Register", () => {
  let register;

  beforeEach(() => {
    register = new Register("test");
  });

  test("should add operation", () => {
    register.addOperation("add", "2");
    expect(register.operations.length).toEqual(1);
    expect(register.operations[0]).toEqual(["add", "2"]);
  });

  test("should evaluate register", () => {
    register.addOperation("add", "2");
    register.addOperation("multiply", "2");
    register.addOperation("subtract", "1");
    expect(register.evaluate(() => {})).toEqual(3);
  });

  test("should manage lazy evaluation register", () => {
    const testRegister2 = new Register("test2");
    register.addOperation("add", "2");
    register.addOperation("multiply", "test2");
    testRegister2.addOperation("add", "4");
    expect(register.evaluate(() => testRegister2)).toEqual(8);
  });
});
