-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO
    task (
        title, description, created, updated, due_date, status_id
    )
VALUES (
        'Clean the garage', 'Organize tools and equipment', NOW(), NOW(), '2024-02-28 12:00:00', 1
    );

-- Change the title of a task
UPDATE task
SET
    title = 'Schedule meeting with London office'
WHERE
    id = 3;

-- Change a task due date
UPDATE task SET due_date = '2024-03-10 08:00:00' WHERE id = 5;

-- Change a task status
UPDATE task SET status_id = 3 WHERE id = 7;

-- Mark a task as complete
UPDATE task SET status_id = 3 WHERE id = 10;

-- Delete a task
DELETE FROM task WHERE id = 12;