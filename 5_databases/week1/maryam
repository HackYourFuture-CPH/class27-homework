-- Active: 1706443591837@@127.0.0.1@3307@hyf
-- Active: 1706443591837@@127.0.0.1@3307@hyf

--Find out how many tasks are in the task table
SELECT COUNT(id) FROM task;

--Find out how many tasks in the task table do not have a valid due date
DESCRIBE task;

SELECT COUNT(*) FROM task WHERE due_date IS NULL;
--Find all the tasks that are marked as done
SELECT task.*
FROM task
    JOIN status ON task.status_id = status.id
WHERE
    status.name = "Done";

SELECT
    t.id AS TaskID,
    t.title AS Title,
    t.description AS Description,
    t.created AS CreatedDate,
    t.due_date AS DueDate,
    s.name AS Status
FROM task AS t
    JOIN status AS s ON t.status_id = s.id
WHERE
    s.name = 'Done';

--Find all the tasks that are not marked as done
SELECT task.*
FROM task
    JOIN status ON task.status_id = status.id
WHERE
    status.name <> "Done";

--Get all the tasks, sorted with the most recently created first
SELECT * FROM task ORDER BY created DESC;

--Get the single most recently created task
SELECT * FROM task ORDER BY created DESC LIMIT 1;

--Get the title and due date of all tasks where the title or description contains database

SELECT task.title, task.due_date
FROM task
WHERE
    title LIKE '%database%'
    OR description LIKE '%database%';

--Get the title and status (as text) of all tasks
SELECT task.title, status.name AS status
FROM task
    JOIN status ON task.status_id = status.id;

--Get the name of each status, along with a count of how many tasks have that status
SELECT status.name AS StatusName, COUNT(task.status_id) AS TaskCount
FROM status
    LEFT JOIN task ON status.id = task.status_id
GROUP BY
    status.name;

--Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name AS StatusName, COUNT(task.status_id) AS TaskCount
FROM status
    LEFT JOIN task ON status.id = task.status_id
GROUP BY
    status.name
ORDER BY TaskCount DESC;