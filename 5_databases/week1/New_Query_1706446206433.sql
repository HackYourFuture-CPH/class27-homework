-- Active: 1706443440629@@127.0.0.1@3306@hyf
SELECT
    title, description, created
FROM
    task
LIMIT 5;


SELECT
 name, id 
FROM
`user`
where id=10;

--Select the names and phones of all users
SELECT name, phone from user;

--Select the name of the user with id=10;
SELECT name from user WHERE id=10;

-- find how many users exist in the user table
SELECT COUNT(id) from `user`;

--Select the names of the first 5 users in the DATABASE
SELECT name from user limit 5;

--Select the names of the last 3 users in the DATABASE
SELECT name from user order by id desc LIMIT 3;


--sum all the ids in the user TABLE
SELECT sum(id) as Sum_id FROM user;
SELECT MIN(id) as Sum_id FROM user;
SELECT MAX(id) as Sum_id FROM user;

--select all users
SELECT * from user order by naME;

--FIND ALL tasks that include SQL on the title or on the description;
SELECT * from task where title LIKE '%sql%' or description LIKE '%sql%';

-- find the title of all tasks that user Maryrose is responcible FOREIGN
SELECT * FROM `user`;
SELECT 
    * 
FROM 
    task 
    join user on user_id=task.user_id
WHERE
    user.name LIKE '%Maryrose%'

-- find how many tasks each user is responsible for;

SELECT 
user_id, COUNT(task.id) as nroftasks , user.name
from 
task 
JOIN user ON user_id=user.id
GROUP BY user_id;

SELECT * from task;

--Find how many tasks with a status=Done each user is responsible for;

SELECT COUNT(task.id) as counttasks
FROM task
JOIN status ON status.id=status_id
WHERE
    status.name='Done';
 
