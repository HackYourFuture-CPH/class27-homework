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




use schooldatabase;


-- Create the 'class' table
CREATE TABLE class(
id INT NOT NULL AUTO_INCREMENT,
class_name VARCHAR(255) NOT NULL,
begins DATE NOT NULL,
end DATE NOT NULL,
PRIMARY KEY(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;




-- Createing the 'Student' table
CREATE TABLE student(
id INT NOT NULL AUTO_INCREMENT,
student_name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
phone VARCHAR(255) NOT NULL,
PRIMARY KEY(id),
class_id INT,
FOREIGN KEY(class_id) REFERENCES class(id) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;






-- Createing an index on the 'name' column in the 'Student' table
CREATE INDEX idx_student_name ON student (student_name);


-- Adding a new column to the class table named status
-- which can only have the following values: not-started, ongoing, finished.
ALTER TABLE class
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished');


