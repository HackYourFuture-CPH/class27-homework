USE Exercise;

DROP TABLE IF EXISTS articles;

DROP TABLE IF EXISTS authors;

DROP TABLE IF EXISTS tags;

CREATE TABLE
    articles (
        article_id INT AUTO_INCREMENT,
        title VARCHAR(255),
        content TEXT,
        PRIMARY KEY (article_id)
    );

CREATE TABLE
    authors (
        author_id INT AUTO_INCREMENT,
        name VARCHAR(255),
        PRIMARY KEY (author_id)
    );

CREATE TABLE
    tags (
        tag_id INT AUTO_INCREMENT,
        tag_name VARCHAR(255),
        PRIMARY KEY (tag_id)
    );

CREATE TABLE
    article_author (
        article_id INT,
        author_id INT,
        PRIMARY KEY (article_id, author_id),
        FOREIGN KEY (article_id) REFERENCES articles (article_id),
        FOREIGN KEY (author_id) REFERENCES authors (author_id)
    );

CREATE TABLE
    article_tag (
        article_id INT,
        tag_id INT,
        PRIMARY KEY (article_id, tag_id),
        FOREIGN KEY (article_id) REFERENCES articles (article_id),
        FOREIGN KEY (tag_id) REFERENCES tags (tag_id)
    );

INSERT INTO
    articles (title, content)
VALUES
    (
        "BREAKING NEWS: Water is wet!",
        "Scientists have discovered that water is wet, it's amazing what.... ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    ),
    (
         "Heavy Snowfall Expected this Weekend",
         "Lots of snow is expected... Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ),
    (
         "BREAKING NEWS: These 10 Clickbait Titles Are Bad for Your Health, Number 7 Will SHOCK You!",
          "Haha, you clicked! Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat "
    );

INSERT INTO 
    authors (name)
VALUES
    (
        "James Smith"
    ),
    (
        "Jane Jones"
    ),
    (
         "Aliya Awad"
    ),
    (
        "Igor Vladimir"
    ),
    (
        "Kim Jensen"
    );

INSERT INTO  
    tags(tag_name)
VALUES
    ("science"),
    ("breaking"),
    ("weather"),
    ("winter"),
    ("clickbait");


INSERT INTO 
    article_author(article_id, author_id)
VALUES
    (1, 1),
    (1, 2),
    (2, 3),
    (2, 4),
    (3, 2),
    (3, 5);

INSERT INTO 
    article_tag(article_id, tag_id)
VALUES
    (1, 1),
    (1, 2),
    (2, 3),
    (2 ,4),
    (3, 5),
    (3, 2);