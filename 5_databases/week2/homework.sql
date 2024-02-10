USE databases_HYF;

--Part 1: Working with tasks

SELECT *
FROM task;

--1.1. Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id

INSERT INTO task (id, title, description, created, updated, due_date, status_id, user_id)
VALUES (36, 'Search for a job', 'Update your CV, check different websites.', '2017-10-25 06:54:16', '2017-10-15 13:05:09', NULL, 1, 5);

--1.2.Change the title of a task

UPDATE task
SET title = 'Ride a bike around Aarhus'
WHERE id = 24;

--1.3. Change a task due date

UPDATE task
SET due_date = '2018-12-24 20:00:00'
WHERE id = 2;

--1.4. Change a task status/Mark a task as complete

SELECT *
FROM status;

UPDATE task
SET status_id = 3
WHERE id = 3;

--1.5. Delete a task

DELETE
FROM task
WHERE id = 11;

--Part 2: School database - create a new database containing the following tables:

CREATE DATABASE School_database;

--Create a new database containing the following tables:
--2.1. Class: with the columns: id, name, begins (date), ends (date)

CREATE TABLE CLASS (id int NOT NULL AUTO_INCREMENT,
                                    name VARCHAR (255),
                                         begins DATETIME NOT NULL,
                                                         ends DATETIME NOT NULL,
                                                                       PRIMARY KEY (id));

--2.2. Student: with the columns: id, name, email, phone, class_id (foreign key)

CREATE TABLE student (id int NOT NULL,
                             name VARCHAR (255),
                                  email VARCHAR (255) NOT NULL,
                                                      phone VARCHAR (255) NULL,
                                                                          class_id int NOT NULL AUTO_INCREMENT,
                                                                                                PRIMARY KEY (id),
                      FOREIGN KEY (class_id) REFERENCES CLASS (id));

--2.3. Create an index on the name column of the student table

CREATE INDEX idx_name ON student (name);

--2.4. Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations)

ALTER TABLE CLASS ADD status ENUM ('not-started', 'ongoing', 'finished');

--Part 3: More queries
--You should do these queries on the database hyf_lesson2
USE databases_HYF;

SELECT *
FROM task;

SELECT *
FROM USER;

SELECT *
FROM status;

--3.1. Get all the tasks assigned to users whose email ends in @spotify.com

SELECT task.title,
       user.name,
       user.email
FROM task
JOIN USER ON user.id = task.user_id
WHERE user.email like '%@spotify.com';

--3.2. Get all the tasks for 'Donald Duck' with status 'Not started'

SELECT task.title,
       user.name,
       status.name AS task_status
FROM task
JOIN USER ON user.id = task.user_id
JOIN status ON status.id = task.status_id
WHERE user.name = 'Donald Duck'
  AND status.name = 'Not started';

--3.3. Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

SELECT *
FROM task
JOIN USER
WHERE user.name = 'Maryrose Meadows'
  AND MONTH(task.created) = 9;

--3.4. Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

SELECT MONTH(created),
       COUNT(id) AS `amount of tasks`
FROM task
GROUP BY MONTH(created);

--Part 4: Creating a database following added entity relationship diagram.

CREATE DATABASE Travel_agency;

CREATE TABLE costumer (id int NOT NULL,
                              name VARCHAR (255),
                                   phone VARCHAR (255) NULL,
                                                       email VARCHAR (255) NOT NULL,
                                                                           PRIMARY KEY (id));


CREATE TABLE destination (id int NOT NULL,
                                 name VARCHAR (255),
                                      start_date DATETIME NOT NULL,
                                                          end_date DATETIME NOT NULL,
                                                                            transport VARCHAR (255),
                                                                                      status_id int(10) unsigned NOT NULL,
                                                                                                                 PRIMARY KEY (id),
                          FOREIGN KEY (status_id) REFERENCES status (id));


CREATE TABLE status (id int(10) unsigned NOT NULL,
                                         name varchar(255) NOT NULL,
                                                           PRIMARY KEY (id));