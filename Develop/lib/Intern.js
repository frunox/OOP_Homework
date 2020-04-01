// create a class Intern, which extends class Employee
// make code in Employee.js available here
const Employee = require('./Employee')

// define Intern using properties from Employee
class Intern extends Employee {

  // constructor function to apply properties from Employee, and add new property 'school'
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;

  }

  // function to check for a school name to be input, and return it
  getSchool() {
    if (!this.school) {
      console.log('Please provide the name of your school');
    } else {
      return this.school;
    }
  };

  // method to set the employee's role to Intern
  getRole() {
    return "Intern"
  }

}

// make this code and methods available to other files
module.exports = Intern

// var intern = new Intern('name', 'id', 'email', 'school');

// console.log(intern)