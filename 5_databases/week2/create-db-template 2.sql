-- Active: 1706440038860@@127.0.0.1@3307
CREATE DATABASE books DEFAULT CHARACTER SET = 'utf8mb4';

use books;

CREATE TABLE book (
    book_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, publication_year INT, genre_id INT, FOREIGN KEY (genre_id) REFERENCES genre (genre_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE genre (
    genre_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL
);

CREATE TABLE author (
    author_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL
);

CREATE TABLE book_author (
    book_id INT NOT NULL AUTO_INCREMENT, author_id INT, PRIMARY KEY (book_id, author_id), FOREIGN KEY (book_id) REFERENCES book (book_id) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (author_id) REFERENCES author (author_id) ON DELETE CASCADE ON UPDATE CASCADE
);

SHOW TABLES;

INSERT INTO
    author (author_id, name)
VALUES (1, 'J.K. Rowling'),
    (2, 'Agata Christie'),
    (3, 'Herman Melville'),
    (4, 'Charles Dickens'),
    (5, 'Jane Austen');

INSERT INTO
    book (
        book_id, title, publication_year, genre_id
    )
VALUES (
        1, 'Harry Potter and the Philosopher''s Stone', 1997, 1
    ),
    (
        2, 'Murder on the Orient Express', 1934, 2
    ),
    (3, 'Moby-Dick', 1851, 3),
    (
        4, 'A Tale of Two Cities', 1859, 5
    ),
    (
        5, 'Pride and Prejudice', 1813, 5
    );

INSERT INTO
    genre (genre_id, name)
VALUES (1, 'Fantasy'),
    (2, 'Mystery'),
    (3, 'Fiction'),
    (4, 'Horror'),
    (5, 'Romance');

INSERT INTO
    book_author (book_id, author_id)
VALUES (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5);

SELECT * FROM author;

SELECT * FROM book;

SELECT * FROM genre;

SELECT * FROM book_author;

SELECT
    ba.book_id, -- ba - book_author -> book_id
    b.title AS book_title, -- b - book -> title
    a.name AS author_name,
    g.name AS genre_name
FROM
    book_author ba
    JOIN book b ON ba.book_id = b.book_id
    JOIN author a ON ba.author_id = a.author_id
    JOIN genre g ON b.genre_id = g.genre_id;