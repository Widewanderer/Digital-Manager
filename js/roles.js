const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require("../db/connect.js");

// ROLES
function viewRoles() {
  console.log("View roles");
  db.query("SELECT * FROM role", function (err, results) {
    if (err) {
      console.error(err);
    } else {
      console.table(results);
    }
    init();
  });
}

module.exports = { viewRoles };


