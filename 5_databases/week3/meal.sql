use meal_sharing;
-- Get all meals

SELECT * FROM Meal;

-- Add a new meal

INSERT INTO
    Meal (
        title, description, location, `when`, max_reservations, price, created_date
    )
VALUES (
        'Apple Pie', 'Dessert', '231 Second St', '2024-02-14 16:30:00', 5, 20.00, '2024-02-14 12:15:00'
    );

-- Get a meal with any id, fx 1

SELECT * FROM Meal WHERE id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Meal
SET
    title = 'Apple Pie',
    description = 'Dessert',
    location = '231 Second St',
    `when` = '2024-02-14 16:30:00',
    max_reservations = 5,
    price = 20.00,
    created_date = '2024-02-14 12:15:00'
WHERE
    id = 1;

-- Delete a meal with any id, fx 1
DELETE FROM Meal WHERE id = 7