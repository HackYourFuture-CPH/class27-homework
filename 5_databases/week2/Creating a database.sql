-- Active: 1707334336522@@localhost@3306
CREATE DATABASE registrationForm CHARACTER SET = 'utf8mb4';

use registrationForm;

-- Create Students table
CREATE TABLE Students (
    student_id INT PRIMARY KEY AUTO_INCREMENT, Name VARCHAR(255), Address VARCHAR(255), email VARCHAR(255), Parent_ID INT, FOREIGN KEY (Parent_ID) REFERENCES Parents (Parent_ID)
);

-- Create Registration table
CREATE TABLE Registration (
    Registration_id INT PRIMARY KEY AUTO_INCREMENT, Type VARCHAR(255), Registration_date DATE, Student_ID INT, Course_ID INT, Staff_ID INT, FOREIGN KEY (Student_ID) REFERENCES Students (student_id), FOREIGN KEY (Course_ID) REFERENCES Course (course_id), FOREIGN KEY (Staff_ID) REFERENCES Staff (staff_id)
);

-- Create Parents table
CREATE TABLE Parents (
    Parent_ID INT PRIMARY KEY AUTO_INCREMENT, Parent_name VARCHAR(255), Par_Phone VARCHAR(255)
);

-- Create Course table
CREATE TABLE Course (
    course_id INT PRIMARY KEY AUTO_INCREMENT, Name VARCHAR(255)
);

-- Create Staff table
CREATE TABLE Staff (
    staff_id INT PRIMARY KEY AUTO_INCREMENT, staff_Name VARCHAR(255)
);