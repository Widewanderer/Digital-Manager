const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require("../db/connect.js");

// DEPARTMENTS
function viewdepartments() {
  console.log("View departments");
  db.query("SELECT * FROM department", function (err, results) {
    if (err) {
      console.error(err);
    } else {
      console.table(results);
    }
  });
}

// to add mo
module.exports = { viewdepartments };
