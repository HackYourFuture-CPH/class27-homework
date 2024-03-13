use meal_sharing_db
CREATE TABLE Meal (
    id INT PRIMARY KEY AUTO_INCREMENT, title VARCHAR(150) NOT NULL, description TEXT, location VARCHAR(50) NOT NULL, meal_datetime DATETIME NOT NULL, max_reservations INT NOT NULL, price DECIMAL NOT NULL, created_date DATETIME NOT NULL
);

CREATE TABLE Reservation (
    id INT PRIMARY KEY AUTO_INCREMENT, number_of_guests INT NOT NULL, meal_id INT, created_date DATETIME NOT NULL, contact_phonenumber VARCHAR(15) NOT NULL, contact_name VARCHAR(50) NOT NULL, contact_email VARCHAR(20) NOT NULL, FOREIGN KEY (meal_id) REFERENCES Meal (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Review (
    id INT PRIMARY KEY, title VARCHAR(150), description TEXT(255), meal_id INT, stars INT, created_date DATETIME, FOREIGN KEY (meal_id) REFERENCES Meal (id)
);

INSERT INTO
    Meal (
        title, description, location, meal_datetime, max_reservations, price, created_date
    )
VALUES (
        'Martini and Lava Cake', 'Description of the meal', 'Cake Hub', '2024-02-12 20:00:00', 10, 50.78, '2024-02-10'
    ),
    (
        'Chicken Tagine', 'Join us for a delicious Chicken Tagine cooking class!', 'Khao Gali', '2024-02-16 16:00:00', 20, 74.21, '2024-02-12'
    ),
    (
        'Maki Sushi', 'Learn to make delicious Maki Sushi rolls with fresh ingredients and traditional techniques.', 'Tokiyo Sushi ', '2024-02-21 19:00:00', 20, 60, '2024-02-11'
    ),
    (
        'Kimchi with Rice', 'Learn the art of making traditional Korean kimchi with this hands-on online cooking class.', 'Tokiyo Sushi', '2024-03-14 17:00:00', 15, 39.69, '2024-02-14'
    ),
    (
        'South Indian Cuisine', 'Discover the vibrant flavors of South Indian cuisine with authentic recipes and techniques.', 'Anna kichen', '2024-03-25 11:00:00', 15, 44, '2024-02-16'
    ),
    (
        'Online Pad Thai ', 'Join us for an interactive online cooking class where you will learn to make authentic Pad Thai.', 'Thailand Cusine', '2024-02-21 13:00:00', 15, 85.55, '2024-02-16'
    );

INSERT INTO
    Reservation (
        number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email
    )
VALUES (
        9, 1, '2024-02-16', '15446457', 'Simran Doe', 'simran@example.com'
    ),
    (
        17, 3, '2024-02-15', '65756757', 'Pawandeep', 'deep12@example.com'
    ),
    (
        15, 3, '2024-02-18', '45778778', 'Anjali Kumari', 'kgupta87@gmail.com'
    ),
    (
        5, 5, '2024-02-20', '4577782', 'Babul Raja', 'babul@gmail.com'
    )
INSERT INTO
    Review (
        id, title, description, meal_id, stars, created_date
    )
VALUES (
        1, 'Amazing Experience', 'I thoroughly enjoyed the South Indian cooking class. The instructor was knowledgeable, and the food was delicious!', 1, 5, '2024-03-11'
    ),
    (
        2, 'Delicious and Fun!', 'The Pad Thai cooking class was fantastic. The instructor was knowledgeable and made the class very enjoyable. The Pad Thai turned out delicious!', 2, 5, '2024-02-26'
    ),
    (
        3, 'Fantastic Experience', 'The class was incredibly informative and fun. I learned so much and the sushi turned out amazing!', 1, 5, '2024-02-21'
    );

-- Meal queries-------------------------------------------------------
--Get all meals
SELECT * from Meal;

--Add a new meal
INSERT INTO
    Meal (
        title, description, location, meal_datetime, max_reservations, price, created_date
    )
VALUES (
        'Veg Biryani', 'Delicious and aromatic vegetarian biryani made with fragrant basmati rice, mixed vegetables, and aromatic spices.', 'Online', '2024-03-01 13:00:00', 20, 50, '2024-02-13'
    );

;

--Get a meal with any id, fx 1
SELECT * FROM Meal WHERE id = 1;

--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal
SET
    title = 'Lava Cake',
    meal_datetime = '2024-02-12 17:30:00',
    max_reservations = 20,
    price = 30
WHERE
    id = 1;

--Delete a meal with any id, fx 1
DELETE FROM Meal WHERE id = 4;

--Reservation queries------------------------------------------------
--Get all reservations
SELECT * FROM Reservation;

--Add a new reservation
INSERT INTO
    Reservation (
        number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email
    )
VALUES (
        2, 4, '2024-02-17', '4533323', 'Kabita Devi', 'iamdevi@gmail.com'
    );

--Get a reservation with any id, fx 1
SELECT * FROM Reservation WHERE id = 5;

--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Reservation
SET
    number_of_guests = 4,
    created_date = '2024-02-18'
WHERE
    id = 5;

--Delete a reservation with any id, fx 1
DELETE FROM Reservation WHERE id = 5;

--Review queries-----------------------------------------------------

--Get all reviews
SELECT * FROM Review;
--Add a new review
INSERT INTO
    Review (
        id, title, description, meal_id, stars, created_date
    )
VALUES (
        4, 'Serves was good', 'I thoroughly enjoyed the food. It was positive atmosphere, serves was amazing and ', 1, 5, '2024-02-19'
    );
--Get a review with any id, fx 1
SELECT * from Review where id = 4;
--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review
SET
    description = 'I thoroughly enjoyed the food and serves was next level',
    meal_id = 2
WHERE
    id = 1;
--Delete a review with any id, fx 1
DELETE from Review
where
    id = 1
    ---Additional queries-----------------------------------------------------------------------------
    --Get meals that has a price smaller than a specific price fx 90
SELECT Meal.price as 'price'
FROM Meal
WHERE
    price < 90;

--Get meals that still has available reservations
SELECT * FROM Meal WHERE max_reservations > 15;

--Get the meals that have good reviews
SELECT *
FROM Meal
    JOIN Review ON Meal.id = Review.meal_id
WHERE
    Review.stars >= 4;