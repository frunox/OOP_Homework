// pull in needed reference files using require
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// require node packages 'path' and 'fs', and npm package 'inquirer'
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
//  constant creating a folder /develop/output as the location for team.html
const OUTPUT_DIR = path.resolve(__dirname, "output");
//  constant defining the path as /develop/output, and to define the name of
//  of the file to be created at team.html
const outputPath = path.join(OUTPUT_DIR, "team.html");

// define an array to receive the information for each employee entered below
let html = [];

//  set render to use the code in htmlRenderer.js, which creates the html elements to be 
//  included in team.html
const render = require("./lib/htmlRenderer");

// function to prompt the user to enter employee information and push it to array html[]
function start() {
  // define the questions to be asked of the user to enter employee data
  const questions = [

    {
      type: "input",
      message: "Please enter the employee name",
      name: "name"
    },

    {
      type: "input",
      message: "Please enter the employee ID number",
      name: "id"
    },

    {
      type: "input",
      message: "Please enter the email",
      name: "email",
      validate: answer => {
        const pass = answer.match(
          /\S+@\S+\.\S+/
        );
        if (pass) {
          return true;
        }
        return "Please enter a valid email address";
      }
    },

    {
      type: "list",
      message: "Please select the role",
      choices: ["Manager", "Engineer", "Intern"],
      name: "role"
    },

    {
      type: "input",
      message: "Please enter the office number",
      name: "officeNumber",
      when: function (answers) {
        return answers.role === "Manager";
      }
    },

    {
      type: "input",
      message: "Please enter the github username",
      name: "github",
      when: function (answers) {
        return answers.role === "Engineer";
      }
    },

    {
      type: "input",
      message: "Please enter the school name",
      name: "school",
      when: function (answers) {
        return answers.role === "Intern";
      }
    }
  ]


  // use inquirer to gather information about the development team members by prompting the questions variable
  inquirer
    .prompt(questions)
    // use .then promise and feed in the parameters of name, id, email, role, officeNumber, github, and school
    // as appropriate for each employee and their role
    .then(function (answers) {
      // the switch statement collects the appropriate information for each type of employee and
      // pushes that to the array html[]
      switch (answers.role) {
        case "Manager":
          const manager = new Manager(answers.name, parseInt(answers.id), answers.email, answers.officeNumber);
          html.push(manager);
          //
          break
        case "Engineer":
          const engineer = new Engineer(answers.name, parseInt(answers.id), answers.email, answers.github);
          html.push(engineer);
          break
        case "Intern":
          const intern = new Intern(answers.name, parseInt(answers.id), answers.email, answers.school);
          html.push(intern);
          break
      }

      // call a function to prompt if the user wants to add another employee
      addAnother();
    })
}


// define a function addEmployee() to ask to add another
function addAnother() {
  inquirer
    .prompt([
      {
        type: 'confirm',
        message: 'Do you want to add another Employee?',
        name: 'another',
      }
    ])
    .then(function ({ another }) {
      // if the user wants to add another employee, run start()
      if (another) {
        start();
      } else {
        // console.log(html)
        // if the user is done adding employees, call createHTML(), passing in array html[]
        // with all the employee information
        createHTML(html);
      }
    })
}

//  function to create the folder for the 'team.html' file (if needed), and to create (or overwrite) the file
function createHTML(html) {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFile(outputPath, render(html), function (err) {
    if (err) throw err;
    console.log('File created successfully')
  })
}

// call this function to start the app
start();

