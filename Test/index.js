const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require('inquirer');

var managers = [];
var engineers = [];
var interns = [];

const prompts = [
    {
      type: 'input',
      message: 'Enter display name:',
      name: 'name'
    },
    {
      type: 'input',
      message: 'Enter ID number:',
      name: 'id'
    },
    {
      type: 'input',
      message: 'Enter e-mail address:',
      name: 'email'
    },
    {
      type: 'list',
      message: 'Assign employee role:',
      choices: ['Manager', 'Engineer', 'Intern'],
      name: 'role',
    },
    {
      type: 'input',
      message: 'Please enter office number:',
      name: 'officeNumber',
    },
    {
      type: 'input',
      message: 'Please enter gitHUb username:',
      name: 'gitHub',
    //   when: (function(answers){
    //     return answers.role === "Engineer";
    //   })
    },
    {
      type: 'input',
      message: 'Please enter school name:',
      name: 'school',
    //   when: (function(answers){
    //     return answers.role === "Intern";
    //   })
    }
  ];
    
  inquirer
  .prompt(prompts)  
  .then(function({name, id, email, role, officeNumber, gitHub, school}){
      if (role === 'Manager'){
        managers.push([{name}, {id}, {email}, {role}, {officeNumber}])
      }
      else if (role === 'Engineer'){
        engineers.push([{name}, {id}, {email}, {role}, {gitHub}])
      }
      else if (role === 'Intern'){
        interns.push([{name}, {id}, {email}, {role}, {school}])
      }
      
      for (let i = 0; i < managers.length; i++) {
        console.log([managers[i]])
      }
      // }
      // console.log([managers[0]]);
      // console.log([engineers]);
      // console.log([interns]);
    //  console.log({name})  
    // console.log({id})
    // console.log({email})
    // console.log({role})
    // console.log({officeNumber})
    // console.log({gitHub})
    // console.log({school}) 

});