-- Active: 1706443440629@@127.0.0.1@3306@hyf

--1.Find out how many tasks are in the task table
SELECT COUNT(title) AS count_tasks
FROM task

--2. Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(*) AS count_unvaliddate 
FROM task
WHERE due_date is NULL
    
--3.Find all the tasks that are marked as done

SELECT *,
       status.name
FROM task
JOIN status ON status_id=status.id
WHERE status.name='done'

--4.Find all the tasks that are not marked as done
SELECT *, 
        status.name 
FROM task
JOIN status ON status_id=status.id
WHERE NOT status.name='done'

--5. Get all the tasks, sorted with the most recently created first
SELECT *
FROM task
ORDER BY created DESC

--6.Get the single most recently created task
SELECT *
FROM task
ORDER BY created DESC
LIMIT 1

--7.Get the title and due date of all tasks where the title or description contains database
SELECT title, 
        due_date
FROM task
WHERE title LIKE '%database%' or description LIKE '%database%'

--8.Get the title and status (as text) of all tasks
SELECT title,
        status_id, 
        status.name
FROM task 
JOIN status ON status_id=status.id

--9.Get the name of each status, along with a count of how many tasks have that status

SELECT COUNT(status_id) as amout, 
        status.name
FROM task
JOIN status ON status_id=status.id
GROUP BY status_id


--10.Get the names of all statuses, sorted by the status with most tasks first

SELECT status.name, 
        COUNT(status_id) as amout
FROM task
JOIN status ON status_id=status.id
GROUP BY status_id
ORDER BY amout DESC