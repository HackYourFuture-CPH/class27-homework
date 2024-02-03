-- Active: 1706735006243@@127.0.0.1@3306@hyf_mysql



SELECT *  FROM user;

SELECT * FROM status;

SELECT * FROM task;

--how many tasks are in the task table
SELECT COUNT (*) FROM task; 

--how many tasks in the task table do not have a valid due date
SELECT COUNT (*) FROM task WHERE due_date is NULL;

--Find all the tasks that are marked as done
SELECT title FROM task INNER JOIN status ON task.status_id = status.id WHERE status.name='Done';

--Find all the tasks that are NOT marked as done
SELECT title FROM task INNER JOIN status ON task.status_id = status.id WHERE status.name!='Done';


--Get all the tasks, sorted with the most recently created first
SELECT * FROM task ORDER BY created DESC;

--Get the single most recently created task
SELECT * FROM task ORDER BY created DESC LIMIT 1;



--Get the title and due date of all tasks where the title or description contains database
SELECT task.title, task.due_date FROM task WHERE task.title LIKE '%database%' OR task.description LIKE '%database%';

--Get the title and status (as text) of all tasks
SELECT task.title, status.name AS status FROM (task JOIN status ON task.status_id = status.id);

--Get the name of each status, along with a count of how many tasks have that status
SELECT status.name AS status_name, COUNT(task.id) AS task_count FROM (status JOIN task ON task.status_id = status.id)
GROUP BY status.name;


--Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name AS status_name, COUNT(task.id) AS most_task_count FROM (status JOIN task ON task.status_id = status.id)
GROUP BY status.name
ORDER BY COUNT(task.id) DESC;