-- Active: 1706443592393@@127.0.0.1@3306@meals_sharing_db
use meals_sharing_db;

-- tables ----------------------------------

CREATE TABLE meal (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    location VARCHAR(20),
    meal_time DATETIME NOT NULL,
    max_reservations INT NOT NULL,
    price DECIMAL(5,2),
    created_date DATE,
    PRIMARY KEY (id)
);


CREATE TABLE reservation (
    id INT NOT NULL AUTO_INCREMENT,
    number_of_guests INT NOT NULL,
    meal_id INT,
    meal_title varchar(50),
    created_date DATE,
    contact_phonenumber VARCHAR(10),
    contact_name VARCHAR(20),
    contact_email VARCHAR(25),
    PRIMARY KEY(id),
    CONSTRAINT reservation_fk_meal_id FOREIGN KEY (meal_id) REFERENCES meal(id) ON DELETE CASCADE ON UPDATE CASCADE
);


create table review(
 id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
 title varchar(20),
 description text,
 meal_id int,
 stars int,
 created_date date,
 constraint review_fk_meal_id FOREIGN KEY (meal_id) REFERENCES meal(id) on delete CASCADE on update CASCADE
 );

-- ---------------------
DESCRIBE meal;
DESCRIBE reservation;
DESCRIBE review;
-- ---------------------

-- data insertion / meal table --------------
INSERT INTO meal (title, description, location, meal_time, max_reservations, price, created_date)
values
('kebab', 'This is a famous persion food', 'Aalborg', '2024-01-28 05:30:00', 30, 120.45, '2022-12-29'),
('nugget', 'chiken with cheez and mayo souce', 'Aarhus', '2024-01-23 06:30:00', 20, 50.45, '2022-12-11'),
('burger', 'Cow meat with salad and french fries', 'Copenhagen', '2024-01-22 12:30:00', 10, 90.55, '2022-11-15'),
('omelet', 'egg with sussage', 'vejle', '2024-01-21 13:30:00', 40, 20.95, '2022-12-27'),
('chicken sandwich', 'chicken with sauce', 'Løgstør', '2024-01-18 13:30:00', 15, 65.95, '2022-12-28'),
('Rød grød med fløde', 'grød and fløde with honey and sugger', 'Aars', '2024-01-19 12:45:00', 40, 45.00, '2022-11-07');

-- data insertion / reservation table ---------
INSERT INTO reservation (number_of_guests, meal_id, meal_title, created_date, contact_phonenumber, contact_name, contact_email)
values
(4, 1, 'kebab', '2023-11-01', '71341197', 'katayoun yousefzadeh', 'k.yousefzadeh@gmail.com'),
(5, 3, 'burger', '2023-12-02', '21314151', 'joseph balsamo', 'josefbal@gmail.com'),
(3, 4, 'omlet', '2023-10-03', '22334455', 'roza eliman', 'rozael@gmail.com'),
(6, 5, 'chicken sandwich', '2023-09-07', '20304050', 'morgen friman', 'morgenfri@gmail.com'),
(4, 2, 'nugget', '2023-08-05', '20203030', 'gabriel sonari', 'gabrielson@gmail.com');

INSERT INTO reservation (number_of_guests, meal_id, meal_title, created_date, contact_phonenumber, contact_name, contact_email)
values (6, 6, 'Rød grød med fløde', '2023-09-01', '24568830', 'rojhan salin', 'rojhan@gmail.com');

-- data insertion / rereview table ---------
INSERT INTO review (title, description, meal_id, stars, created_date)
values
('meal quality', 'The quality of material, taste and freshness was excellent', 1, 10, '2024-02-01 11:28:15'),
('cleanness', 'The host''s house and kitchen were clean and the meal was good but a little bit salty', 4, 9, '2024-02-02 19:03:25'),
('Too spicy', 'Our burgers didn''t tase good and there were too spicy for my child', 3, 5, '2024-02-03 19:03:25'),
('so delicious', 'Our meal was perfect', 5, 10, '2024-02-04 19:03:25');


-- ************  Meal queries  *************

--Get all meals
select title from meal;

--Add a new meal
INSERT INTO meal (title, description, location, meal_time, max_reservations, price, created_date) values
('pasta', 'pasta with pesto sauce', 'Aalborg', '2024-03-08 14:30:00', 10, 30.20, '2023-12-07');

--Get a meal with any id, fx 1
select title FROM meal
where id=3;

--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET title = 'crispy chicken sandwich',
    description = 'crispy chicken with mix sauce and corn'
WHERE id = 5;

--Delete a meal with any id, fx 1
DELETE FROM meal
where id=4;


-- *************   Reservation queries  ****************

--Get all reservations
SELECT * FROM reservation;

--Add a new reservation
INSERT INTO reservation (number_of_guests, meal_id, meal_title, created_date, contact_phonenumber, contact_name, contact_email)
values
(5, 2, 'nugget', CURDATE(), '24578990', 'lino gamira', 'liga@gmail.com');

--Get a reservation with any id, fx 1
select * FROM reservation
WHERE id=3;

--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET contact_name='rosalin nora',
contact_email='rosanora@gmail.com',
contact_phonenumber='44455544'
where id=3;

--Delete a reservation with any id, fx 1
DELETE FROM reservation
where id=3;


-- *************   Review queries  ****************
--Get all reviews
SELECT * FROM review;

--Add a new review
INSERT INTO review (title, description, meal_id, stars, created_date)
values
('good meal', 'not excellent but good', 2, 7, '2024-02-05 08:07:10');

--Get a review with any id, fx 1
select * FROM review
WHERE id=3;

--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET description='not excellent but good and satisfying'
where id=3;

--Delete a review with any id, fx 1
DELETE FROM review
where id=3;


-- *************  Additional queries / Functionality  *************
--Add a couple of different meals, reservations and reviews with different attributes. With those meals create the following queries

INSERT INTO meal (title, description, location, meal_time, max_reservations, price, created_date) 
values
('pasta alferedo', 'pasta with champion and cream', 'visse aalborg', '2024-03-10 12:05:00', 10, 35.10, CURDATE()),
('ghormeh sabzi', 'a traditional persian food with rice, meat and vegetables', 'copenhagen', '2024-09-21 13:30:00', 10, 80.20, CURDATE()),
('pirashki', 'italian food - with meat', 'Aalborg', '2024-05-09 15:30:00', 10, 60.50, CURDATE()),
('dolmeh', 'turkish dolmeh with meat', 'Hillerød', '2024-07-15 11:30:00', 30, 55.80, CURDATE());

-----------------------
select * from meal;
----------------------

INSERT INTO reservation (number_of_guests, meal_id, meal_title, created_date, contact_phonenumber, contact_name, contact_email)
values 
(4, 11, 'dolmeh', CURDATE(), '71341197', 'katayoun yousefzadeh', 'k.yousefzadeh@gmail.com'),
(6, 10, 'pirashki', CURDATE(), '20040089', 'simono jensen', 'simjen@gmail.com'),
(6, 8, 'pasta alferedo', CURDATE(), '25909998', 'helen kris', 'helki@gmail.com'),
(4, 8, 'pasta alferedo', CURDATE(), '24878780', 'sara amjad', 'saj@gmail.com');

-- ---------------------

INSERT INTO review (title, description, meal_id, stars, created_date) 
values
('good meal', 'not excellent but good', 7, 6, CURDATE()),
('so delicious', 'Our meal was perfect', 5, 10, CURDATE()),
('so satisfying', 'Our meal was very good', 4, 9, CURDATE()),
('We enjoyed our meal', 'cozy environment', 10, 8, CURDATE()),
('all could be better', 'so so :)', 11, 5, CURDATE());

--Get meals that has a price smaller than a specific price fx 90
select title
from meal
WHERE price < 90;

--Get meals that still has available reservations
select meal.title as 'meals with avaiable reservations', meal_time, meal.location, max_reservations, number_of_guests as 'number of guests with reservation'
from meal
join reservation on meal.id=reservation.meal_id
WHERE meal.max_reservations-reservation.number_of_guests>0;

--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT title
FROM meal
WHERE title LIKE 'Rød grød%';

--Get meals that has been created between two dates
SELECT *
FROM meal
WHERE created_date BETWEEN '2022-12-29' AND '2023-12-28';

--Get only specific number of meals fx return only 5 meals
SELECT * FROM meal ORDER BY id LIMIT 5;

--Get the meals that have good reviews
select meal.title, review.stars
from meal
JOIN review on meal.id=review.meal_id
where review.stars>6;

--Get reservations for a specific meal sorted by created_date
SELECT meal.title, meal.location, reservation.created_date AS 'reservation created on'
FROM meal
JOIN reservation ON meal.id = reservation.meal_id
WHERE meal.title = 'kebab'
ORDER BY reservation.created_date DESC;

--Sort all meals by average number of stars in the reviews
SELECT meal.title as 'meal title', ROUND(AVG(stars), 2) AS 'average of stars'
FROM meal
JOIN review on meal.id= review.meal_id
GROUP BY meal.title
ORDER BY 'average of stars' DESC;

-- -----------------------------
SELECT * from meal;

SELECT * from reservation;

SELECT * from review;
-- ----------------------------

ALTER TABLE meal
MODIFY COLUMN price DECIMAL(5,2) NOT NULL;

ALTER Table reservation
MODIFY COLUMN meal_id INT NOT NULL;
