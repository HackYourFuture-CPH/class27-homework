-- Active: 1706440038860@@127.0.0.1@3307
CREATE DATABASE meal_sharing DEFAULT CHARACTER SET = 'utf8mb4';

use meal_sharing;

CREATE TABLE Meal (
    id INT PRIMARY KEY AUTO_INCREMENT, title VARCHAR(255) NOT NULL, description TEXT, location VARCHAR(255) NOT NULL, price DECIMAL(10, 2) NOT NULL, `when` DATETIME DEFAULT CURRENT_TIMESTAMP, max_reservations INT NOT NULL, created_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Reservation (
    id INT PRIMARY KEY AUTO_INCREMENT, number_of_guests INT NOT NULL, meal_id INT NOT NULL, created_date DATETIME DEFAULT CURRENT_TIMESTAMP, contact_phonenumber VARCHAR(255) NOT NULL, contact_name VARCHAR(255) NOT NULL, contact_email VARCHAR(255), FOREIGN KEY (meal_id) REFERENCES Meal (id)
);

CREATE TABLE Review (
    id INT PRIMARY KEY AUTO_INCREMENT, title VARCHAR(255) NOT NULL, description TEXT, meal_id INT NOT NULL, stars INT NOT NULL, created_date DATETIME DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (meal_id) REFERENCES Meal (id)
);

INSERT INTO
    Meal (
        title, description, location, `when`, max_reservations, price, created_date
    )
VALUES (
        'Pizza', 'Delicious', '123 Main St', '2024-09-02 09:00:00', 10, 10.99, '2024-08-02 12:00:00'
    ),
    (
        'Pasta Bolognese', 'Tasty', '456 Main St', '2024-09-02 12:00:00', 10, 9.99, '2024-08-02 12:00:00'
    ),
    (
        ' Greek Salad', 'Healthy', '789 Main St', '2024-10-02 13:00:00', 10, 8.99, '2024-10-02 17:05:04'
    ),
    (
        'Fish n Chips', 'Fastfood', '123 Main St', '2024-07-02 12:10:00', 10, 12.99, '2024-08-02 14:45:00'
    ),
    (
        ' Chocolate Brawnie', 'Desert', '321 Main St', '2024-10-02 11:30:00', 8, 15.99, '2024-10-02 15:30:00'
    ),
    (
        'Chicken Shawarma', 'Fastfood', '456 Main St', '2024-11-02 10:45:00', 7, 9.99, '2024-09-02 12:55:03'
    );

INSERT INTO
    Reservation (
        number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email
    )
VALUES (
        2, 1, '2024-08-02 12:00:00', '1234567890', 'John Larsen', 'larsen@example.com'
    ),
    (
        3, 2, '2024-08-02 12:00:00', '1334566890', 'Anna Smith', 'smith@example.com'
    ),
    (
        4, 3, '2024-10-02 17:05:04', '1234567890', 'Amanda Doe', 'doe@example.com'
    ),
    (
        1, 4, '2024-08-02 14:45:00', '1234567890', 'John Doe', 'doejohn@example.com'
    ),
    (
        5, 5, '2024-10-02 15:30:00', '1234567890', 'Jane Red', 'jane@example.com'
    ),
    (
        2, 6, '2024-09-02 12:55:03', '1234567890', 'Frederik Jensen', 'jensen@example.com'
    );

INSERT INTO
    Review (
        title, description, meal_id, stars, created_date
    )
VALUES (
        'Trully italian pizza', 'Pizza was delicious, highly recommended', 1, 5, '2024-08-02 12:00:00'
    ),
    (
        'Deliciose pasta', 'Pasta was delicious, definitely recommend to try', 2, 4, '2024-08-02 12:00:00'
    ),
    (
        'Amazing salad', 'Amazing options for healthy food', 3, 5, '2024-10-02 17:05:04'
    ),
    (
        'Good food', 'It is one of the best fish and chips in the city', 4, 4, '2024-08-02 14:45:00'
    ),
    (
        'Tasty desert', 'Good desert, but not the best', 5, 3, '2024-10-02 15:30:00'
    ),
    (
        'Best of the best', 'This is my favourite sawarma in the city, I recommend', 6, 5, '2024-09-02 12:55:03'
    );