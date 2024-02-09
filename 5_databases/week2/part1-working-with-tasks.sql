-- Part 1: Working with tasks
-----------------------------
USE hyf;


-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) VALUES ('doing homeworks', 'SQL homeworks week2', '2018-09-26 03:06:46', '2018-10-08 06:14:31', '2019-12-22 20:58:03', 3, 8);


-- Change the title of a task
UPDATE task
SET title='doing excercises'
WHERE user_id=6;


-- Change a task due date
UPDATE task
SET due_date='2020-09-26 03:06:46'
WHERE user_id=6;


-- Change a task status
UPDATE task
SET status_id='2'
WHERE user_id=6;


-- Mark a task as complete
UPDATE task
SET status_id='3'
WHERE user_id=6;


--Delete a task
DELETE FROM task
WHERE user_id=6;

