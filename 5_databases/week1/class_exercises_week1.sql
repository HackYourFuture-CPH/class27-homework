-- Active: 1706632082876@@localhost@3306@hyf_database

--Select the names and phones of all user;
SELECT name, phone from user;

--Select the name of the user with id=10;
select name from user WHERE id=10;

--Find how many users exist in the database;
select count(*) AS total_users
FROM `user`

--Select the names of the first 5 users in the database;
SELECT name FROM user LIMIT 5

--Select the names of the last 3 users in the database;
SELECT name 
from user DESC LIMIT 3;

--Sum all the ids in the user table;
SELECT id from user

--Select all users and order them alphabetically by name;
SELECT * from user ORDER BY name

--Find all tasks that include SQL either on the title or on the description;
SELECT * 
from task 
where title LIKE '%sql%' 
or 
description LIKE '%sql%';

--Find the title of all tasks that the user 'Maryrose' is responsible for;
SELECT title 
FROM task 
JOIN user ON task.user_id=user.id 
WHERE user.name LIKE '%Maryrose%';

--Find how many tasks each user is responsible for;
SELECT user.id, user.name, COUNT(task.id) AS task_count
FROM user
LEFT JOIN task ON user.id = task.user_id
GROUP BY user.id, user.name;

--Find how many tasks with a status=Done each user is responsible for;
SELECT user.id, user.name, 
COUNT(task.id) AS task_done 
FROM user LEFT JOIN task ON user.id = task.user_id
JOIN status ON task.status_id = status.id
WHERE status.name = 'Done'
GROUP BY user.id, user.name;



select * from `status`;