USE hyf;

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO
    task (
        title,
        description,
        created,
        updated,
        due_date,
        status_id,
        user_id
    )
VALUES
    (
        "Study MYSQL",
        "Watch youtube tutorials",
        "2024-01-18 09:39:00",
        "2024-02-05 10:00:21",
        "2024-02-25 12:00:00",
        2,
        5
    );

-- Change the title of a task
UPDATE 
    task
SET
    title = "Study Node.js"
WHERE
    id = 36;

--Change a task due date
UPDATE
    task
SET 
    due_date = "2024-03-20 12:00:00"
WHERE 
    id = 36;

-- Change a task status
UPDATE
    task
SET 
    status_id = 1
WHERE 
    id = 36;

-- Mark a task as complete
UPDATE
    task
SET 
    status_id = 3
WHERE 
    id = 36;

-- Delete a task
DELETE FROM
    task 
WHERE
    id = 35;