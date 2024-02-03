-- Active: 1706735006243@@127.0.0.1@3306@hyf_mysql

SELECT *  FROM user;

SELECT * FROM status;

SELECT * FROM task;


--Select the names and phones of all users
SELECT user.name, user.phone FROM user;

--Select the name of the user with id=10
SELECT user.name FROM user WHERE id=10;

--how many users exist in the database
SELECT COUNT(*) FROM user;

--Select the names of the first 5 users in the database
SELECT name FROM user LIMIT 5;

--Select the names of the last 3 users in the database
SELECT name FROM user ORDER BY id DESC LIMIT 3;

--Sum all the ids in the user table;
SELECT SUM(id) FROM user;

--Select all users and order them alphabetically by name
SELECT * FROM user ORDER BY name ASC;

--Find all tasks that include SQL either on the title or on the description
SELECT * FROM task WHERE task.title LIKE '%SQL%' OR task.description LIKE '%SQL%';

--Find the title of all tasks that the user Maryrose is responsible for
SELECT task.title FROM task WHERE user_id = ( SELECT id FROM user WHERE name = 'Maryrose');

--Find how many tasks each user is responsible for
SELECT user.name AS user_name, COUNT(task.id) AS task_count FROM (user JOIN task ON task.user_id = user.id)
GROUP BY user.name;

--Find how many tasks with a status=Done each user is responsible for
SELECT user.name AS user_name, COUNT(task.id) AS done_task_count FROM (user JOIN task ON task.user_id = user.id)
WHERE task.status_id = (SELECT id FROM status WHERE name = 'Done')
GROUP BY user.name, user_id;
