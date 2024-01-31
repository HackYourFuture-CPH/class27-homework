--1
SELECT COUNT(id)
from task;

--2
Select COUNT(id) 
from task WHERE due_date IS NULL;

--3
SELECT task.id ,task.title ,task.description ,status.name
FROM task
INNER JOIN status ON task.status_id=status.id WHERE status.name='done';

--4
SELECT task.id ,task.title ,task.description ,status.name
FROM task
INNER JOIN status ON task.status_id=status.id WHERE status.name!='done';

--5
SELECT * 
FROM task 
ORDER BY created DESC;

--6
select *
from task
order by created desc limit 1 ;

--7
SELECT title ,due_date
FROM task 
WHERE title LIKE '%database%' OR description LIKE '%database%' ;

--8
SELECT title, status_id
FROM task ;

--9
SELECT status.name,count(task.id) AS 'task count'
FROM status
INNER JOIN task on task.status_id=status.id
GROUP BY status.name;

--10
SELECT status.name,count(task.id) AS 'task count'
from status
JOIN task on task.status_id = status.id 
GROUP BY status.name
ORDER BY count(task.id) DESC
