CREATE DATABASE library; 

use library;

CREATE TABLE books(
    book_id INT AUTO_INCREMENT,
    book_title VARCHAR(255),
    author VARCHAR(255),
    book_address INT,
    book_status ENUM('available', 'cheked out'),
    PRIMARY KEY(book_id),
    FOREIGN KEY(book_address) REFERENCES racks(rack_id)
);

CREATE TABLE genre(
    genre_id INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    PRIMARY KEY(genre_id)
);

CREATE TABLE book_genre(
    book_id INT,
    genre_id INT,
    PRIMARY KEY(book_id, genre_id),
    FOREIGN KEY(book_id) REFERENCES books(book_id),
    FOREIGN KEY(genre_id) REFERENCES genre(genre_id)
);

CREATE TABLE members(
    member_id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    phone INT NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY(member_id)
);

CREATE TABLE borrowing_log(
    member_id INT,
    book_id INT,
    borrow_date DATE NOT NULL,
    return_date DATE NOT NULL,
    PRIMARY KEY(member_id, book_id),
    FOREIGN KEY(member_id) REFERENCES members(member_id),
    FOREIGN KEY(book_id) REFERENCES books(book_id)
);

CREATE TABLE racks(
    rack_id INT,
    title VARCHAR(255),
    PRIMARY KEY(rack_id)
);

