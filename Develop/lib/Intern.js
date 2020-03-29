// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    // apply Employee properties to  Engineer
    super(name, id, email);
    // gitHub username
    this.school = school;
  }

  // function to retrieve gitHub information
  getSchool() {
    if (!this.school) {
      console.log("Please enter your school name");
    } else {
      return this.school;
    }
  }

  // override role
  getRole() {
    return School;
  }
}
var intern = new Intern("name", "id", "email", "school");
console.log(intern);
