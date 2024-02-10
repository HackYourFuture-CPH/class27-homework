use hyf_database;
SELECT* from task;
--add task
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('New Task Title', 'New Task Description', NOW(), NOW(), '2023-12-31', 1, 1);
-- Change the title of a task:
UPDATE task
SET title = 'Updated Task Title'
WHERE id = 1; -- Assuming the task ID is 1
--hange a task due date:
UPDATE task
set due_date ='2024-01-15'
WHERE id =2; -- Assuming the task ID is 2
--change a task status:
UPDATE task
SET status_id=2
WHERE id=3;--masalan task idish 3 ast

--maark a task as complete:
UPDATE task
SET status_id=3
where id=4; --asuming the task id is 4
DELETE FROM task
WHERE id=5;