-- if doesnt exist 
DROP DATABASE IF EXISTS digital_manager;
CREATE DATABASE digital_manager;    

USE digital_manager;
CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT, 
  FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name_first VARCHAR(30) NOT NULL,
  name_last VARCHAR(30) NOT NULL,
  role_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL,
  manager_id INT NULL,
  FOREIGN KEY (manager_id) REFERENCES employee(id)ON DELETE SET NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);
--   querry selector for role id to be displayed 

-- All empolyees have managers have employees but employee is also manager (no employee) Employees key linked to manager is null 

-- have exit program option/ selectable rather than using a command C 

-- 