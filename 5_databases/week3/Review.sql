-- Active: 1706440038860@@127.0.0.1@3307@meal_sharing
use meal_sharing;

-- Get all reviews
SELECT * FROM Review;

-- add a new review
INSERT INTO
    Review (
        title, description, meal_id, stars, created_date
    )
VALUES (
        'Amazing Food', 'Apple pie was delicious, highly recommended', 1, 5, '2024-02-14 12:00:00'
    );

-- Get a review with any id, fx 1
SELECT * FROM Review WHERE id = 7;

-- Update a review with any id, fx 1. Update any attribute except id
UPDATE Review
SET
    title = 'Like at home',
    description = 'Apple pie was amazing, it is taste like at home',
    stars = 5,
    created_date = '2024-02-14 12:00:00'
WHERE
    id = 1;

-- Delete a review with any id, fx 1
DELETE FROM Review WHERE id = 5;