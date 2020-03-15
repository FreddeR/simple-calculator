import RegisterManager from "./registerManager";

export default class Calculator {
  constructor() {
    this.registerManager = new RegisterManager();
  }

  evaluateRegister(registerId) {
    const activeRegister = this.registerManager.getOrCreateRegister(registerId);
    return activeRegister.evaluate(id =>
      this.registerManager.getOrCreateRegister(id)
    );
  }

  addOperation([registerId, operation, value]) {
    const activeRegister = this.registerManager.getOrCreateRegister(registerId);
    activeRegister.addOperation(operation, value);
  }
}
