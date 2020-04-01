// Create an Engineer class which extends Employee
// require allows access to code in Employee.js
const Employee = require('./Employee')

// extend Employee  
class Engineer extends Employee {

  // constructor function, uses keys from Employee, adds github
  constructor(name, id, email, github) {

    // capture these properties from Employee
    super(name, id, email);
    // add new property for engineers
    this.github = github;
  };

  // method to check for that a github user name is entered and to return it to index.js
  getGithub() {
    if (!this.github) {
      // console.log('No input, try again');
    } else {
      // console.log(this.github)
      return this.github
    }
  }

  // define this employee's role as Engineer
  getRole() {
    return "Engineer"
  }
};

// allow this code to be accessed by other files
module.exports = Engineer

