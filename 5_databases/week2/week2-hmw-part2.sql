-- Active: 1706786442782@@127.0.0.1@3306
CREATE DATABASE School
    DEFAULT CHARACTER SET = 'utf8mb4';

USE School;

-- Select Tables
SELECT * FROM Class;
SELECT * FROM Student;


-- Create Class Table
CREATE TABLE Class (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name text NOT NULL,
    begins date NOT NULL,
    ends date NOT NULL
)


-- Insert Rows For Class Table
INSERT INTO Class (name, begins, ends) values ('Donald Duck', '2024-02-10', '2029-02-10');
INSERT INTO Class (name, begins, ends) values ('Mickey Mouse', '2024-02-10', '2029-02-10');
INSERT INTO Class (name, begins, ends) values ('Tom The Cat', '2024-02-10', '2029-02-10');
INSERT INTO Class (name, begins, ends) values ('Jerry The Mouse', '2024-02-10', '2029-02-10');

-- Delete Rows From Class Table
DELETE FROM Class WHERE name = 'Donald Duck';
DELETE FROM Class WHERE name = 'Mickey Mouse';
DELETE FROM Class WHERE name = 'Tom The Cat';
DELETE FROM Class WHERE name = 'Jerry The Mouse';

-- Insert Rows For Class Table Again
INSERT INTO Class (name, begins, ends) values ('Databases', '2024-02-10', '2029-06-10');
INSERT INTO Class (name, begins, ends) values ('Functional Programming', '2024-02-10', '2029-06-10');
INSERT INTO Class (name, begins, ends) values ('Object Oriented Programming', '2024-02-10', '2029-06-10');
INSERT INTO Class (name, begins, ends) values ('Cloud Computing', '2024-02-10', '2029-06-10');



-- Create Student Table
CREATE TABLE Student(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name text NOT NULL,
    email varchar(255) NOT NULL,
    phone varchar(255) NOT NULL,
    class_id int,
    FOREIGN KEY (class_id) REFERENCES Class(id)
)


-- Insert Rows For Student Table
INSERT INTO Student (name, email, phone, class_id) values ('Donald Duck', 'donald@hyf.com', '1234567', 5);
INSERT INTO Student (name, email, phone, class_id) values ('Mickey Mouse', 'mickey@hyf.com', '7234561', 6);
INSERT INTO Student (name, email, phone, class_id) values ('Tom The Cat', 'tom@hyf.com', '1634527', 8);
INSERT INTO Student (name, email, phone, class_id) values ('Jerry The Mouse', 'jerry@hyf.com', '1254367', 8);


-- Alter Student Table Name Data Type To VARCHAR
ALTER TABLE Student
MODIFY COLUMN name VARCHAR(255) NOT NULL;

-- Create Index For Names Of Student Table
CREATE INDEX idx_name
ON Student (name);

-- Add New Column 'Status' To Class
ALTER TABLE Class
ADD Status ENUM('not-started', 'ongoing', 'finished');