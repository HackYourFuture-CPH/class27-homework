use hyf_homework;

-- Get all the tasks assigned to users whose email ends in @spotify.com:
SELECT t.*
FROM task t
    INNER JOIN user u ON t.id = u.id
WHERE
    u.email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started':
SELECT t.*
FROM task t
    INNER JOIN user u ON t.id = u.id
    INNER JOIN status s ON t.status_id = s.id
WHERE
    u.name = 'Donald Duck'
    AND s.name = 'Not started';

-- Get all the tasks for 'Maryrose Meadows' that were created in September:
SELECT t.*
FROM task t
    INNER JOIN user u ON t.id = u.id
WHERE
    u.name = 'Maryrose Meadows'
    AND MONTH(t.created) = 9;

-- Find how many tasks were created in each month:
SELECT COUNT(*), MONTHNAME(created) AS MONTH
FROM task
GROUP BY
    MONTH
ORDER BY MONTH DESC