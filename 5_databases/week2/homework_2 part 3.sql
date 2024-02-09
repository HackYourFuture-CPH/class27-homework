-- Get all the tasks assigned to users whose email ends in @spotify.com
use hyf_lesson1;

SELECT *
FROM task
    JOIN user ON user.id = task.user_id
WHERE
    user.email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT *
FROM task
    JOIN user ON user.name = 'Donald Duck'
    AND user.id = task.user_id
WHERE
    task.status_id = 'Not started';

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

SELECT *
FROM task
WHERE
    user_id = (
        SELECT id
        FROM user
        WHERE
            name = 'Maryrose Meadows'
    )
    AND month(created) = 9;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

SELECT month(created) AS month, count(*) AS number_of_tasks
FROM task
GROUP BY
    month(created);