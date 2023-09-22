const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require("../db/connect.js")

// EMPLPOYEES
function viewEmployees() {
  console.log("View employees");
  db.query("SELECT * FROM employee", function (err, results) {
    if (err) {
      console.error(err);
    } else {
      console.table(results);
    }
    init();
  });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "Enter the first name of the employee:",
      },
      {
        type: "input",
        name: "lastName",
        message: "Enter the last name of the employee:",
      },
      {
        type: "input",
        name: "roleId",
        message: "Enter the role ID of the employee:",
      },
      {
        type: "list",
        name: "SelectManager",
        message: "Select employee's manager",
        choices: ["Belisarius Cawl", "Haldron-44 Stroika", null],
      }
      // EASY ROUTE- list Role IDs (manager should know)
      // HARD - Nested prompts list the role names (connected to role id) 
      // view roles 
      // get data 
      // name and value (id)
    ])
    .then((answers) => {
      const { firstName, lastName, roleId, managerId } = answers;

      // Create an INSERT query to add the new employee to the database
      const sql =
        "INSERT INTO employee (name_first, name_last, role_id, manager_id) VALUES (?, ?, ?, ?)";
      const values = [firstName, lastName, roleId, managerId];

      db.query(sql, values, function (err, results) {
        if (err) {
          console.error(err);
        } else {
          console.log(`Employee ${firstName} ${lastName} added successfully.`);
          // Call the main menu function to return to the main menu
          init();
        }
      });
    });
}

module.exports = { viewEmployees, addEmployee };
