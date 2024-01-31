-- Active: 1706443592393@@127.0.0.1@3306@hyf
SELECT * FROm task 


DESCRIBE status;
--
SHOW COLUMNS FROM `status`;
--

 SELECT * from status

 select sum(user_id), user_id 
 from task
 GROUP BY user_id

SELECT * FROM `user` ORDER BY name ASC LIMIT 0,3

SELECT * from task ORDER BY updated DESC LIMIT 0,1

select MAX(updated) from task


DESCRIBE task

select MAX(updated), user_id
from task GROUP BY user_id

select user.name, task.title
FROM user 
INNER JOIN task 
ON user.id=task.user_id

select user.name, task.title
FROM (user INNER JOIN task);

select user.name, task.title
FROM (user INNER JOIN task)
WHERE user.name="Pablo Kisbee";

-- 
SELECT user.name, task.title
FROM (user LEFT JOIN task ON user.id=task.user_id)

-- 
SELECT user.name, task.title
FROM (user RIGHT JOIN task ON user.id=task.user_id)
WHERE user.id IS NULL

SELECT task.title, status.name
FROM(task INNER JOIN status ON status.id=task.status_id)

SELECT user.id AS user_id , task.id as task_id, user.name, task.title 
from (user JOIN task ON user.id=task.user_id)
where user.name="AUbry Polak"


SELECT * from user

select title, description from task
limit 5;

SELECT COUNT(user_id), 
user_id from task GROUP BY user_id;

--find count of ids in user table
SELECT COUNT(id) from `user`

----------------------------------
--CLASS EXCERCISES
--Implement the following queries:
----------------------------------

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




