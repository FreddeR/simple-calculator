import Register from "./register";
import RegisterManager from "./registerManager";

describe("RegisterManager", () => {
  let registerManager;

  beforeEach(() => {
    registerManager = new RegisterManager();
  });

  test("should add register", () => {
    const testRegister = new Register("test");
    registerManager.addRegister(testRegister);

    expect(registerManager.registers.length).toEqual(1);
    expect(registerManager.registers[0].id).toEqual("test");
  });

  test("should get existing register", () => {
    const testRegister = new Register("test");
    registerManager.addRegister(testRegister);

    expect(registerManager.getOrCreateRegister("test")).toEqual(testRegister);
  });

  test("should create register if not existing", () => {
    const testRegister = registerManager.getOrCreateRegister("test2");

    expect(testRegister).toBeInstanceOf(Register);
    expect(testRegister.id).toEqual("test2");
  });
});
