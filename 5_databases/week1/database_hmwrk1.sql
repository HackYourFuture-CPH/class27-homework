-- Active: 1706786442782@@127.0.0.1@3306@hyf_homework

-- SELECT * FROM status;
-- SELECT * FROM task;

-- 1 Find out how many tasks are in the task table
SELECT COUNT(*) AmountTask FROM task;

-- 2 Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(*) AS InvalidDueDate FROM task
WHERE due_date IS NULL;

-- 3 Find all the tasks that are marked as done
SELECT id AS TaskID, title AS taskTitle, status_id AS Done
FROM task
WHERE status_id = 3;

-- 4 Find all the tasks that are not marked as done
SELECT id AS TaskID, title AS taskTitle, status_id AS NotDone
FROM task
WHERE status_id != 3;

-- 5 Get all the tasks, sorted with the most recently created first
SELECT id AS TaskID, title, description, created AS MostRecentlyCreated, updated, due_date, status_id, user_id, 
FROM task
ORDER BY created DESC;

-- 6 Get the single most recently created task
SELECT id, title, description, created AS MostRecentlyCreated
FROM task
ORDER BY created DESC
LIMIT 1;

-- 7 Get the title and due date of all tasks where the title or description contains database
SELECT title AS TitleIncludeDatabase, due_date AS DueDateIncludeDatabase
FROM task
WHERE title LIKE '%database%' OR due_date LIKE '%database%';

-- 8 Get the title and status (as text) of all tasks
SELECT task.title AS TaskTitle, status.name AS StatusName
FROM task
INNER JOIN status ON task.status_id = status.id;

-- 9 Get the name of each status, along with a count of how many tasks have that status
SELECT status.name AS StatusName, COUNT(task.id) AS AmountOfStatusTasks
FROM status
INNER JOIN task ON task.status_id = status.id
GROUP BY status.name; 

-- 10 Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name AS StatusName, COUNT(task.id) AS AmountOfStatusTasks
FROM status
INNER JOIN task ON task.status_id = status.id
GROUP BY status.name
ORDER BY COUNT(task.id) DESC; 