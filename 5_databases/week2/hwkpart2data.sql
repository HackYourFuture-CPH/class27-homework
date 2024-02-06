-- Active: 1706445451493@@127.0.0.1@3306@School_database
CREATE TABLE school_class (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    start_date DATE,
    end_date DATE,
    status ENUM('not-started', 'on-going', 'finished') DEFAULT 'not-started'
);

CREATE TABLE school_Student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(20),
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES school_class(id)
);

CREATE INDEX idx_student_name ON school_Student (name);

INSERT INTO school_class (id, name, start_date, end_date, status) VALUES
    (1, 'Language', '2024-03-03', '2024-04-04', 'on-going'),
    (2, 'Science', '2024-01-01', '2024-02-02', 'finished'),
    (3, 'History', '2024-02-02', '2024-03-03', 'on-going'),
    (4, 'Algebra', '2024-05-05', '2024-06-07', 'not-started');

    INSERT INTO `school_Student` (id, name, email, phone, class_id) VALUES
    (1, 'Samuel Smith', 'samuelsmith@example.com', '746211153', 1),
    (2, 'Janneh Jones', 'jannehjones@example.com', '53262153', 1),
    (3, 'Sharon Stones', 'sharonstones@example.com', '31268653', 3),
    (4, 'Sam Smith', 'samsmith@example.com', '74432153', 3);

SELECT * FROM school_class;
 SELECT * FROM `school_Student`;

 SHOW INDEX FROM school_Student;

 SHOW INDEX FROM school_Student WHERE Key_name = 'primary';

 --just reference to LUCID Doc--

 SELECT 'mysql' dbms,t.TABLE_SCHEMA,t.TABLE_NAME,c.COLUMN_NAME,c.ORDINAL_POSITION,c.DATA_TYPE,c.CHARACTER_MAXIMUM_LENGTH,n.CONSTRAINT_TYPE,k.REFERENCED_TABLE_SCHEMA,k.REFERENCED_TABLE_NAME,k.REFERENCED_COLUMN_NAME FROM INFORMATION_SCHEMA.TABLES t LEFT JOIN INFORMATION_SCHEMA.COLUMNS c ON t.TABLE_SCHEMA=c.TABLE_SCHEMA AND t.TABLE_NAME=c.TABLE_NAME LEFT JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE k ON c.TABLE_SCHEMA=k.TABLE_SCHEMA AND c.TABLE_NAME=k.TABLE_NAME AND c.COLUMN_NAME=k.COLUMN_NAME LEFT JOIN INFORMATION_SCHEMA.TABLE_CONSTRAINTS n ON k.CONSTRAINT_SCHEMA=n.CONSTRAINT_SCHEMA AND k.CONSTRAINT_NAME=n.CONSTRAINT_NAME AND k.TABLE_SCHEMA=n.TABLE_SCHEMA AND k.TABLE_NAME=n.TABLE_NAME WHERE t.TABLE_TYPE='BASE TABLE' AND t.TABLE_SCHEMA NOT IN('INFORMATION_SCHEMA','mysql','performance_schema');