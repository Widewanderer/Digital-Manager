const inquirer = require("inquirer");
const mysql = require("mysql2");
const { viewRoles } = require("./js/roles");
const { addEmployee, viewEmployees} = require("./js/employee");
const db = require("./db/connect.js");
const init = require("./js/mainMenu.js")


// function updateEmployeeRole(){
    
//     update employee set role_id =
// }


init();

