--School database
USE school;

--craete a 'class' table with the columns: id, name, begins (date), ends (date)
CREATE TABLE class(
    class_id INT PRIMARY KEY AUTO_INCREMENT,
    class_name VARCHAR(50) NOT NULL,
    begins DATE NOT NULL,
    ends DATE NOT NULL
)

--create a 'student' table with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE student(
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(50) NOT NULL,
    email  VARCHAR(50) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    class_id INT
)

--Create an index on the name column of the student table.
CREATE INDEX index_student_name ON student(student_name);

--Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class ADD COLUMN status ENUM ('not-started', 'ongoing', 'finished') NOT NULL;

