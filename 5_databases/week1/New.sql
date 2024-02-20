-- Active: 1707334336522@@localhost@3306@hyf_homework

-- Number of tasks in the task table:
SELECT COUNT(user_id) AS task_count FROM task;

-- tasks without due date
SELECT COUNT(*) AS tasks_without_due_date
FROM task
WHERE
    due_date IS NULL
    -- Tasks marked as done
SELECT *
FROM task
WHERE
    status_id = (
        SELECT id
        FROM status
        WHERE
            name = 'Done'
    );

-- Tasks NOT marked as done
SELECT *
FROM task
WHERE
    status_id != (
        SELECT id
        FROM status
        WHERE
            name = 'Done'
    );

-- All tasks sorted by the most recently created first:
SELECT * FROM task ORDER BY created DESC;

-- Single most recently created task
SELECT * FROM task ORDER BY created DESC LIMIT 1;

-- Title and due date of tasks where the title or description contains "database"
SELECT title, due_date
FROM task
WHERE
    title LIKE '%database%'
    OR description LIKE '%database%';

-- Title and status (as text) of all tasks:
SELECT t.title, s.name AS status
FROM task t
    JOIN status s ON t.status_id = s.id;

-- Name of each status along with the count of tasks with that status
SELECT s.name, COUNT(*) AS task_count
FROM task t
    JOIN status s ON t.status_id = s.id
GROUP BY
    s.name;

-- Names of all statuses sorted by the status with the most tasks first
SELECT s.name
FROM status s
    LEFT JOIN task t ON t.status_id = s.id
GROUP BY
    s.name
ORDER BY COUNT(t.status_id) DESC;