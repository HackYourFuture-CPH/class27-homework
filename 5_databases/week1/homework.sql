-- Active: 1706468366561@@127.0.0.1@3307@databases_HYF

--Homework, week1
--checking all tables for a primary keys and foreign keys

SELECT *
FROM task;


SELECT *
FROM status;


SELECT *
FROM user;

--Find out how many tasks are in the task table

SELECT COUNT(id) AS 'Total amount of tasks'
FROM task;

--Find out how many tasks in the task table do not have a valid due date

SELECT COUNT(id) AS 'Total amount of tasks without due date'
FROM task
WHERE due_date IS NULL;

--Find all the tasks that are marked as done

SELECT task.title,
       status.name
FROM task
JOIN status ON task.status_id = status.id
WHERE status.name = 'Done';

--Find all the tasks that are not marked as done

SELECT task.title,
       status.name
FROM task
JOIN status ON task.status_id = status.id
WHERE status.name != 'Done';

--Get all the tasks, sorted with the most recently created first

SELECT *
FROM task
ORDER BY created DESC;

--Get the single most recently created task

SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;

--Get the title and due date of all tasks where the title or description contains database

SELECT task.title,
       task.due_date
FROM task
WHERE title REGEXP 'database'
  OR description REGEXP 'database';

--Get the title and status (as text) of all tasks

SELECT task.title AS Task,
       status.name AS Status
FROM task
JOIN status
WHERE task.status_id = status.id;

--Get the name of each status, along with a count of how many tasks have that status

SELECT status.name AS Status_name,
       COUNT(task.id) AS Amount_of_tasks
FROM status
JOIN task ON status.id = task.status_id
GROUP BY status.name;

--Get the names of all statuses, sorted by the status with most tasks first

SELECT status.name AS Status_name,
       COUNT(task.id) AS Amount_of_tasks
FROM status
JOIN task ON status.id = task.status_id
GROUP BY status.name
ORDER BY Amount_of_tasks DESC;