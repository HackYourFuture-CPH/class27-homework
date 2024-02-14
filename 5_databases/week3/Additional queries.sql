-- Active: 1706440038860@@127.0.0.1@3307@meal_sharing
use meal_sharing;

-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM Meal WHERE price < 90;

-- Get meals that still has available reservations

SELECT Meal.id, Meal.title, Meal.max_reservations, SUM(Reservation.number_of_guests) AS total_reservations
FROM Meal
    LEFT JOIN Reservation ON Meal.id = Reservation.Meal_id
GROUP BY
    Meal.id
HAVING
    COALESCE(total_reservations, 0) < Meal.max_reservations;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM Meal WHERE title LIKE '%Rød grød med%';

--Get meals that has been created between two dates

SELECT *
FROM Meal
WHERE
    created_date BETWEEN '2024-08-02' AND '2024-08-04';

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM Meal LIMIT 5;

-- Get the meals that have good reviews
SELECT * FROM Review WHERE stars = 5 AND 4;

-- Get reservations for a specific meal sorted by created_date
SELECT * FROM Reservation WHERE meal_id = 1 ORDER BY created_date;

-- Sort all meals by average number of stars in the reviews
SELECT * FROM Review ORDER BY stars;