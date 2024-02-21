-- Active: 1706363831540@@0.0.0.0@3306@mealsharing

CREATE TABLE meal (
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50),
    description TEXT,
    location VARCHAR(100),
    `when` DATETIME,
    max_reservation INT(6),
    price DECIMAL,
    create_date DATE
);

CREATE TABLE reservation (
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    number_of_guests INT(6),
    meal_id INT(6),
    FOREIGN KEY (meal_id) REFERENCES meal(id),
    created_date DATE,
    contact_phonenumber VARCHAR(20),
    contact_name VARCHAR(50),         
    contact_email VARCHAR(100)        
);

CREATE TABLE review (
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(20),
    description TEXT,
    meal_id INT(6),
    FOREIGN KEY (meal_id) REFERENCES meal(id),
    stars INT,
    create_date DATE
);

--------------------------------------- Meal

SELECT * FROM meal;

INSERT INTO meal(title,description,location,`when`,max_reservation,price,create_date)
VALUES('pizza','delicious italian food','Aarhus','2024-10-05 20:15:00',10,180,'2024-02-12')

SELECT * FROM meal
WHERE id = 1

UPDATE meal
SET location = 'alborg'
WHERE id = 1

DELETE from meal
WHERE id = 1

----------------------------------- Reservation

SELECT * FROM reservation;

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (1, 2,'2024-07-06','60588894','Hadis','hadisjamali95@gmail.com');

SELECT * FROM reservation
WHERE id = 1

UPDATE reservation
SET contact_name = 'Reza'
WHERE id = 1

DELETE from meal
WHERE id = 1


----------------------------------------- Review

SELECT * FROM review;

INSERT INTO review (title, description, meal_id, stars, create_date)
VALUES ('pizaa', 'food was good',2, 3, '2024-02-12');

SELECT * FROM review
WHERE id = 1

UPDATE review
SET description = 'food was very bad'
WHERE id = 1

DELETE from review
WHERE id = 1