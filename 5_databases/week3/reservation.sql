-- Active: 1706440038860@@127.0.0.1@3307@meal_sharing
use meal_sharing;

-- get all reservation
SELECT * FROM Reservation;

-- add a new reservation

INSERT INTO
    Reservation (
        number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email
    )
VALUES (
        2, 6, '2024-02-14 12:00:00', '1234567890', 'Anastasiia Humeniuk', 'humeniuk@example.com'
    );

-- Get a reservation with any id, fx 1
SELECT * FROM Reservation WHERE id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Reservation SET number_of_guests = 3 WHERE id = 7;

-- Delete a reservation with any id, fx 1

DELETE FROM Reservation WHERE id = 3;