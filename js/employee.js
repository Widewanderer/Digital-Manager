const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require("../db/connect.js");
//const init = require("./mainMenu.js");

// EMPLPOYEES
async function viewEmployees() {
  console.log("View employees");
  db.query("SELECT * FROM employee", function (err, results) {
    if (err) {
      console.error(err);
    } else {
      console.table(results);
    }
    return;
  });
}

function addEmployee() {
  // use this code for all select options (modified) Ex employees' role
  db.promise()
    .query("SELECT id, name_first, name_last FROM employee")
    .then((data) => {
      const rows = data[0];
      // loop over choices to present options
      const managerChoices = rows.map((employee) => ({
        name: employee.name_first + " " + employee.name_last,
        value: employee.id,
      }));

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
            message: "Select the employee's manager",
            choices: managerChoices,
            // array [{name: name_first + name_last, value: id}]  // loop over arry and format results to display in this manner.
          },
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
              console.log(
                `Employee ${firstName} ${lastName} added successfully.`
              );
              // Call the main menu function to return to the main menu
              init();
            }
          });
        });
    });
}

module.exports = { viewEmployees, addEmployee };
