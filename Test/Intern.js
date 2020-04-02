const Employee = require('./Employee')

class Intern extends Employee {

    constructor(name, id, email, school){
        super(name, id, email);

        this.school = school;

    }

    getSchool(){
      if (!this.school){
        console.log('Please provide the name of your school');
        } else {
          return this.school;
        }
    };
};

// var intern = new Intern('name', 'id', 'email', 'school');

// console.log(intern)