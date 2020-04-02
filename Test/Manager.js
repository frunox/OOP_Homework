const Employee = require('./Employee')

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee {

    constructor(name, id, email, officeNumber){


        super(name, id, email);

        this.officeNumber = officeNumber;

    }

    getOfficeNumber(){
      if (!this.officeNumber){
          console.log('No number, please try again');
          } else {
            return this.officeNumber;
          }      
    }  
};

// var test2 = new Manager('name', 'id', 'email','office')
// console.log(test2)