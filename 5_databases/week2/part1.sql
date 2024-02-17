USE hyf_mysql;

SELECT * FROM task;

--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('painting', 'painting nature', '2024-02-01 00:00:00', '2024-02-01 00:00:00', '2024-02-24 05:05:05', 3, 5);

--Change the title of a task
UPDATE task SET title='painting' WHERE user_id = 5;

--Change a task due date
UPDATE task SET due_date = '2024-02-01 00:00:00' WHERE user_id = 5;

--Change a task status
UPDATE task SET status_id = '2' WHERE user_id = 5;

--Mark a task as complete
UPDATE task SET status_id = '3' WHERE user_id = 5;

--Delete a task
DELETE FROM task WHERE user_id = 5;
