-- Active: 1706632082876@@localhost@3306@hyf_database
-- Find out how many tasks are in the task table
SELECT COUNT(*) AS task_count FROM task;
-- Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(*) AS tasks_without_due_date
FROM task
WHERE due_date IS NULL OR due_date < NOW();

-- Find all the tasks that are marked as done
SELECT *
FROM task
WHERE status_id = (SELECT id FROM status WHERE name = 'Done');

-- Find all the tasks that are not marked as done
SELECT *
FROM task
WHERE status_id <> (SELECT id FROM status WHERE name = 'Done');

-- Get all the tasks, sorted with the most recently created first
SELECT *
FROM task
ORDER BY created DESC;

-- Get the single most recently created task
SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;

-- Get the title and due date of all tasks where the title or description contains "database"
SELECT title, due_date
FROM task
WHERE title LIKE '%database%' OR description LIKE '%database%';

-- Get the title and status (as text) of all tasks
SELECT t.title, s.name AS status
FROM task t
JOIN status s ON t.status_id = s.id;

-- Get the name of each status, along with a count of how many tasks have that status
SELECT s.name, COUNT(t.id) AS task_count
FROM status s
LEFT JOIN task t ON s.id = t.status_id
GROUP BY s.name;

-- Get the names of all statuses, sorted by the status with most tasks first
SELECT s.name
FROM status s
LEFT JOIN task t ON s.id = t.status_id
GROUP BY s.name
ORDER BY COUNT(t.id) DESC;

