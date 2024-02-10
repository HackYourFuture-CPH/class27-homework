USE hyf_mysql

--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT * FROM task;

SELECT * FROM task JOIN user ON task.user_id = user.id WHERE user.email LIKE '@spotify.com%' ;

--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT * FROM task
JOIN user ON task.user_id = user.id
JOIN status ON task.status_id = status.id
WHERE user.name = 'Donald Duck' AND status.name = 'Not started';

--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT * FROM task
JOIN user ON task.user_id = user.id
WHERE user.name = 'Maryrose Meadows' AND MONTH (task.created = 9);

--Find how many tasks where created in each month (hint: use group by)
SELECT MONTH(created) AS month,
COUNT(*) AS tasks_created
FROM task
GROUP BY MONTH(created);