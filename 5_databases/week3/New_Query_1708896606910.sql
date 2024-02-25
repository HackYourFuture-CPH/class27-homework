-- Active: 1707334336522@@localhost@3306@meal_sharing
-- Create the Reservation table
CREATE TABLE Reservation (
    id INT PRIMARY KEY, number_of_guests INT, meal_id INT, created_date DATE, contact_phonenumber VARCHAR(255), contact_name VARCHAR(255), contact_email VARCHAR(255), FOREIGN KEY (meal_id) REFERENCES Meal (id)
);

-- Create the Meal table
CREATE TABLE Meal (
    id INT PRIMARY KEY, title VARCHAR(255), description TEXT, location VARCHAR(255), meal_datetime DATETIME, max_reservations INT, price DECIMAL(10, 2), created_date DATE
);

-- Create the Review table
CREATE TABLE Review (
    id INT PRIMARY KEY, title VARCHAR(255), description TEXT, meal_id INT, stars INT, created_date DATE, FOREIGN KEY (meal_id) REFERENCES Meal (id)
);

-- Insert sample data into the Meal table
INSERT INTO
    Meal (
        id, title, description, location, meal_time, max_reservations, price, created_date
    )
VALUES (
        1, 'Italian Feast', 'A delicious Italian meal with pasta, pizza, and tiramisu.', '123 Main St', '2024-02-25 18:00:00', 10, 25.99, '2024-02-24'
    ),
    (
        2, 'Sushi Night', 'Fresh sushi rolls with sashimi and miso soup.', '456 Elm St', '2024-03-01 19:30:00', 8, 35.50, '2024-02-20'
    ),
    (
        3, 'Mexican Fiesta', 'Tacos, enchiladas, and margaritas!', '789 Oak St', '2024-03-05 17:00:00', 12, 20.75, '2024-02-15'
    ),
    (
        4, 'BBQ Party', 'Grilled burgers, hot dogs, and barbecue ribs.', '321 Pine St', '2024-03-10 16:00:00', 15, 18.99, '2024-02-28'
    ),
    (
        5, 'Vegan Dinner', 'Plant-based dishes including tofu stir-fry and quinoa salad.', '555 Maple St', '2024-03-15 18:30:00', 10, 22.50, '2024-02-25'
    ),
    (
        6, 'Seafood Extravaganza', 'Fresh seafood platters with lobster, shrimp, and crab legs.', '777 Walnut St', '2024-03-20 19:00:00', 12, 45.75, '2024-03-01'
    );

-- Insert sample data into the Reservation table
INSERT INTO
    Reservation (
        id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email
    )
VALUES (
        1, 3, 1, '2024-02-24', '123-456-7890', 'John Doe', 'john@example.com'
    ),
    (
        2, 2, 2, '2024-02-23', '987-654-3210', 'Jane Smith', 'jane@example.com'
    ),
    (
        3, 5, 3, '2024-02-20', '111-222-3333', 'Alice Johnson', 'alice@example.com'
    ),
    (
        4, 4, 4, '2024-03-01', '444-555-6666', 'Bob Williams', 'bob@example.com'
    ),
    (
        5, 3, 5, '2024-02-28', '777-888-9999', 'Emily Brown', 'emily@example.com'
    ),
    (
        6, 2, 6, '2024-03-05', '999-888-7777', 'Michael Davis', 'michael@example.com'
    );

-- Insert sample data into the Review table
INSERT INTO
    Review (
        id, title, description, meal_id, stars, created_date
    )
VALUES (
        1, 'Fantastic Meal!', 'The Italian Feast was amazing. Highly recommend!', 1, 5, '2024-02-26'
    ),
    (
        2, 'Great Sushi', 'Sushi Night was fantastic. Fresh fish and great service.', 2, 4, '2024-03-02'
    ),
    (
        3, 'Delicious Tacos!', 'The Mexican Fiesta was fantastic. Best tacos ever!', 3, 5, '2024-02-22'
    ),
    (
        4, 'Great BBQ', 'The BBQ Party was awesome. Loved the ribs!', 4, 4, '2024-03-11'
    ),
    (
        5, 'Good Vegan Options', 'The Vegan Dinner had great options. Tofu stir-fry was delicious.', 5, 4, '2024-03-01'
    ),
    (
        6, 'Amazing Seafood', 'Seafood Extravaganza blew my mind. Fresh lobster was divine!', 6, 5, '2024-03-21'
    );

-- Queries
-- Get all meals
-- Add a new meal
-- Get a meal with any id, fx 1
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
-- Delete a meal with any id, fx 1
SELECT * FROM Meal;

INSERT INTO
    Meal (
        title, description, location, meal_datetime, max_reservations, price, created_date
    )
VALUES (
        'New Meal Title', 'Description of the new meal', 'Location of the new meal', '2024-02-24 18:00:00', 10, 29.99, '2024-02-24'
    );

SELECT * FROM Meal WHERE id = 1;

UPDATE Meal
SET
    title = 'New Title',
    description = 'New Description',
    price = 39.99
WHERE
    id = 1;

DELETE FROM Meal WHERE id = 1;

-- Get all reservations
-- Add a new reservation
-- Get a reservation with any id, fx 1
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
-- Delete a reservation with any id, fx 1

SELECT * FROM Reservation;

INSERT INTO
    Reservation (
        number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email
    )
VALUES (
        3, 1, '2024-02-24', '123-456-7890', 'John Doe', 'john@example.com'
    );

SELECT * FROM Reservation WHERE id = 1;

UPDATE Reservation
SET
    number_of_guests = 4,
    contact_name = 'Jane Doe'
WHERE
    id = 1;

DELETE FROM Reservation WHERE id = 1;

-- Get all reviews
-- Add a new review
-- Get a review with any id, fx 1
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
-- Delete a review with any id, fx 1

SELECT * FROM Review;

SELECT * FROM Review;

SELECT * FROM Review WHERE id = 1;

UPDATE Review SET title = 'Amazing Food', stars = 4 WHERE id = 1;

DELETE FROM Review WHERE id = 1;

-- Additional queries

SELECT * FROM Meal WHERE price < 35;

SELECT Meal.title, Meal.max_reservations, SUM(Reservation.number_of_guests) AS total_reservations
FROM Meal
    JOIN Reservation ON Meal.id = Reservation.meal_id
GROUP BY
    Reservation.meal_id
HAVING
    Meal.max_reservations > SUM(Reservation.number_of_guests);

SELECT * FROM Meal WHERE title LIKE '%italian%';

SELECT *
FROM Meal
WHERE
    created_date BETWEEN '2024-02-16' AND '2024-02-28';

SELECT * FROM Meal LIMIT 5;

SELECT m.*
FROM Meal m
    JOIN Review r ON m.id = r.meal_id
WHERE
    r.stars >= 5;

SELECT *
FROM Reservation
WHERE
    meal_id = 1
ORDER BY created_date;

SELECT m.*, AVG(r.stars) AS avg_stars
FROM Meal m
    LEFT JOIN Review r ON m.id = r.meal_id
GROUP BY
    m.id
ORDER BY avg_stars DESC;