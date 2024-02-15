-- Active: 1706440038860@@127.0.0.1@3307@hyf_lesson1
-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
-- Change the title of a task
-- Change a task due date
-- Change a task status
-- Mark a task as complete
-- Delete a task

INSERT INTO
    task (
        title, description, created, updated, due_date, status_id, user_id
    )
VALUES (
        'Learn SQL', 'Write queries', '2024-02-06 11:30:04', '2024-02-07 12:34:05', '2024-02-08 12:34:05', 1, 1
    );

UPDATE task SET title = 'Learn SQL' WHERE id = 1;

UPDATE task SET due_date = '2024-02-10 12:34:05' WHERE id = 36;

UPDATE task SET status_id = 2 WHERE id = 36;

UPDATE task SET status_id = 3 WHERE id = 36;

DELETE FROM task WHERE id = 36;

SELECT * FROM task;