-- Active: 1706445451493@@127.0.0.1@3306
CREATE DATABASE Articles
    DEFAULT CHARACTER SET = 'utf8mb4';

    create TABLE Article(
        id int PRIMARY KEY,
        title varchar(255) NOT NULL,
  content TEXT
);

CREATE TABLE Author (
  id INT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE Tag (
  name VARCHAR(255) PRIMARY KEY
);


CREATE TABLE Article_Author (
  article_id INT,
  author_id INT,
  PRIMARY KEY (article_id, author_id),
  FOREIGN KEY (article_id) REFERENCES Article(id),
  FOREIGN KEY (author_id) REFERENCES Author(id)
);

CREATE TABLE Article_Tag (
  article_id INT,
  tag_name VARCHAR(255),
  PRIMARY KEY (article_id, tag_name),
  FOREIGN KEY (article_id) REFERENCES Article(id),
  FOREIGN KEY (tag_name) REFERENCES Tag(name)
);



INSERT INTO Article (id, title, content) VALUES
(1, 'BREAKING NEWS: Water is wet!', 'Scientists have discovered that water is wet, it''s amazing what.... ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
(2, 'Heavy Snowfall Expected this Weekend', 'Lots of snow is expected... Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(3, 'BREAKING NEWS: These 10 Clickbait Titles Are Bad for Your Health, Number 7 Will SHOCK You!', 'Haha, you clicked! Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ');

select * from Article

INSERT INTO Author (id, name) VALUES
(1, 'James Smith'),
(2, 'Jane Jones'),
(3, 'Aliya Awad'),
(4, 'Igor Vladimir'),
(5, 'Kim Jensen');



INSERT INTO Tag (name) VALUES
('science'),
('breaking'),
('weather'),
('winter'),
('clickbait');

select * from Tag

INSERT INTO Article_Author (article_id, author_id) VALUES
(1, 1), (1, 2),
(2, 3), (2, 4),
(3, 2), (3, 5);

INSERT INTO Article_Tag (article_id, tag_name) VALUES
(1, 'science'), (1, 'breaking'),
(2, 'weather'), (2, 'winter'),
(3, 'clickbait'), (3, 'breaking');