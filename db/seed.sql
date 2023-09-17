-- Departments
INSERT INTO department (id, name)
VALUES (1, "Centurio Ordinatus"),
       (2, "Collegia Titanica"),
       (3, "Auxilia Myrmidon"),
       (4, "Legiones Skitarii"),
       (5, "Legio Cybernetica"),
       (6, "Ordo Reductor"),
       (7, "Imperial Knights");

-- Roles
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Fabricator General", 250000, 5),
       (2, "Enginseer", 30000, 5),
       (3, "Archmagos", 300000, 1),
       (4, "Magos", 150000, 5),
       (5, "Skitari", 40000, 4),
       (6, "Skitari Alpha", 60000, 4),
       (7, "Sacristan", 50000, 7);

-- Employees
INSERT INTO employee (id, name_first, name_last, role_id, manager, department_id)
VALUES (1, "Belisarius", "Cawl", 3, null, 5),
       (2, "Vianco", "Locard", 4, 1, 5),
       (3, "Zagreus", "Kane", 1, 1, 5),
       (4, "Haldron-44", "Stroika", 6, null, 4),
       (5, "Ivalinius", "Advor", 5, 4, 4),
       (6, "Belgrog", "Nexor", 5, 4, 4),
       (7, "Hyos", "Sess", 7, null, 7);




