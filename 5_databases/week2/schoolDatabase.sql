-- Active: 1707334336522@@localhost@3306
CREATE DATABASE SchoolDatabase CHARACTER SET = 'utf8mb4';

use SchoolDatabase;

-- Creating the Class table
CREATE TABLE Class (
    id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, begins DATE, ends DATE
);

-- Creating the Student table
CREATE TABLE Student (
    id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255), phone VARCHAR(20), class_id INT, constraint FOREIGN KEY (class_id) REFERENCES Class (id)
);

CREATE INDEX idx_name ON Student (name);

ALTER TABLE Class
ADD COLUMN status ENUM(
    'not-started', 'ongoing', 'finished'
) NOT NULL DEFAULT 'not-started';