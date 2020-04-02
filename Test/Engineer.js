const Employee = require('./Employee')

class Engineer extends Employee {

  constructor(name, id, email, gitHub) {

      super(name, id, email);

      this.gitHub = gitHub;   
  };
  
  getGitHub(){
    if (!this.gitHub){
      console.log('No input, try again');
    } else {
      return this.gitHub
    }  
  }
};
  
// var engineer = new Engineer('name', 'id','email','github username');

// console.log(engineer)