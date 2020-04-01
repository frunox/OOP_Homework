// create a class Manager, which extends Employee
// allow access to the code in Employee, including the properties
const Employee = require('./Employee')

// define class Manager to include properties from Employee
class Manager extends Employee {

  // constuctor function to use properties from Employee and add new property 'officeNumber'
  constructor(name, id, email, officeNumber) {


    super(name, id, email);

    this.officeNumber = officeNumber;

  }

  // method to check that an office number is entered, and to return it
  getOfficeNumber() {
    if (!this.officeNumber) {
      console.log('No number, please try again');
    } else {
      return this.officeNumber;
    }
  }

  // method to set this employee's role to Manager
  getRole() {
    return "Manager"
  }

};

// make this code available to other files
module.exports = Manager

// var test2 = new Manager('name', 'id', 'email','office')
// console.log(test2)