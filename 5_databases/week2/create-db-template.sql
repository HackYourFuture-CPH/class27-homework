-- Active: 1706440038860@@127.0.0.1@3307
CREATE DATABASE school_db DEFAULT CHARACTER SET = 'utf8mb4';

USE school_db;

CREATE TABLE class (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, begins_date DATE NOT NULL, ends_date DATE NOT NULL
);

CREATE TABLE student (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, class_id INT NOT NULL, FOREIGN KEY (class_id) REFERENCES class (id)
);

SELECT * FROM class;

SELECT * FROM student;