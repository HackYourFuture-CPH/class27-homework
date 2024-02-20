use meals_sharing;
CREATE TABLE Meal (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(255),
    description TEXT,
    location VARCHAR(255),
    when_date DATE,
    max_reservations INT,
    price DECIMAL(7, 2),
    created_date DATE
);
-- Create Reservation Table
CREATE TABLE Reservation (
    id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    number_of_guests INT,
    meal_id INT,
    created_date DATE,
    contact_phonenumber VARCHAR(20),
    contact_name VARCHAR(100),
    contact_email VARCHAR(100),
    FOREIGN KEY (meal_id) REFERENCES Meal(id)
);

-- Create Review Table
CREATE TABLE Review (
    id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(255),
    description TEXT,
    meal_id INT,
    stars INT,
    created_date DATE ,
    FOREIGN KEY (meal_id) REFERENCES Meal(id)
);
INSERT INTO Meal (title, description, location, when_date, max_reservations, price, created_date)
VALUES 
('Kebab Koobideh', 'Grilled minced meat mixed with onions and spices, served with rice or bread', 'Tehran', '2024-01-21 13:30:00', 40, 20.95, '2022-12-27'),
('Tahchin', 'Savory rice cake made with saffron-infused rice, yogurt, and marinated chicken', 'Isfahan', '2024-01-18 13:30:00', 15, 65.95, '2022-12-28'),
('Ghormeh Sabzi', 'Hearty stew made with herbs, kidney beans, and tender chunks of meat', 'Shiraz', '2024-01-19 12:45:00', 40, 45.00, '2022-11-07'),
('Zereshk Polo', 'Persian rice dish cooked with barberries, saffron, and slivered almonds', 'Tabriz', '2024-01-22 18:00:00', 25, 35.50, '2022-10-15'),
('Fesenjan', 'Rich stew made with ground walnuts, pomegranate molasses, and chicken or duck', 'Yazd', '2024-01-20 19:00:00', 30, 55.75, '2022-09-30'),
('Ash Reshteh', 'Thick soup made with beans, lentils, noodles, and herbs, typically served with kashk (whey)', 'Ahvaz', '2024-01-23 12:00:00', 20, 25.99, '2022-08-20'),
('Tahdig', 'Crispy layer of rice formed at the bottom of the pot, often served with stew or yogurt', 'Kerman', '2024-01-24 20:30:00', 35, 15.25, '2022-07-10');

DESCRIBE meal;
-- Get all meals
SELECT * FROM Meal;

-- Add a new meal
INSERT INTO Meal (title, description, location, when_date, max_reservations, price, created_date)
VALUES ('baghala polo', 'Description', 'Location', '2023-01-01', 10, 50.00, '2023-12-31');

-- Get a meal with any id
SELECT * FROM Meal WHERE id = 1;

-- Update a meal with any id
UPDATE Meal SET title = 'Updated Meal Title' WHERE id = 1;

-- Delete a meal with any id
DELETE FROM Meal WHERE id = 1;

-- Get all reservations
SELECT * FROM Reservation;

-- Add a new reservation
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (2, 2, '2023-12-31', '1234567890', 'John Doe', 'john@example.com');

-- Get a reservation with any id
SELECT * FROM Reservation WHERE id = 1;

-- Update a reservation with any id
UPDATE Reservation SET number_of_guests = 3 WHERE id = 1;

-- Delete a reservation with any id
DELETE FROM Reservation WHERE id = 1;
-- Get all reviews
SELECT * FROM Review;

-- Add a new review
INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ('Great Meal!', 'Excellent experience overall.', 2, 5, '2023-12-31');

-- Get a review with any id
SELECT * FROM Review WHERE id = 1;

-- Update a review with any id
UPDATE Review SET stars = 4 WHERE id = 1;

-- Delete a review with any id
DELETE FROM Review WHERE id = 1;

-- Get meals that has a price smaller than a specific price
SELECT * FROM Meal WHERE price < 90.00;

-- Get meals that still have available reservations
SELECT * FROM Meal WHERE max_reservations > (SELECT COUNT(*) FROM Reservation WHERE Reservation.meal_id = Meal.id);

-- Get meals that partially match a title
SELECT * FROM Meal WHERE title LIKE '%Rød grød med%';

-- Get meals that have been created between two dates
SELECT * FROM Meal WHERE created_date BETWEEN '2023-01-01' AND '2023-12-31';

-- Get only specific number of meals
SELECT * FROM Meal LIMIT 5;

-- Get the meals that have good reviews
SELECT Meal.*, AVG(Review.stars) AS avg_stars
FROM Meal
JOIN Review ON Meal.id = Review.meal_id
GROUP BY Meal.id
HAVING AVG(Review.stars) > 4;

-- Get reservations for a specific meal sorted by created_date
SELECT * FROM Reservation WHERE meal_id = 1 ORDER BY created_date;

-- Sort all meals by average number of stars in the reviews
SELECT Meal.*, AVG(Review.stars) AS avg_stars
FROM Meal
LEFT JOIN Review ON Meal.id = Review.meal_id
GROUP BY Meal.id
ORDER BY avg_stars DESC;

