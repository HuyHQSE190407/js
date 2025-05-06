//create class for wallet with encapsulation
class Wallet {
  #pin;
  #balance;
  #isPinEntered = false;
  //private properties for wallet
  constructor(bankName, pin) {
    this.bankName = bankName;
    this.#pin = pin;
    this.#balance = 0;
  }
  deposit(amount) {
    if(!this.#isPinEntered) {
        console.log("Please enter pin first");
        return;
    }
    this.#balance += amount;
    console.log(`Deposited: ${amount}`);
  }

  //private method to check pin
  #validatePin(pin) {
    return this.#pin === pin;
  }

  enterPin(pin) {
    //public method to enter pin
    if (this.#validatePin(pin) === true) {
      this.#isPinEntered = true;
      console.log("Pin entered successfully");
    } else {
      console.log("Invalid pin");
    }
  }

  withdraw(amount) {
    if(!this.#isPinEntered) {
      console.log("Please enter pin first");
      return;
    }
    if (amount > this.balance) {
      console.log("Insufficient balance");
    } else {
      this.#balance -= amount;
      console.log(`Withdrawn: ${amount}`);
    }
  }
  //getter method for balance
  get balance() {
    if(!this.#isPinEntered) {
      console.log("Please enter pin first");
      return;
    }
    return this.#balance;
  }
}
const wallet1 = new Wallet("Bank of America", 190516);
wallet1.enterPin(190516);
wallet1.deposit(1000);
wallet1.withdraw(500);
console.log(wallet1.balance); // 500