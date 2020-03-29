// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    // apply Employee properties to  Engineer
    super(name, id, email);

    // gitHub username
    this.gitHub = gitHub;
  }

  // function to retrieve gitHub information
  getGitHub() {
    if (!this.getGitHub) {
      console.log("Please enter your gitHub user name");
    } else {
      return this.gitHub;
    }
  }

  // override role
  getRole() {
    return Engineer;
  }
}

var newEng = new Engineer("name", "id", "email", "gitHub");

console.log(newEng);
