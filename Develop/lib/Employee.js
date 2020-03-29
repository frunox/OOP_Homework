// TODO: Write code to define and export the Employee class
// define class employee
class Employee {
  // constuctor function to pass parameters
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // check for valid name and request name
  getName() {
    // check if name entered is valid
    if (!this.name) {
      console.log("Please provide valid name");
    } else {
      return this.name;
    }
  }

  // check for valid ID and request ID
  getID() {
    if (this.id) {
      console.log("Please provide and ID number");
    } else {
      return this.id;
    }
  }

  getEmail() {
    if (this.email) {
      console.log("Please provide and ID number");
    } else {
      return this.email;
    }
  }

  // assign role as employee
  getRole() {
    return Employee;
  }
}

var emp = new Employee("name", "id", "email");

console.log(emp);

module.exports = Employee;
