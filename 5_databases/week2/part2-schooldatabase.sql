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
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') DEFAULT 'not-started';


