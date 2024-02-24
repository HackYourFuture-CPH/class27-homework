Create DATABASE mealsharing;

USE mealsharing;

CREATE TABLE meal (
 `id` INT(10) NOT NULL AUTO_INCREMENT,
 `title` varchar(255) NOT NULL,
 `description` TEXT, 
 `location` VARCHAR(255) NOT NULL,
 `when` DATETIME,
 `max_reservations` INT NOT NULL,
 `price` DECIMAL NOT NULL,
 `created_date` DATE NOT NULL
)

CREATE TABLE reservation (
 `id` INT AUTO_INCREMENT PRIMARY KEY,
 `number_of_guests` INT NOT NULL,
 `meal_id` INT NOT NULL,
 `created_date` DATE NOT NULL,
 `contact_phonenumber` VARCHAR(50) NOT NULL,
 `contact_name` VARCHAR(50) NOT NULL,
 `contact_email` VARCHAR(50) NOT NULL,
 FOREIGN KEY (`meal_id`) REFERENCES meal (id)
)

CREATE TABLE review (
 `id` INT AUTO_INCREMENT PRIMARY KEY,
 `title`  VARCHAR(50) NOT NULL,
 `description` TEXT,
 `meal_id` INT NOT NULL,
 `stars` INT NOT NULL,
 `created_date` DATE NOT NULL,
 FOREIGN KEY (`meal_id`) REFERENCES meal (id)
)

INSERT INTO meal (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES
(1, 'Mashed potato', 'This is a dish made by mashing boiled or steamed potatoes, usually with added milk, butter, salt and pepper.', 'Sonderborg', '2024-02-23 05:34:00', 15, 50, '2023-12-12'),
(2, 'Surnuku', 'This is tortilla with cheese and spices', 'Augustenborg', '2024-02-22 04:34:00', 23, 40, '2023-11-12'),
(3, 'Omelette', 'This is dish made from eggs', 'Aabenra', '2024-02-12 02:14:00', 13, 30, '2022-11-12'),
(4, 'Nuggets', 'This is a food product consisting of a small piece of deboned chicken meat that is breaded or battered, then deep-fried or baked', 'Aabenra', '2024-02-02 18:14:00', 20, 20, '2020-11-05'),
(5, 'Pancake', 'This is a flat cake, often thin and round', 'Kolding', '2024-02-14 06:34:00', 33, 40, '2021-05-29'),
(6, 'Rød grød med fløde', 'This is a German meat dish made of slices of meat from the rib area', 'Gording', '2024-02-07 18:34:00', 18, 10, '2020-03-18');


INSERT INTO reservation (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES
(1, 4, 3, '2024-02-14', '23232323', 'Ihor', 'ihor@gmail.com'),
(2, 3, 6, '2024-02-14', '34343434', 'Thor', 'thor@gmail.com'),
(3, 2, 5, '2024-02-14', '45454545', 'Line', 'line@gmail.com'),
(4, 2, 2, '2024-02-14', '56565656', 'Jakob', 'jakob@gmail.com');


INSERT INTO review (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES 
(1, 'marvelous', 'Very tasty breakfast, thank you!', 3, 10, '2024-02-15'),
(2, 'deliciousness', 'Real meat', 6, 10, '2024-02-15'),
(3, 'sweet', 'Very soft and tasty', 5, 9, '2024-02-16');

------------------Meal----------------------

-- Get all meals
SELECT * FROM meal;

-- Add a new meal
INSERT INTO meal (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES
(8, 'Kebab', 'This is a roasted meat that originates from the Middle East', 'Hamburg', '2024-02-14 20:30:00', 10, 60, '2021-07-07');

-- Get a meal with any id, fx 1
SELECT * FROM meal WHERE id = 5;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal SET `title` = 'Bananas'
WHERE id=7;

-- Delete a meal with any id, fx 1
DELETE FROM meal WHERE id=8;

-------------------Reservation--------------------

-- Get all reservations
SELECT * FROM reservation;

-- Add a new reservation
INSERT INTO reservation (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES
(5, 6, 1, '2024-02-15', '67676767', 'Luna', 'luna@gmail.com');

-- Get a reservation with any id, fx 1
SELECT * FROM reservation WHERE id=5;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation SET `meal_id` = 2 WHERE id=4;

-- Delete a reservation with any id, fx 1

DELETE FROM reservation WHERE id=1;

-------------------Review----------------------

-- Get all reviews
SELECT * FROM review;

-- Add a new review
INSERT INTO review (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES 
(4, 'super-puper', 'Very good food!', 7, 10, '2024-02-17');

-- Get a review with any id, fx 1
SELECT * FROM review WHERE id=3;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review SET `title` = 'I feel bad', `stars` = 1 WHERE id=4;

-- Delete a review with any id, fx 1
DELETE FROM review WHERE id=4;

----------------------Functionality-------------------------

-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal WHERE `price` < 30;

-- Get meals that still has available reservations
SELECT m.*
FROM meal m
LEFT JOIN (
    SELECT meal_id, COUNT(*) AS total_reservations
    FROM reservation
    GROUP BY meal_id
) r ON m.id = r.meal_id
WHERE r.total_reservations < m.max_reservations;


-- Get meals that partially match a title. "Rød grød med" will match the meal with the title "Rød grød med fløde"
SELECT * FROM meal WHERE `title` LIKE '%Rød grød med%';

-- Get meals that has been created between two dates
SELECT * FROM meal
WHERE (created_date > '2020-06-01' AND created_date < '2021-08-01');

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal ORDER BY id LIMIT 5;

-- Get the meals that have good reviews
SELECT * FROM meal
JOIN review ON review.meal_id = meal.id
WHERE stars = 9;

-- Get reservations for a specific meal sorted by created_date
SELECT * FROM reservation WHERE meal_id = 1 ORDER BY created_date;

-- Sort all meals by average number of stars in the reviews
SELECT * FROM review ORDER BY stars DESC;

-------------------- El fin de la comedia --------------------