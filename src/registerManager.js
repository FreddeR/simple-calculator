import Register from "./register";

export default class RegisterManager {
  constructor() {
    this.registers = [];
  }

  addRegister(register) {
    this.registers.push(register);
  }

  getOrCreateRegister(registerId) {
    const lcRegisterId = registerId.toLowerCase();

    const existingRegister = this.registers.find(
      ({ id }) => lcRegisterId === id
    );

    if (existingRegister) {
      return existingRegister;
    } else {
      const newRegister = new Register(lcRegisterId);
      this.addRegister(newRegister);
      return newRegister;
    }
  }
}
