CREATE DATABASE Meal_Sharing DEFAULT CHARACTER
SET
    = 'utf8mb4';

use Meal_Sharing;

CREATE TABLE
    Meal (
        meal_id INT AUTO_INCREMENT,
        title VARCHAR(255),
        description TEXT,
        location VARCHAR(255),
        _when DATETIME,
        max_reservations INT,
        price DECIMAL(5, 2) NOT NULL,
        created_date DATE,
        PRIMARY KEY (meal_id)
    );

CREATE Table
    Reservation (
        reservation_id INT AUTO_INCREMENT,
        number_of_guests INT,
        meal_id INT,
        created_date DATE,
        contact_phonenumber VARCHAR(255),
        contact_name VARCHAR(255),
        contact_email VARCHAR(255),
        PRIMARY KEY (reservation_id),
        FOREIGN KEY (meal_id) REFERENCES Meal (meal_id)
    );

CREATE Table
    Review (
        review_id INT AUTO_INCREMENT,
        title VARCHAR(255),
        description TEXT,
        meal_id INT,
        stars INT,
        created_date DATE,
        PRIMARY KEY (review_id),
        FOREIGN KEY (meal_id) REFERENCES Meal (meal_id)
    );

INSERT INTO
    Meal (
        title,
        description,
        location,
        _when,
        max_reservations,
        price,
        created_date
    )
VALUES
    (
        'Italian Pasta Night',
        'Indulge in a delicious array of traditional Italian pasta dishes.',
        'Café Bella Vista',
        '2024-02-15 19:00:00',
        30,
        25.99,
        '2024-02-10'
    ),
    (
        'Sushi Extravaganza',
        'Experience the art of sushi-making with our expert chefs.',
        'Tokyo Sushi Bar',
        '2024-02-18 20:00:00',
        20,
        35.50,
        '2024-02-11'
    ),
    (
        'BBQ Fiesta',
        'Join us for a sizzling BBQ feast with mouthwatering grilled specialties.',
        'The Smokehouse Grill',
        '2024-02-20 18:30:00',
        25,
        29.99,
        '2024-02-12'
    ),
    (
        'Vegetarian Delight',
        'A delightful vegetarian spread featuring farm-fresh produce and innovative dishes.',
        'Green Garden Café',
        '2024-02-22 19:30:00',
        15,
        18.95,
        '2024-02-13'
    );

INSERT INTO
    Reservation (
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    )
VALUES
    (
        10,
        1,
        '2024-02-11',
        '555-1234',
        'John Doe',
        'john@example.com'
    ),
    (
        8,
        1,
        '2024-02-10',
        '555-5678',
        'Jane Smith',
        'jane@example.com'
    ),
    (
        5,
        3,
        '2024-02-16',
        '555-4321',
        'Alice Johnson',
        'alice@example.com'
    ),
    (
        10,
        4,
        '2024-02-20',
        '555-2345',
        'David Wilson',
        'david@example.com'
    ),
    (
        10,
        2,
        '2024-02-16',
        '555-8765',
        'Bob Williams',
        'bob@example.com'
    ),
    (
        5,
        4,
        '2024-02-20',
        '555-7890',
        'Sarah Miller',
        'sarah@example.com'
    );

INSERT INTO
    Review (title, description, meal_id, stars, created_date)
VALUES
    (
        'Amazing pasta!',
        'The Italian Pasta Night was fantastic. Every dish was delicious and authentic. Highly recommend!',
        1,
        5,
        '2024-02-16'
    ),
    (
        'Great sushi experience',
        'The Sushi Extravaganza was an amazing experience. The sushi was fresh and beautifully presented. Will definitely come back!',
        2,
        4,
        '2024-02-19'
    ),
    (
        'Delicious BBQ feast',
        'The BBQ Fiesta at The Smokehouse Grill was outstanding. The grilled specialties were mouthwatering and the atmosphere was lively. Loved it!',
        3,
        5,
        '2024-02-21'
    ),
    (
        'Excellent vegetarian options',
        'The Vegetarian Delight at Green Garden Café exceeded my expectations. The innovative dishes made with fresh produce were delightful. Will definitely return for more!',
        4,
        5,
        '2024-02-23'
    ),
    (
        'Good experience',
        'Overall, it was a good experience. The food was decent, but there was room for improvement in terms of variety.',
        1,
        3,
        '2024-02-24'
    );

-- Get all meals
SELECT
    *
FROM
    Meal;

-- Add a new meal
INSERT INTO
    Meal (
        title,
        description,
        location,
        _when,
        max_reservations,
        price,
        created_date
    )
VALUES
    (
        "ghorme sabzi",
        "One of the most delicious foods from Iran",
        "Aarhus",
        "2024-02-15 12:00:00",
        5,
        97.5,
        "2024-02-12"
    )
    -- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal
SET
    price = 29.4
WHERE
    title = "ghorme sabzi";

-- Delete a meal with any id, fx 1
DELETE FROM Meal
WHERE
    meal_id = 5;

-- Get all reservations
SELECT
    *
FROM
    Reservation;

-- Add a new reservation
INSERT INTO
    Reservation (
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    )
VALUES
    (
        3,
        2,
        "2024-02-12",
        "+45-61763346",
        "Niloufar",
        "Nilo@gmail.com"
    );

-- Get a reservation with any id, fx 1
SELECT
    *
FROM
    Reservation
WHERE
    reservation_id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Reservation
SET
    number_of_guests = 4
WHERE
    reservation_id = 2;

-- Delete a reservation with any id, fx 1
DELETE FROM Reservation
WHERE
    reservation_id = 1;

-- Get all reviews
SELECT
    *
FROM
    Review;

-- Add a new review
INSERT INTO
    Review (title, description, meal_id, stars, created_date)
VALUES
    (
        "nice food",
        "food was delicious and clean",
        3,
        4,
        "2024-03-12"
    );

-- Get a review with any id, fx 1
SELECT
    *
FROM
    Review
WHERE
    review_id = 1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review
SET
    title = "nice"
WHERE
    review_id = 1;

-- Delete a review with any id, fx 1
DELETE FROM Review
WHERE
    review_id = 1;

-- Get meals that has a price smaller than a specific price fx 90
SELECT
    *
FROM
    Meal
WHERE
    price <= 20;

-- Get meals that still has available reservations
SELECT
    Meal.meal_id,
    Meal.title,
    Meal.max_reservations,
    SUM(Reservation.number_of_guests) As total_guests
FROM
    Meal
    LEFT JOIN Reservation ON Meal.meal_id = Reservation.meal_id
GROUP BY
    Meal.meal_id
HAVING
    total_guests < Meal.max_reservations;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT
    *
FROM
    Meal
WHERE
    title LIKE 'Rød grød med%';

-- Get meals that has been created between two dates
SELECT
    *
FROM
    Meal
WHERE
    created_date > "2023-10-25"
    And created_date <= "2024-02-12";

-- Get only specific number of meals fx return only 5 meals
SELECT
    *
FROM
    Meal
limit
    5;

-- Get the meals that have good reviews
SELECT
    Meal.meal_id,
    Meal.title,
    Review.stars
FROM
    Meal
    JOIN Review USING (meal_id)
WHERE
    Review.stars >= 4;

-- Get reservations for a specific meal sorted by created_date
SELECT
    *
FROM
    Reservation
WHERE
    meal_id = 2
ORDER BY
    created_date;

-- Sort all meals by average number of stars in the reviews
SELECT
    Meal.meal_id, Meal.title, Avg(Review.stars) As total_point
FROM
    Meal
    LEFT JOIN  Review ON Meal.meal_id = Review.meal_id
GROUP BY  Meal.meal_id
ORDER BY total_point DESC;
