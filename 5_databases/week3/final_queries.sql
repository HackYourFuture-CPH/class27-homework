CREATE DATABASE meal_sharing
    DEFAULT CHARACTER SET = 'utf8mb4';

USE meal_sharing;
 
-- Create table for meals
CREATE TABLE meal(
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description text NOT NULL,
    location VARCHAR(255) NOT NULL,
    meal_time datetime,
    max_reservations int NOT NULL,
    price decimal(6, 2) NOT NULL,
    created_date date,
    PRIMARY KEY (id)
);

-- Create table for reservations
CREATE TABLE reservation(
    id INT AUTO_INCREMENT,
    number_of_guests INT,
    meal_id INT,
    created_date DATE,
    contact_phonenumber VARCHAR(20),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255),
    FOREIGN KEY (meal_id) REFERENCES meal(id),
    PRIMARY KEY (id)
);

-- Create table for reviews
CREATE TABLE review(
    id INT AUTO_INCREMENT,
    title varchar(255),
    description text,
    meal_id int,
    stars int,
    created_date date,
    FOREIGN KEY (meal_id) REFERENCES meal(id),
    PRIMARY KEY (id)
);

-- Insert into meal table

INSERT INTO meal (title, description, location, meal_time, max_reservations, price, created_date) VALUES ('Pizza', 'Pizza with local ingredients from Fanø', 'Fanø', '2024-04-04 18:00:00', 2, 215, '2024-02-19');

INSERT INTO meal (title, description, location, meal_time, max_reservations, price, created_date) VALUES ('Pink Pizza', 'Secret recipe with beetroot and cheese', 'Fanø', '2024-04-05 18:00:00', 2, 215, '2024-02-19');


-- Insert into reservation table

INSERT INTO reservation(number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES (1, 1, '2024-02-28', '1234567', 'Jakob E.', 'jakobe@gmail.com');
 
-- INSERT INTO reservation(number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES (2, 2, '2024-02-28', '1234567', 'Jakob E.', 'jakobe@gmail.com');
 
INSERT INTO reservation(number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES (2, 2, '2024-03-08', '1234567', 'Rasmus K.', 'rasmusk@gmail.com');


-- Insert into review table

INSERT INTO review (title, description, meal_id, stars, created_date) VALUES ('The best pizza ever', 'I have tasted the most delicious pizza of my life.', 1, 5, '2024-04-04');

INSERT INTO review (title, description, meal_id, stars, created_date) VALUES ('My first pink pizza😻', 'For the first time in my life, I have tasted a pink pizza an di love it!', 2, 5, '2024-04-05');


-- Meal Queries

-- Get all meals
SELECT * FROM meal;

-- Add a new meal
INSERT INTO meal (title, description, location, meal_time, max_reservations, price, created_date) VALUES ('Ruby Chocolate Bars', 'Experimental chocolate with Ruby chocolate beans.', 'Horsens', '2024-04-12 16:00:00', 6, 50, '2024-02-19');

-- Get a meal with any id, fx 1
SELECT * FROM meal
WHERE id=1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET title = 'Special Pizza', description = 'A special pizza with local ingredients from Fanø'
WHERE id=1;

-- Delete a meal with any id, fx 1
-- DELETE FROM meal WHERE id=1;


-- Resevartion Queries

-- Get all reservations
SELECT * FROM reservation;

-- Add a new reservation
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES (4, 3, '2024-02-20', '3456789', 'Gizem S.', 'gizem@gmail.com');

-- Get a reservation with any id, fx 1
SELECT * FROM reservation
WHERE id=1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET contact_name = 'Gorm Den Gamle', contact_phonenumber = '1234567'
WHERE id=3;

-- Delete a reservation with any id, fx 1
-- DELETE FROM reservation WHERE id=2;

-- Review Queries

-- Get all reviews
SELECT * FROM review;

-- Add a new review
INSERT INTO review (title, description, meal_id, stars, created_date) VALUES ('Love the experiment', 'I love the quality of the homemade chocolate.', 3, 5, '2024-04-12');

-- Get a review with any id, fx 1
SELECT * FROM review
WHERE id = 3;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET stars = 4, created_date = '2024-02-17'
WHERE id=3;

-- Delete a review with any id, fx 1
-- DELETE FROM review WHERE id=1;


-- Functionality Queries

-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal
WHERE price < 80;

-- Get meals that still has available reservations
SELECT meal.id, meal.title, meal.description, meal.location, meal.meal_time 
FROM meal
LEFT JOIN reservation ON meal.id = reservation.meal_id
GROUP BY meal.id LIMIT 100;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT *
FROM meal
WHERE title LIKE '%Ruby%';

-- Get meals that has been created between two dates
SELECT *
FROM meal
WHERE created_date BETWEEN '2024-02-17' AND '2024-02-22';

-- Get only specific number of meals fx return only 5 meals
SELECT *
FROM meal
LIMIT 2;

-- Get the meals that have good reviews
SELECT meal.title, meal.description, meal.location, review.stars
FROM meal
LEFT JOIN review ON meal.id = review.meal_id
WHERE stars > 4 LIMIT 100;

-- Get reservations for a specific meal sorted by created_date 
SELECT *
FROM reservation
WHERE meal_id = 1
ORDER BY created_date LIMIT 100;

-- Sort all meals by average number of stars in the reviews
SELECT meal.id, meal.title, meal.description, meal.location, avg(review.stars) AS average_rate
FROM meal
LEFT JOIN review ON meal.id = review.meal_id
GROUP BY meal.id
ORDER BY average_rate;
