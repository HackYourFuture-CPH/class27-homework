USE SchoolDB;
CREATE TABLE Class (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    begins DATE NOT NULL,
    ends DATE NOT NULL
);
CREATE TABLE Student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NULL,
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES Class(id)
);
--Create an index on the name column of the student table
CREATE INDEX idx_student_name ON Student(name);
--Add a new column to the class table named status with enumerations:
ALTER TABLE Class
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') DEFAULT 'not-started';
