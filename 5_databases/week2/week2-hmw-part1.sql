SELECT * FROM task;

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Obey cats', 'Help cats to rule the world', '2024-02-09 01:19:40', '2024-02-10 01:19:40', '2024-02-11 01:19:40', 3, 8);

-- Change the title of a task
UPDATE task
SET title = 'Pamper cats' WHERE id = 36;

-- Change a task due date
UPDATE task
SET due_date = '2034-02-11 01:19:40' WHERE id = 36;

-- Change a task status
UPDATE task
SET status_id = 2 WHERE id = 36;

-- Mark a task as complete
UPDATE task
SET status_id = 3 WHERE id = 34;

-- Delete a task
DELETE FROM task
WHERE id = 36;