const inquirer = require("inquirer");

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

function handleQuit() {
  console.log("Goodbye!");
  process.exit(0); // Exit the program with a success status code (0)
}

// initiation of program
function init() {
  inquirer.prompt(questions).then((answers) => {
    const choice = answers.TopMenu;
    //console.log(answers)
    if (choice === "Quit") {
      handleQuit();
    } else {
      console.log(`You selected ${choice}`);
    }
  });
}

init();
