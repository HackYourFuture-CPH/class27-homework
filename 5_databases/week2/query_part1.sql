-- Part 1: Working with tasks
-- Write the following sql queries:

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id

insert into task (id, title, description, created, updated, due_date, status_id, user_id)
 values (36, 'Insert a new task', 'You should add a new task in list', '2024-02-07 05:22:08', '2024-02-07 15:58:05', '2024-02-07 20:45:18', 3, 11);

 SELECT * from task

--  Change the title of a task
UPDATE task SET title='Insert a very new task' WHERE id=36;

-- Change a task due date
UPDATE task SET due_date='2024-02-10 05:22:08' WHERE id=36;

-- Change a task status
UPDATE task SET status_id=1 WHERE id=36;

-- Mark a task as complete
UPDATE task SET status_id=3
WHERE id=36;

-- Delete a task
DELETE FROM task WHERE id=36;

