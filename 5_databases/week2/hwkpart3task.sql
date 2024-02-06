-- hwk part 3 week 2 ---

Get all the tasks assigned to users whose email ends in @spotify.com

SELECT * FROM task
JOIN user ON task.user_id = user.id
WHERE user.email LIKE '%@spotify.com';

Get all the tasks for 'Donald Duck' with status 'Not started'

SELECT * 
FROM task
WHERE user_id = (SELECT id FROM user WHERE name = 'Donald Duck')
AND status_id = (SELECT id FROM status WHERE name = 'Not started');



Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

SELECT *
FROM task
WHERE user_id = (SELECT id FROM user WHERE name = 'Maryrose Meadows')
AND MONTH(created) = 9;

Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

SELECT MONTH(created) AS month, COUNT(*) AS task_count
FROM task
GROUP BY MONTH(created);