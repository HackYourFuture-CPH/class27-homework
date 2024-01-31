-- Find out how many tasks are in the task table
SELECT count(id) 
FROM task;

-- Find out how many tasks in the task table do not have a valid due date
SELECT count(id)
FROM task
WHERE due_date IS NULL;

-- Find all the tasks that are marked as done
SELECT *
FROM task
WHERE status_id = 3;

-- Find all the tasks that are not marked as done
SELECT *
FROM task
WHERE status_id != 3;

--Get all the tasks, sorted with the most recently created first
SELECT *
FROM task
ORDER BY created DESC;

-- Get the single most recently created task
SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;

--Get the title and due date of all tasks where the title or description contains database
SELECT title , due_date
FROM task
WHERE title LIKE '%database%' OR description LIKE '%database%';

-- Get the title and status (as text) of all tasks
SELECT t.title , s.name
FROM task t
JOIN status s
ON t.status_id = s.id;

-- Get the name of each status, along with a count of how many tasks have that status
SELECT COUNT(t.id) , s.name
FROM task t
JOIN status s
ON t.status_id = s.id
GROUP BY t.status_id;

-- Get the names of all statuses, sorted by the status with most tasks first
SELECT COUNT(t.id) AS number_of_tasks, s.name
FROM task t
JOIN status s
ON t.status_id = s.id
GROUP BY t.status_id
ORDER BY number_of_tasks DESC;