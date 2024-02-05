CREATE DATABASE school;

USE school;

CREATE TABLE
    class (
        class_id INT AUTO_INCREMENT,
        class_name VARCHAR(255) NOT NULL,
        begins DATE,
        ends DATE,
        PRIMARY KEY (class_id)
    );

CREATE TABLE
    students (
        student_id INT AUTO_INCREMENT,
        student_name VARCHAR(255) NOT NULL,
        email VARCHAR(255),
        phone INT,
        class_id INT NOT NULL,
        PRIMARY KEY (student_id),
        FOREIGN KEY (class_id) REFERENCES class (class_id)
    );

--Create an index on the name column of the student table.
CREATE INDEX student_name_index ON students (student_name);

--Add a new column to the class table named status which can only have the following values
ALTER TABLE class
ADD COLUMN class_status ENUM ("not-started", "ongoing", "finished");

-- practice more
INSERT INTO
    class (class_name, begins, ends, class_status)
VALUES
    ("Javascript","2023-09-01","2024-01-15","finished"),
    ("databases","2024-01-28","2024-02-11","finished"),
    ("Node.js","2024-02-18","2024-03-15","not-started");

update class
set
    class_status = "ongoing"
where
    class_id = 2;

INSERT INTO
    students (student_name, email, phone, class_id)
VALUES
    ("Niloufar", "nilo@gmail.com", "123456", 2)