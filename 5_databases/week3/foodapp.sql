USE meal_sharing_db

CREATE TABLE meal(
 id INT AUTO_INCREMENT PRIMARY KEY,
 title varchar(255) NOT NULL,
 description TEXT, 
 location VARCHAR(255) NOT NULL,
 meal_time DATETIME,
 max_reservations INT NOT NULL,
 price DECIMAL(6,2) NOT NULL,
 created_date DATE NOT NULL
)

CREATE TABLE reservation(
 id INT AUTO_INCREMENT PRIMARY KEY,
 number_of_guests INT NOT NULL,
 meal_id INT NOT NULL,
 created_date DATE NOT NULL,
 contact_phonenumber VARCHAR(50) NOT NULL,
 contact_name VARCHAR(50) NOT NULL,
 contact_email VARCHAR(50) NOT NULL
)

CREATE TABLE review(
 id INT AUTO_INCREMENT PRIMARY KEY,
 title  VARCHAR(50) NOT NULL,
 description TEXT,
 meal_id INT NOT NULL,
 stars INT NOT NULL,
 created_date DATE NOT NULL
)

DESC meal;
DESC reservation;
DESC review;

INSERT INTO meal ( title, description, location, meal_time, max_reservations, price, created_date)
VALUES
('Shrimp and prawn as food', 'a types of sea animals that are consumed worldwide', 'Roemoe', '2024-01-01 17:00:00', 15, 179.99,'2023-06-01' ),
('Salmon', 'a kind of fish of the North Atlantic Salmo and North Pacific Oncorhynchus basins', 'Oslo', '2023-09-21 18:00:00', 20, 220.00,'2023-06-01' ),
('Ravioli', 'a type of stuffed pasta comprising a filling enveloped in thin pasta dough', 'Rome', '2024-02-02 17:30:00', 11, 110.50,'2023-12-01' ),
('Ghorme sabzi', 'this is a khoresh, or stew, which is often called Irans famous and national dish', 'Tehran', '2024-02-14 18:30:00', 40, 250.00,'2023-11-11' ),
('Chowder', 'a thick soup prepared with milk or cream, a roux, and seafood or vegetables', 'London', '2024-01-01 17:15:00', 25, 90.00,'2023-10-01' ),
('Sushi', 'a Japanese dish of prepared vinegared rice (鮨飯, sushi-meshi), usually with some sugar and salt, plus a variety of ingredients (ねた, neta), such as vegetables, and any meat, but most commonly seafood (often raw but can be cooked)', 'New York', '2024-02-24 17:45:00', 50, 199.99,'2024-01-01' );


INSERT INTO reservation (number_of_guests, meal_id,  created_date, contact_phonenumber, contact_name, contact_email)
VALUES
(7, 4, '2024-01-01', '9121551515', 'Roza Irani', 'roz.ir2000@gmail.com'),
(2, 4, '2024-02-13', '9125550225', 'Aria Tehrani', 'alfa90.teh@gmail.com'),
(2, 1, '2023-11-11', '50352515', 'Sofia Pederson', 'sofia.pedro@icloud.com'),
(2, 6, '2024-01-02', '5187231221', 'Ali Alayi mirza', 'naturelover.4ever@gmail.com'),
(10, 5, '2023-10-10', '40452437', 'Alex Brixen', 'Alix.b97@gmail.com'),
(5, 3, '2024-01-01', '3273937003', 'MASSOMILIANO', 'badboy.4u@gmail.com'),
(1, 2, '2023-08-18', '50372430', 'Bent Damm', 'Bent.damm75@gmail.com'),
(2, 1, '2023-12-20', '42346791', 'Jakob vajen', 'jak01.vej@gmail.com'),
(4, 6, '2024-01-02', '5187321590', 'Scarlet Johanson', 'scar.joh12@gmail.com');


INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES
('Quality', 'perfect and yummy', 4, 7, '2024-02-14'),
('tast', 'delicious', 3, 5, '2024-01-02'),
('freshness', 'fresh and pleasant', 6, 6, '2024-02-24'),
('tase', 'super spicy', 5, 2, '2024-01-01');

--Meal
--Get all meals
SELECT title FROM meal;

--Add a new meal
INSERT INTO meal ( title, description, location, meal_time, max_reservations, price, created_date)
VALUES
('Spumone', 'a molded gelato made with layers of different colors and flavors, usually containing candied fruits and nuts', 'Toronto', '2024-01-27 17:00:00', 17, 69.00,'2024-01-10' );

--Get a meal with any id, fx 1
SELECT title FROM meal WHERE id = 4;

--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET title = 'Carbonara',
description = 'a pasta dish[1][2] made with eggs, hard cheese, fatty cured pork, and black pepper'
WHERE id = 3;

--Delete a meal with any id, fx 1
DELETE FROM meal WHERE id = 5;

--Reservation
--Get all reservations
SELECT * FROM reservation;

--Add a new reservation
INSERT INTO reservation (number_of_guests, meal_id,  created_date, contact_phonenumber, contact_name, contact_email)
VALUES
(3, 2, '2023-07-25', '37543798', 'Helena Hashemi', 'helena.hme69@gmail.com');

--Get a reservation with any id, fx 1
SELECT * FROM reservation WHERE id = 4;

--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation SET
contact_name = 'David Harvi',
contact_email = 'david.harvi26@icloud.com',
contact_phonenumber = '5187235020'
WHERE meal_id = 6;

--Delete a reservation with any id, fx 1
DELETE FROM reservation WHERE id = 5;

--Review
--Get all reviews
SELECT * FROM review;

--Add a new review
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES
('Quality', 'poor quality and stale', 1, 0, '2024-01-01');

--Get a review with any id, fx 1
SELECT * FROM review WHERE id = 5;

--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review SEt 
title = 'flaver of food',
description = 'tastless'
WHERE id = 7;

UPDATE review SEt 
title = 'flaver of food',
description = 'tastless'
WHERE id = 2;

--Delete a review with any id, fx 1
DELETE FROM review WHERE id = 2;

--Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal WHERE price <= 200;

