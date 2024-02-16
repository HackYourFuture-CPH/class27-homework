use hyf_database

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT*
FROM task
WHERE user_id IN (
    SELECT id
    
    FROM user
    WHERE email LIKE  '%@spotify.com'
);
--get all tasks for 'doballs duck' with status 'not satarted'

SELECT*
FROM task
WHERE user_id =(
SELECT id
     FROM user
     WHERE name='Donald Duck'
)
AND status_id =(
    SELECT id
   From status
   WHERE name = 'Not started'
);

--get all task for 'maryrose meadow' that where creat in september
SELECT*
FROM task
WHERE user_id = (
    SELECT id 
    FROM user
    WHERE name='Maryrose Meadows'
)
AND MONTH(created)=9;

-- find how many tasks were created in each MONTH
SELECT 
    MONTHNAME(created) AS month,
    COUNT(*) AS task_count
FROM task
GROUP BY MONTH(created), MONTHNAME(created);















