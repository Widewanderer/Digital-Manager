const inquirer = require("inquirer");
const { viewRoles } = require("./roles");
const { addEmployee, viewEmployees} = require("./employee");

const questions = [
  {
    type: "list",
    name: "TopMenu",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "Add Employee",
      "Update Employee Role",
      "View All Roles",
      "Add Role",
      "View All Department",
      "Add Department",
      "Quit",
    ],
  },
];

// initiation of program
function init() {
  inquirer.prompt(questions).then((answers) => {
    const choice = answers.TopMenu;
    //console.log(answers)
    if (choice === "Quit") {
      handleQuit();
    } else if (choice === "View All Employees") {
      viewEmployees().then(()=> setTimeout(init, 3 * 1000)); // make async, adds a promise, then plus delay in milliseconds 
    } else if (choice === "Add Employee") {
      addEmployee();
    } else if (choice === "Update Employee Role") {
      console.log(`You selected ${choice}`);
      console.log;
    } else if (choice === "View All Roles") {
      viewRoles();
    } else if (choice === "Add Role") {
      console.log(`You selected ${choice}`);
    } else if (choice === "View All Department") {
      viewdepartments();
    } else if (choice === "Add Department") {
      console.log(`You selected ${choice}`);
    }
    //Gives option to return to main or quit after any option is selected
    //setTimeout(ReturnToMain, 2000);
  });
}

function handleQuit() {
  console.log("Goodbye!");
  process.exit(0); // Exit the program with a success status code (0)
}

module.exports = init