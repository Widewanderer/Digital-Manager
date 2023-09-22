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


module.exports = db