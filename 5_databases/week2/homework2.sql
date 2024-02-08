-- Active: 1706363831540@@0.0.0.0@3306@business
--------------------------------- Part 1

INSERT INTO task(title, description, created, updated, due_date, status_id, user_id)
VALUES('my task','my desc','2017-10-15 13:05:09','2017-10-15 23:35:45','2017-12-25 19:42:15',3,4)


UPDATE task 
SET title = 'my updated task'
WHERE title = 'my task'


UPDATE task 
SET due_date = '2017-12-23 14:21:01'
WHERE title = 'my updated task'


UPDATE task 
SET status_id = '2'
WHERE title = 'my updated task'


UPDATE task 
SET status_id = '3'
WHERE title = 'my updated task'


DELETE from task
WHERE title = 'my updated task'


------------------------------------- Part 2

CREATE DATABASE school

CREATE TABLE class(
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    begins TIMESTAMP ,
    ends TIMESTAMP
)


CREATE TABLE student(
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    email varchar(50),
    phone varchar(10),
    class_id INT(6),
    FOREIGN KEY (class_id) REFERENCES class(id)
)

------------------------------------- Part 3

SELECT *
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN USER ON user_task.user_id = user.id
WHERE user.email like '%@spotify.com'

SELECT *
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN USER ON user_task.user_id = user.id
JOIN status ON status.id = task_id
WHERE user.name = 'Donald Duck'
  AND status.name = 'Not started'


SELECT *
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN USER ON user_task.user_id = user.id
WHERE user.name = 'Maryrose Meadows'
  AND month(created) = 9

SELECT count(id),
       MONTH(created)
FROM task
GROUP BY MONTH(created)


----------------------------------  Part 4

CREATE DATABASE business

CREATE TABLE office(
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    phone varchar(10),
    address varchar(50)
)

CREATE TABLE staff(
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    phone varchar(10),
    office_id INT(6),
    FOREIGN KEY (office_id) REFERENCES office(id)
)

CREATE TABLE title(
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL
)

CREATE TABLE staff_title(
    staff_id INT(6),
    title_id INT(6),
    PRIMARY KEY(`staff_id`, `title_id`),
    FOREIGN KEY (staff_id) REFERENCES staff(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (title_id) REFERENCES title(id) ON DELETE CASCADE ON UPDATE CASCADE
)