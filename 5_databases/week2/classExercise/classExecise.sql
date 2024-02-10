--Get all the tasks assigned to Pavel
SELECT t.*
FROM tasks t
    JOIN users ON t.user_id = u.id
WHERE
    u.name = 'Pavel';

--