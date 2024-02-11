SELECT * FROM `task`;

-- Part 1

1--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id

INSERT INTO `task` (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Trulala', 'from circus', '2017-08-25 07:00:00', '2017-09-10 08:00:00', '2018-09-09 09:00:00', 1, 5);

2--Change the title of a task

UPDATE `task` SET title = 'Baraban' WHERE id = 2;

3--Change a task due date

UPDATE `task` SET due_date = '2018-04-09 09:19:43' WHERE id = 3;

4--Change a task status

UPDATE `task` SET status_id = 1 WHERE id = 17;

5--Mark a task as complete

UPDATE `task` SET status_id = 3 WHERE id = 18;

6--Delete a task

DELETE FROM `task` WHERE id = 18;

-- Part 2

CREATE TABLE `Class` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `begins_date` DATE NOT NULL,
    `ends_date` DATE NOT NULL
)

CREATE TABLE `Student` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NULL,
    `class_id` INT NOT NULL, FOREIGN KEY (class_id) REFERENCES Class(id)
)

-- Part 3

--Get all the tasks assigned to users whose email ends in @spotify.com

SELECT task.title,
        user.name,
        user.email
FROM `task`
JOIN `user` on user_id = task.user_id
WHERE user.email LIKE '%@spotify.com';

--Get all the tasks for 'Donald Duck' with status 'Not started'

SELECT task.title,
        user.name,
        status.name
FROM `task`
JOIN `status` ON status_id = task.status_id
JOIN `user` ON user_id = task.user_id
WHERE status.name LIKE 'Not started'
and user.name LIKE 'Donald Duck';

--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

SELECT * 
FROM `task`
JOIN `user`
WHERE user.name = 'Maryrose Meadows'
AND MONTH(created) = 9;

--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

SELECT MONTH(created), COUNT(ID)
FROM `task`
GROUP BY MONTH(created);


-- Part 4: