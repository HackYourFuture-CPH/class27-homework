-- Active: 1706443440629@@127.0.0.1@3306@school
-- Active: 1706443440629@@127.0.0.1@3306@hyf
CREATE DATABASE school
    DEFAULT CHARACTER SET = 'utf8mb4';

CREATE TABLE `class`
(
    `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(225) NOT NULL,
    `begins` DATE,
    `ends` DATE,
    CONSTRAINT class_pk PRIMARY KEY(`id`)
);

CREATE TABLE student
(
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(225) NOT NULL,
    `email` VARCHAR(225),
    `phone` VARCHAR(15),
    `class_id` int(10) UNSIGNED NOT NULL ,
    CONSTRAINT students_pk PRIMARY KEY (id),
    CONSTRAINT class_studentId_fk FOREIGN KEY (class_id) REFERENCES class(id)
)

-- Create an index on the name column of the student table.
CREATE INDEX student_name_ix ON student (name);


-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class ADD status VARCHAR(64) NOT NULL;

ALTER TABLE class
ADD CONSTRAINT chk_status check (status IN ('not-started', 'ongoing', 'finished'));


