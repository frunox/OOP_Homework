// create a class Employee, which will be the super class for all employee types
class Employee {

  //  constructor function to define properties common to all employees
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  };

  // function to check for a name, and return it's value for the current employee
  getName() {
    //If no name is entered, it will alert error, else return the name.
    if (!this.name) {
      console.log('No name, please try again');
    } else {
      return this.name
    }
  };

  // function to check for an id, and return it's value for the current employee
  getId() {
    if (!this.id) {
      console.log('No Id, please try again');
    } else {
      return this.id
    }
  };

  // method to check for an email address, and return it's value for the current employee
  getEmail() {
    if (!this.email) {
      console.log('No Email, please try again');
    } else {
      return this.email
    }
  };

  // return the employee's role
  getRole() {
    return "Employee"
  };
};

// all code here to be available in other files
module.exports = Employee
