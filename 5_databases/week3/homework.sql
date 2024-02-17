CREATE DATABASE meal_sharing_app;

USE meal_sharing_app;


CREATE TABLE meal (id int NOT NULL AUTO_INCREMENT,
                                   title varchar(255),
                                         description text, LOCATION varchar(255),
                                                                    event_date DATETIME NOT NULL,
                                                                                        max_reservations int, price decimal(10, 2),
                                                                                                                    created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
                                                                                                                                                  PRIMARY KEY(id));


CREATE TABLE reservation (id int NOT NULL,
                                 number_of_guests int, meal_id int NOT NULL AUTO_INCREMENT,
                                                                            created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
                                                                                                          contact_phonenumber varchar (255),
                                                                                                                              contact_name varchar (255),
                                                                                                                                           contact_email varchar (255),
                                                                                                                                                         PRIMARY KEY (id),
                          FOREIGN KEY (meal_id) REFERENCES meal (id));


CREATE TABLE review (id int NOT NULL,
                            title varchar (255),
                                  description text, meal_id int NOT NULL AUTO_INCREMENT,
                                                                         stars int, created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
                                                                                                                  PRIMARY KEY (id),
                     FOREIGN KEY (meal_id) REFERENCES meal (id));

--1. Queries for meal, reservation, review - apply to each by changing the table name in the tasks
--1.1. Get all meals

SELECT *
FROM meal;

--1.2. Add a new meal

INSERT INTO meal (id, title, description, LOCATION, event_date, max_reservations, price, created_date)
VALUES (1, 'Borsch', 'Hands-down the most signature Ukrainian dish (in fact UNESCO-protected Ukrainian cultural heritage). Thick and rich in flavor made with a variety of beets and vegetables. Served in a traditional way - with garlic salt bread and sour cream. Add Salo for a full Borsch experience.', 'Vancouver', '2024-03-22 18:30:00', 6, 14.99, CURRENT_TIMESTAMP);

--1.3. Get a meal with any id, fx 1

SELECT *
FROM meal
WHERE id = 1;

--1.4. Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE meal
SET price = 24.99
WHERE id = 1;

--1.5. Delete a meal with any id, fx 1

DELETE
FROM meal
WHERE id = 1;

--2. Additional queries - add a couple of different meals, reservations and reviews with different attributes
--2.1. Insert into meal

INSERT INTO meal (id, title, description, LOCATION, event_date, max_reservations, price, created_date)
VALUES (1, 'Holubtsi', 'Savour the authentic taste of Ukraine with handmade cabbage rolls, filled with pork or mushroom (on your choice) and topped with a tangy tomato sauce and sour cream', 'Kyiv', '2024-06-15 12:30:30', 10, 12.99, CURRENT_TIMESTAMP);


INSERT INTO meal (id, title, description, LOCATION, event_date, max_reservations, price, created_date)
VALUES (2, 'Deruny', 'Deliciously crispy pancakes made with finely grated potatoes, topped with bacon and mushrooms, served with a generous dollop of creamy sour cream', 'Berlin', '2024-10-02 14:00:00', 8, 10.99, CURRENT_TIMESTAMP);


INSERT INTO meal (id, title, description, LOCATION, event_date, max_reservations, price, created_date)
VALUES (3, 'Sour Cherry Varenyky', 'Homemade dumplings, filled with sour cherries, and served with sour cream on a side or jam', 'Amsterdam', '2024-04-12 17:30:00', 12, 12.99, CURRENT_TIMESTAMP);


INSERT INTO meal (id, title, description, LOCATION, event_date, max_reservations, price, created_date)
VALUES (4, 'Smørrebrød', '"Open-faced sandwiches": a thin slice of buttered rugbrød topped with some combination of protein, vegetable, and garnish. The combinations for toppings are endless but normally include a mix of cold meat, leverpostej, fish and prawns, eggs, vegetables, sauces, garnish and spices', 'Copenhagen', '2024-03-03 12:30:00', 20, 9.99, CURRENT_TIMESTAMP);


INSERT INTO meal (id, title, description, LOCATION, event_date, max_reservations, price, created_date)
VALUES (5, 'Stegt flæsk', 'A rustic plate of crispy-fried pork belly with creamy parsley sauce and boiled potatoes. The pork is thinly sliced and fried to a crisp and is very tasty and hearty', 'Paris', '2024-07-01 19:30:00', 10, 18.99, CURRENT_TIMESTAMP);


INSERT INTO meal (id, title, description, LOCATION, event_date, max_reservations, price, created_date)
VALUES (6, 'Rødgrød med fløde', 'Danish red berry pudding is very delicious dessert. It contains four different red berries which are cooked together with sugar and water into a thick berry pudding and serve cold with heavy cream on top', 'Brussels', '2024-08-11 11:00:00', 15, 8.99, CURRENT_TIMESTAMP);

--2.2. Insert into reservation

INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (1, 4, 2, CURRENT_TIMESTAMP, '98-11-23', 'John Nielsen', 'jnls@.dk');


INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (2, 10, 6, CURRENT_TIMESTAMP, '77-54-33', 'Diana Wozniazki', 'dwzn@gmail.com');


INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (3, 10, 1, CURRENT_TIMESTAMP, '20-44-09', 'Patrick Olsen', 'posen@.dk');


INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (4, 8, 3, CURRENT_TIMESTAMP, '11-14-55', 'Kyle Santos', 'ks@.dk');


INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (5, 3, 4, CURRENT_TIMESTAMP, '88-12-79', 'Liliana Peters', 'lp@gmail.com');


INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (6, 2, 5, CURRENT_TIMESTAMP, '12-34-97', 'Kristopher Trevino', 'kt@gmail.com');

--2.3. Insert into review

INSERT INTO review (id, title, description, meal_id, stars, created_date)
VALUES (1, 'Excellent!!', 'Excellent service, all my reservation notes were followed and everyone there was so lovely. The food was phenomenal. Highly recommend.', 2, 5, CURRENT_TIMESTAMP);


INSERT INTO review (id, title, description, meal_id, stars, created_date)
VALUES (2, 'I love this place and foood!', 'The best choice for good chill and tasty food in Kyiv. Nice friendly people. Will back for sure.', 3, 5, CURRENT_TIMESTAMP);


INSERT INTO review (id, title, description, meal_id, stars, created_date)
VALUES (3, 'Very special dessert', 'This dessert has really special taste, with a lot of berries and weird cream, but if you like weird mixes so it is for you', 6, 3, CURRENT_TIMESTAMP);


INSERT INTO review (id, title, description, meal_id, stars, created_date)
VALUES (4, 'Danish Speciality', 'Tried the fiskefilet with some cold sauce called remoulade and lemon. Very interesting and delicious', 4, 4, CURRENT_TIMESTAMP);


INSERT INTO review (id, title, description, meal_id, stars, created_date)
VALUES (5, 'Fantastisk holubtsi', 'Amazing atmosphere! Super delicious Ukrainian food! Highly recommend!', 1, 5, CURRENT_TIMESTAMP);


INSERT INTO review (id, title, description, meal_id, stars, created_date)
VALUES (6, 'Pork shock', 'Never tried to eat pork this way. Amazing fried pieces of pork you dip in parsley sauce. I recomend trying it. Very delicious!', 5, 5, CURRENT_TIMESTAMP);

--3. Additional queries - functionality
--3.1. Get meals that has a price smaller than a specific price

SELECT *
FROM meal
WHERE price = 12.99;

--3.2. Get meals that still has available reservations
--not finished

--3.3. Get meals that partially match a title

SELECT *
FROM meal
WHERE title like '%Rødgrød med%';

--3.4. Get meals that has been created between two dates

SELECT *
FROM meal
WHERE created_date BETWEEN '2024-02-17 19:10:00' AND '2024-02-17 19:20:00';

--3.5. Get only specific number of meals

SELECT *
FROM meal
LIMIT 3;

--3.6. Get the meals that have good reviews

SELECT *
FROM meal
JOIN review ON review.meal_id = meal.id
WHERE stars = 5;

--3.7. Get reservations for a specific meal sorted by created_date

SELECT *
FROM reservation
WHERE meal_id = 2
ORDER BY created_date;

--3.8. Sort all meals by average number of stars in the reviews

SELECT *
FROM review
ORDER BY stars DESC;