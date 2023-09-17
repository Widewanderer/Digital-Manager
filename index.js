const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    password: "",
    database: "digital_manager",
  },
  console.log(`Connected to the courses_db database.`)
);

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

function viewEmployees() {
  console.log("View employees");
  db.query("SELECT * FROM employee", function (err, results) {
    if (err) {
      console.error(err);
    } else {
      console.table(results);
    }
  });
}

// Function to display the main menu and handle "Quit" and "Return to Main Menu" options
function ReturnToMain() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "MainMenu",
        message: "What would you like to do?",
        choices: ["Return to Main Menu", "Quit"],
      },
    ])
    .then((answers) => {
      const choice = answers.MainMenu;
      if (choice === "Quit") {
        handleQuit();
      } else if (choice === "Return to Main Menu") {
        init(); // Return to the main menu
      }
    });
}

// initiation of program
function init() {
  inquirer.prompt(questions).then((answers) => {
    const choice = answers.TopMenu;
    //console.log(answers)
    if (choice === "Quit") {
      handleQuit();
    } else if (choice === "View All Employees") {
      viewEmployees()
      ReturnToMain();
    } else if (choice === "Add Employee") {
      console.log(`You selected ${choice}`);
    } else if (choice === "Update Employee Role") {
      console.log(`You selected ${choice}`);
    } else if (choice === "View All Roles") {
      console.log(`You selected ${choice}`);
    } else if (choice === "Add Role") {
      console.log(`You selected ${choice}`);
    } else if (choice === "View All Department") {
      console.log(`You selected ${choice}`);
    } else choice === "Add Department";
    {
      console.log(`You selected ${choice}`);
    }
  });
}

init();
