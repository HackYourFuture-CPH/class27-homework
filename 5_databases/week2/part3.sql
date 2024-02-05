use hyf;

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT
    task.id,
    task.title,
    task.user_id,
    user.name,
    user.email
FROM
    task
    JOIN user ON task.user_id = user.id
WHERE
    user.email LIKE "%@spotify.com";

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT
    user.name,
    task.title,
    task.status_id,
    status.name
FROM
    user
    JOIN task ON user.id = task.user_id
    JOIN status ON task.status_id = status.id
WHERE
    user.name = "Donald Duck"
    AND status.name = "Not started";

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT user.id, user.name, task.title, task.created
FROM `user`
JOIN task
ON user.id = task.user_id
WHERE `user`.name = "Maryrose Meadows" AND MONTH(task.created) = 9;

-- Find how many tasks where created in each month
SELECT MONTH(created) AS month ,COUNT(id)
FROM task
GROUP BY MONTH(created);