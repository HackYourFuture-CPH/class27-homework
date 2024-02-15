-- Active: 1706440038860@@127.0.0.1@3307

DROP DATABASE IF EXISTS article;

CREATE DATABASE article DEFAULT CHARACTER SET = 'utf8mb4';

USE article;

CREATE TABLE author (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL
);

CREATE TABLE article (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255) NOT NULL, content TEXT NOT NULL
);

CREATE TABLE tag ( name VARCHAR(255) NOT NULL PRIMARY KEY );

CREATE TABLE article_tag (
    article_id INT NOT NULL, tag_name VARCHAR(255) NOT NULL, PRIMARY KEY (article_id, tag_name), FOREIGN KEY (article_id) REFERENCES article (id)
);

CREATE TABLE article_author (
    article_id INT NOT NULL, author_id INT NOT NULL, PRIMARY KEY (article_id, author_id), FOREIGN KEY (article_id) REFERENCES article (id)
);

SHOW TABLES;

INSERT INTO
    article (title, content)
VALUES (
        "BREAKING NEWS: Water is wet!", "Scientists have discovered that water is wet, it's amazing what.... ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    ),
    (
        "Heavy Snowfall Expected this Weekend", "Lots of snow is expected... Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ),
    (
        "BREAKING NEWS: These 10 Clickbait Titles Are Bad for Your Health, Number 7 Will SHOCK You!", "Haha, you clicked! Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat "
    )

INSERT INTO
    author (name)
VALUES ("James Smith"),
    ("Jane Jones"),
    ("Aliya Awad"),
    ("Igor Vladimir"),
    ("Jane Jones"),
    ("Kim Jensen");

INSERT INTO
    tag (name)
VALUES ("science"),
    ("breaking"),
    ("weather"),
    ("winter"),
    ("clickbait");

INSERT INTO
    article_tag (article_id, tag_name)
VALUES (1, "science"),
    (1, "breaking"),
    (2, "weather"),
    (2, "winter"),
    (3, "clickbait"),
    (3, "breaking");

INSERT INTO
    article_author (article_id, author_id)
VALUES (1, 1),
    (1, 2),
    (2, 3),
    (2, 4),
    (3, 2),
    (3, 5);

SELECT * FROM article;

SELECT * FROM author;

SELECT * FROM tag;

SELECT * FROM article_tag;

SELECT * FROM article_author;