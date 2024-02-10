CREATE TABLE Book (
    book_id INT PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    publication_year INT
);

CREATE TABLE Genre (
    genre_id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE Rack (
    rack_id INT PRIMARY KEY,
    location VARCHAR(100)
);

CREATE TABLE Member (
    member_id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(255)
);

CREATE TABLE Borrowing_Log (
    log_id INT PRIMARY KEY,
    book_id INT,
    member_id INT,
    borrow_date DATE,
    return_date DATE,
    FOREIGN KEY (book_id) REFERENCES Book(book_id),
    FOREIGN KEY (member_id) REFERENCES Member(member_id)
);

CREATE TABLE Book_Genre (
    book_id INT,
    genre_id INT,
    PRIMARY KEY (book_id, genre_id),
    FOREIGN KEY (book_id) REFERENCES Book(book_id),
    FOREIGN KEY (genre_id) REFERENCES Genre(genre_id)
);

CREATE TABLE Book_Rack (
    book_id INT,
    rack_id INT,
    PRIMARY KEY (book_id, rack_id),
    FOREIGN KEY (book_id) REFERENCES Book(book_id),
    FOREIGN KEY (rack_id) REFERENCES Rack(rack_id)
);
