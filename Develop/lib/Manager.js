// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // apply Employee properties to  Engineer
    super(name, id, email);

    // gitHub username
    this.officeNumber = officeNumber;
  }

  // function to retrieve gitHub information
  getOfficeNumber() {
    if (!this.officeNumber) {
      console.log("Please enter your office number");
    } else {
      return this.officeNumber;
    }
  }

  // override role
  getRole() {
    return Manager;
  }
}

var manager = new Manager("name", "id", "email", "officeNumber");

console.log(manager);
