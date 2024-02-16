--Create the data model

CREATE TABLE Meal (
    id INT PRIMARY KEY, title VARCHAR(255), description TEXT, location VARCHAR(255), `when` DATETIME, max_reservations INT, price DECIMAL(10, 2), created_date DATE
);

CREATE TABLE Reservation (
    id INT PRIMARY KEY, number_of_guests INT, meal_id INT, created_date DATE, contact_phonenumber VARCHAR(255), contact_name VARCHAR(255), contact_email VARCHAR(255), FOREIGN KEY (meal_id) REFERENCES Meal (id)
);

CREATE TABLE Review (
    id INT PRIMARY KEY, title VARCHAR(255), description TEXT, meal_id INT, stars INT, created_date DATE, FOREIGN KEY (meal_id) REFERENCES Meal (id)
);

--Get all meals
SELECT * FROM Meal;

--Add a new meal
INSERT INTO
    Meal (
        title, description, location, `when`, max_reservations, price, created_date
    )
VALUES (
        'Ghormeh Sabzi - Persian Herb Stew', 'Ghormeh Sabzi, the quintessential Persian stew, is a luscious combination of succulent meat, a variety of herbs like parsley, coriander, and chives, kidney beans, and aromatic spices, all slow-cooked to create a deeply flavorful experience. This stew is served over a bed of fluffy basmati rice, garnished with sautéed dried limes that offer a unique tangy taste, making it a beloved dish for every occasion.', 'Aarhus, denmark', '2024-02-13 18:00:00', 10, 100.00, '2024-02-13 16:00'
    );

INSERT INTO
    `Meal` (
        title, description, location, `when`, max_reservations, price, created_date
    )
VALUES (
        'Authentic Italian Pizza', 'Experience the true taste of Italy with our Authentic Italian Pizza. Our hand-tossed dough is topped with the finest San Marzano tomato sauce, a blend of mozzarella and Parmesan cheeses, fresh basil leaves, and a drizzle of extra virgin olive oil. Cooked to perfection in a wood-fired oven, this pizza offers a crispy crust with a soft and chewy center, bursting with flavors in every bite.', 'Aarhus, Denmark', '2024-02-14 17:00', 10, 50.00, '2024-02-13 16:00'
    );
--Get a meal with any id, for example, id 1
SELECT * FROM Meal WHERE id = 1;

--Update a meal with any id, for example, id 1. Update any attribute, for example, the title or multiple attributes
UPDATE Meal SET title = 'Persian Vegetable Stew' WHERE id = 1;

UPDATE Meal SET title = 'Pizza', price = 56.99 WHERE id = 2;

--Delete a meal with any id, fx 1
DELETE FROM Meal WHERE id = 1;

--Reservarion
--Get all reservations
SELECT * FROM Reservation;

--Add a new reservation
INSERT INTO
    Reservation (
        id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email
    )
VALUES (
        2, 20, 2, '2024-02-13 15:00', '+45-22435931', 'Mary Smith', 'ms@gmail.com'
    );

INSERT INTO
    Reservation (
        id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email
    )
VALUES (
        1, 20, 2, '2024-02-13 15:00', '+45-22435931', 'Jane Andersen', 'JA@gmail.com'
    );

--Get a reservation with any id, for example, id 1
SELECT * FROM Reservation WHERE id = 1;

--Update a reservation with any id, for example, id 1. Update any attribute, for example, the number of guests or multiple attributes
UPDATE Reservation SET number_of_guests = 5 WHERE id = 1;

UPDATE Reservation
SET
    number_of_guests = 10,
    contact_phonenumber = ''
WHERE
    id = 1;

--Delete a reservation with any id, for example, id 1
DELETE FROM Reservation WHERE id = 1;

--Review
--Get all reviews
SELECT * FROM `Review`;

--Add a new Review
INSERT INTO
    Review (
        id, title, description, meal_id, stars, created_date
    )
VALUES (
        2, 'Great Experience', 'The meal was exceptional with fantastic flavors.', 2, 5, '2024-02-15 7:00'
    );

--Get a review with any id, fx 1
SELECT * FROM Review WHERE id = 1;

--Get meals that has a price smaller than a specific price fx 90

SELECT * FROM Meal WHERE price < 90;

--Get meals that still has available reservations

SELECT Meal.id, Meal.title, Meal.max_reservations, COUNT(Reservation.meal_id) AS reservations_made
FROM Meal
    LEFT JOIN Reservation ON Meal.id = Reservation.meal_id
GROUP BY
    Meal.id
HAVING
    Meal.max_reservations > reservations_made;

--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT * FROM Meal WHERE title LIKE 'Rød grød med%';

SELECT * FROM Meal WHERE title LIKE 'Pizza%';

--Get meals that has been created between two dates

SELECT *
FROM Meal
WHERE
    created_date BETWEEN '2023-01-01' AND '2024-03-04';

--Get only specific number of meals fx return only 5 meals
SELECT * FROM Meal LIMIT 5;

--Get the meals that have good reviews
SELECT Meal.id, Meal.title, AVG(Review.stars) AS average_rating
FROM Meal
    JOIN Review ON Meal.id = Review.meal_id
GROUP BY
    Meal.id
HAVING
    AVG(Review.stars) >= 4;

--Get reservations for a specific meal sorted by created_date
SELECT *
FROM Reservation
WHERE
    meal_id = 1
ORDER BY created_date ASC;

--Sort all meals by average number of stars in the reviews
SELECT Meal.id, Meal.title, AVG(Review.stars) AS average_rating
FROM Meal
    LEFT JOIN Review ON Meal.id = Review.meal_id
GROUP BY
    Meal.id
ORDER BY average_rating ASC;