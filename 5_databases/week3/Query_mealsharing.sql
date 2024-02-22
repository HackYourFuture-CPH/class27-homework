-- Active: 1706443440629@@127.0.0.1@3306@mealsharing
CREATE DATABASE mealsharing;

CREATE TABLE meal (
    `id` INT(10) UNSIGNED NOT NULL,
    `title` VARCHAR(225),
    `description` TEXT,
    `location` VARCHAR(225),
    `when` DATETIME,
    `max_reservations` INT(10),
    `price` DECIMAL,
    `created_date` DATE,
     CONSTRAINT meal_pk PRIMARY KEY (`id`)
)

CREATE TABLE reservation(
    `id` INT(10) NOT NULL,
    `number_of_guests` INT(10),
    `meal_id` INT(10) UNSIGNED NOT NULL,
    `created_date` DATE,
    `contact_phonenumber` VARCHAR(225),
    `contact_name` VARCHAR(225),
    `contact_email` VARCHAR(225),
    CONSTRAINT meal_rk FOREIGN KEY (`meal_id`) REFERENCES meal (id)
);

CREATE TABLE review (
    `id` INT(10) NOT NULL,
    `title` VARCHAR(225),
    `description`h TEXT,
    `meal_id` INT(10) UNSIGNED NOT NULL,
    `stars` INT(10),
    `created_date` DATE,
    CONSTRAINT meal_fk FOREIGN KEY (meal_id) REFERENCES meal (id)
);

INSERT INTO meal (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES
(1, 'kebab', 'This is a famous persion food', 'Aalborg', '2024-01-28 05:30:00', 25, 120.45, '2022-12-29'),
(2, 'nugget', 'chiken with cheez and mayo souce', 'Aarhus', '2024-01-23 06:30:00', 5, 50.45, '2022-12-11'),
(3, 'burger', 'Cow meat with salad and french fries', 'Copenhagen', '2024-01-22 12:30:00', 3, 90.55, '2022-11-15'),
(4, 'omelet', 'egg with sussage', 'Vejle', '2024-01-21 13:30:00', 40, 20.95, '2022-12-27'),
(5, 'chicken sandwich', 'chicken with sauce', 'Løgstør', '2024-01-18 13:30:00', 15, 65.95, '2022-12-28'),
(6, 'Rød grød med fløde', 'grød and fløde with honey and sugger', 'Aarhus', '2024-01-19 12:45:00', 40, 45.00, '2022-11-07');

SELECT * FROM meal;

INSERT INTO reservation (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES
(1, 4, 1, '2023-11-01', '71341197', 'Olesia', 'olesiah@gmail.com'),
(2, 5, 3, '2023-12-02', '21314151', 'Mango Balsamo', 'mango@gmail.com'),
(3, 3, 4, '2023-10-03', '22334455', 'Mila Eliman', 'kivi@gmail.com'),
(4, 6, 5, '2023-09-07', '20304050', 'Morten Friman', 'morgenfri@gmail.com'),
(5, 4, 2, '2023-08-05', '20203030', 'Gabriel Sonari', 'gabrielson@gmail.com');

SELECT * FROM review;

INSERT INTO review (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES 
(1, 'meal quality', 'The quality of material, taste and freshness was excellent', 1, 10, '2024-02-01'),
(2, 'cleanness', 'The host''s house and kitchen were clean and the meal was good but a little bit salty', 4, 9, '2024-02-02'),
(3, 'Too spicy', 'Our burgers didn''t tase good and there were too spicy for me', 3, 5, '2024-02-03'),
(4, 'so delicious', 'Our meal was perfect', 5, 10, '2024-02-04');

-- Meal
-- Get all meals
SELECT * FROM meal;

-- Add a new meal
SELECT * 
FROM meal 
WHERE (`when` >= '2024-01-22 13:00:00');

-- Get a meal with any id, fx 1

SELECT *
FROM meal
WHERE id=3;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE meal
SET `title` = 'king burger', `location` = 'Fredericia', `max_reservations`=50
WHERE `id`=3;

-- Delete a meal with any id, fx 1
DELETE FROM meal WHERE `id`=5;

-- Reservation
-- Queries to write
-- Get all reservations

SELECT * FROM reservation;

-- Add a new reservation
INSERT INTO reservation (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES (7, 3, 2, '2024-02-17', '87878787', 'Mango', 'mango@gmail.com');

-- Get a reservation with any id, fx 1
SELECT * FROM reservation
WHERE id=4;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET `number_of_guests`=9, `contact_name`='Nicolas'
WHERE id=2;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation WHERE id=1;

-- Review
-- Queries to write
-- Get all reviews

SELECT * FROM review;

-- Add a new review
INSERT INTO review 
VALUE (5, 'smachno', 'very good taste, delecious', 3, 10, '2024-02-17');

-- Get a review with any id, fx 1
SELECT * FROM review
WHERE id=3;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET `title` = 'Little spicy', `stars`=8
WHERE id=3;

-- Delete a review with any id, fx 1
DELETE FROM review WHERE `id`=7;


-- Additional queries
-- Functionality
-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal
WHERE `price`<90;

-- Get meals that still has available reservations
SELECT meal.title, max_reservations, sum(reservation.number_of_guests) as `total_reservations`
FROM meal
JOIN reservation on meal.id=reservation.meal_id
WHERE max_reservations>total_reservations
GROUP BY meal_id;
-- WHERE max_reservations >= 8;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT *
FROM meal
WHERE meal.title LIKE 'Rød grød med%%'

-- Get meals that has been created between two dates
SELECT * FROM meal
WHERE (created_date>='2022-12-11' AND created_date<'2022-12-29');

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal
ORDER BY id LIMIT 5;

-- Get the meals that have good reviews
SELECT meal.id, meal.title, review.stars FROM meal
JOIN review ON meal.id=review.meal_id 
WHERE review.stars>7;

-- Get reservations for a specific meal sorted by created_date
SELECT  meal.id, meal.title, reservation.created_date, reservation.number_of_guests, reservation.contact_name
FROM reservation
JOIN meal ON meal_id=meal.id
WHERE meal.title LIKE '%nugget%'
ORDER BY created_date DESC;

-- Sort all meals by average number of stars in the reviews
SELECT meal.title, sum(review.stars), sum(review.stars)/COUNT(review.stars) as `average_stars`
FROM meal
JOIN review on meal.id=review.meal_id
GROUP BY meal_id
ORDER BY average_stars desc;
