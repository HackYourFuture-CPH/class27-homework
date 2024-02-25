-- Active: 1706445451493@@127.0.0.1@3306
CREATE DATABASE meal_sharing_website;

    DEFAULT CHARACTER SET = 'utf8mb4';

    USE meal_sharing_website;


    CREATE TABLE Reservation (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    number_of_guests INT NOT NULL,
    meal_id INT NOT NULL,
    created_date DATE NOT NULL,
    contact_phonenumber VARCHAR(20) NOT NULL,
    contact_name VARCHAR(100) NOT NULL,
    contact_email VARCHAR(100) NOT NULL,
    FOREIGN KEY (meal_id) REFERENCES Meal(id)
);

CREATE TABLE Meal (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    location VARCHAR(100) NOT NULL,
    when_datetime DATETIME NOT NULL,
    max_reservations INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_date DATE NOT NULL
);

CREATE TABLE Review (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    meal_id INT NOT NULL,
    stars INT NOT NULL,
    created_date DATE NOT NULL,
    FOREIGN KEY (meal_id) REFERENCES Meal(id)
);

INSERT INTO Meal (title, description, location, when_datetime, max_reservations, price, created_date)
VALUES 
('Family Dinner', 'A cozy family dinner with homemade dishes', '123 Main St', '2024-02-15 18:00:00', 5, 20.00, '2024-02-10'),
('Italian Night', 'Enjoy traditional Italian cuisine', '456 Elm St', '2024-02-18 19:30:00', 10, 30.00, '2024-02-12'),
('Sunday Brunch', 'Relaxing brunch with friends', '789 Oak St', '2024-02-20 11:00:00', 8, 15.00, '2024-02-14');

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES 
(3, 1, '2024-02-12', '123-456-7890', 'John Doe', 'john@example.com'),
(2, 2, '2024-02-14', '987-654-3210', 'Jane Smith', 'jane@example.com'),
(4, 3, '2024-02-16', '555-555-5555', 'Alice Wonderland', 'alice@example.com');

INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES 
('Great experience', 'The meal was fantastic, and the host was very welcoming.', 1, 5, '2024-02-16'),
('Delicious food', 'Authentic Italian dishes served with care.', 2, 4, '2024-02-19'),
('Amazing brunch', 'The brunch spread was delicious, and the atmosphere was lovely.', 3, 5, '2024-02-21');


Get all meals

SELECT * FROM Meal;
Add a new meal

INSERT INTO Meal (title, description, location, when_datetime, max_reservations, price, created_date)
VALUES 
('Mexican Fiesta', 'Authentic Mexican dishes for a fun night', '321 Maple St', '2024-02-22 18:30:00', 12, 25.00, NOW());


Get a meal with any id, fx 1

UPDATE Meal SET title = 'Sunday Brunch' WHERE id = 3;


Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Meal 
SET title = 'Afro Night Special', description = 'Indulge in a variety of African delicacies', price = 25.00
WHERE id = 2;


Delete a meal with any id, fx 1

DELETE FROM Meal WHERE id = 4;

Get all reservations

SELECT * FROM Reservation;

Add a new reservation

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES 
(5, 1, '2024-02-20', '111-222-3333', 'Bob Johnson', 'bob@example.com');


Get a reservation with any id, fx 1

SELECT * FROM Reservation WHERE id = 1;

Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Reservation 
SET number_of_guests = 3, contact_phonenumber = '999-888-7777'
WHERE id = 2;

UPDATE Reservation SET number_of_guests = 4 WHERE id = 2;

Delete a reservation with any id, fx 1

DELETE FROM Reservation WHERE id = 3;

Get all reviews

SELECT * FROM Review;

Add a new review

INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES 
('Excellent service', 'The staff was attentive and friendly.', 1, 4, '2024-02-25');

Get a review with any id, fx 1

SELECT * FROM Review WHERE id = 2;

Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Review 
SET title = 'Authentic Italian Cuisine', stars = 5
WHERE id = 2;

Delete a review with any id, fx 1

DELETE FROM Review WHERE id = 2;

INSERT INTO Meal (title, description, location, when_datetime, max_reservations, price, created_date)
VALUES 
('Rød grød med fløde', 'Traditional Danish dessert made with red berries and cream', 'Copenhagen', '2024-02-15 18:00:00', 10, 75.00, '2024-02-10'),
('Italian Night', 'Enjoy traditional Italian cuisine', 'Rome', '2024-02-18 19:30:00', 15, 90.00, '2024-02-12'),
('Sunday Brunch', 'Relaxing brunch with friends', 'New York', '2024-02-20 11:00:00', 20, 50.00, '2024-02-14'),
('Sushi Night', 'Fresh sushi prepared by expert chefs', 'Tokyo', '2024-02-22 20:00:00', 12, 80.00, '2024-02-16'),
('BBQ Party', 'Grilled meats and delicious sides', 'Texas', '2024-02-25 17:00:00', 25, 70.00, '2024-02-20');


Get meals that has a price smaller than a specific price fx 90

SELECT * FROM Meal WHERE price < 90;

Get meals that still has available reservations

SELECT * FROM Meal WHERE max_reservations > 0;

Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT * FROM Meal WHERE title LIKE '%Rød grød med%';

Get meals that has been created between two dates

SELECT * FROM Meal WHERE created_date BETWEEN '2024-02-10' AND '2024-02-15';


Get only specific number of meals fx return only 5 meals

SELECT * FROM Meal LIMIT 3;

Get the meals that have good reviews

SELECT m.*
FROM Meal m
JOIN Review r ON m.id = r.meal_id
WHERE r.stars >= 4;

Get reservations for a specific meal sorted by created_date

SELECT * FROM Reservation WHERE meal_id = 1 ORDER BY created_date;

Sort all meals by average number of stars in the reviews

SELECT m.*, AVG(r.stars) AS avg_stars
FROM Meal m
LEFT JOIN Review r ON m.id = r.meal_id
GROUP BY m.id
ORDER BY avg_stars DESC;
