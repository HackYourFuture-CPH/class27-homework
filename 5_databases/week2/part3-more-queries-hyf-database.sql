use hyf;

select * from user;

--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.title as 'task title'
FROM task
JOIN `user` ON task.user_id=user.id
WHERE user.email LIKE '%@spotify.com';


--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.title as 'task title'
FROM task
JOIN user on task.user_id=user.id
JOIN status on task.status_id=status.id
WHERE user.name='Donald Duck' AND status.name='Not started';


--Get all the tasks for 'Maryrose Meadows' that were created in september
SELECT task.title
FROM task
JOIN user ON task.user_id = user.id
WHERE user.name = 'Maryrose Meadows'
  AND MONTH(task.created) = 9;


--Find how many tasks where created in each month, e.g.
--how many tasks were created in october, how many tasks were created in november
SELECT MONTH(task.created) AS 'the month task was created in', COUNT(task.id) AS 'count of tasks'
FROM task
GROUP BY MONTH(task.created);
