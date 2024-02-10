--Part 1: Working with tasks
--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO
    task (
        title, description, created, updated, due_date, status_id, user_id
    )
VALUES (
        'Working with tasks', 'Write the following sql queries:', '2024-02-07 10:00:00', '2024-02-07 10:00:00', '2024-02-10', 1, 2
    );

--Change the title of a task
UPDATE task
set
    title = 'School database'
WHERE
    user_id = 2
    AND due_date = '2024-02-10';

--Change a task due date
UPDATE task
set
    due_date = '2024-02-09'
WHERE
    user_id = 2
    AND due_date = '2024-02-10';

--Change a task status
UPDATE task
set
    status_id = 2
WHERE
    title = 'School database'
    AND user_id = 2;

--Mark a task as complete
UPDATE task
set
    status_id = 3
WHERE
    title = 'Buy plane ticket to Auckland'
    AND user_id = 9;

--Delete a task
DELETE FROM task WHERE id = 69;

DELETE FROM task WHERE title = 'Iron shirts';

use hyf;

--Part 2: School database
--Create a new database containing the following tables
CREATE DATABASE ScheoolDatabase;

DROP DATABASE ScheoolDatabase;

CREATE DATABASE SchoolDatabase;

use SchoolDatabase;
--Class: with the columns: id, name, begins (date), ends (date)
CREATE TABLE class (
    id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, begins DATE NOT NULL, ends DATE NOT NULL
);
--Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE Table Student (
    id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, phone VARCHAR(255), class_id INT, Foreign Key (class_id) REFERENCES class (id)
);
--Create an index on the name column of the student table.
CREATE INDEX idxStudentName ON class (name);

--Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class
ADD COLUMN Status ENUM(
    'not started', 'ongoing', 'finished'
) NOT NULL;

--Part 3: More queries
USE hyf;
--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.*
FROM task
    JOIN `user` ON task.user_id = user.id
WHERE
    user.email LIKE '%@spotify.com';

--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.*
FROM task
    INNER JOIN user ON task.user_id = user.id
    INNER JOIN status ON task.status_id = status.id
WHERE
    user.name = 'Donald Duck'
    AND status.id = 'Not started';

--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.*
FROM task
    INNER JOIN user ON task.user_id = user.id
WHERE
    user.name = 'Maryrose Meadows'
    AND MONTH(task.created) = 9;

--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT MONTH(created) AS month, COUNT(*) AS task_count
FROM task
GROUP BY
    MONTH(created)
ORDER BY MONTH(created);

--Part 4: Creating a database
CREATE DATABASE SocialMediaPlatform;

Use SocialMediaPlatform;

CREATE Table Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY, Username VARCHAR(50) NOT NULL UNIQUE, Email VARCHAR(50) NOT NULL UNIQUE, Password VARCHAR(255) NOT NULL, FullName VARCHAR(100), Birthdate DATE, ProfilePictureURL VARCHAR(255), JoinDate DATETIME DEFAULT CURRENT_TIMESTAMP, Bio TEXT
);

use SocialMediaPlatform;

CREATE TABLE Posts (
    PostID INT AUTO_INCREMENT PRIMARY KEY, UserID INT, PostContent TEXT, PostDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP, PostLocation VARCHAR(255), Foreign Key (UserID) REFERENCES Users (UserID)
);

CREATE Table UserGroups (
    GroupID INT AUTO_INCREMENT PRIMARY KEY, GroupName VARCHAR(255) NOT NULL, Description TEXT, creationTime DATETIME DEFAULT CURRENT_TIMESTAMP, ownerID INT, PrivacyLevel ENUM(
        'public', 'private', 'secrect'
    ) NOT NULL DEFAULT 'public', Foreign Key (OwnerID) REFERENCES Users (UserID)
);

CREATE Table Friends (
    FriendshipID INT AUTO_INCREMENT PRIMARY KEY, User1_ID INT, User2_ID INT, Status ENUM(
        'pending', 'accepted', 'rejected'
    ) DEFAULT 'pending', Action_user_id INT, Action_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, Foreign Key (User1_ID) REFERENCES Users (UserID), Foreign Key (User2_ID) REFERENCES Users (UserID), Foreign Key (Action_user_id) REFERENCES Users (UserID)
);

CREATE Table GroupMembers (
    GroupMemberID INT AUTO_INCREMENT PRIMARY KEY, GroupID INT, UserID INT, JoinDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP, Foreign Key (GroupID) REFERENCES UserGroups (GroupID), Foreign Key (UserID) REFERENCES Users (UserID)
);

CREATE Table Messages (
    MessageID INT AUTO_INCREMENT PRIMARY KEY, UserID INT, GroupID INT, MessageContent TEXT, MessageDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP, Foreign Key (UserID) REFERENCES Users (UserID), Foreign Key (GroupID) REFERENCES UserGroups (GroupID)
);

CREATE Table Comments (
    CommentID INT AUTO_INCREMENT PRIMARY KEY, UserID INT, MessageID INT, CommentContent TEXT, CommentDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP, Foreign Key (UserID) REFERENCES Users (UserID), Foreign Key (MessageID) REFERENCES Messages (MessageID)
);

CREATE Table Likes (
    LikeID INT AUTO_INCREMENT PRIMARY KEY, UserID INT, MessageID INT, Foreign Key (UserID) REFERENCES Users (UserID), Foreign Key (MessageID) REFERENCES Messages (MessageID)
);

ALTER Table Likes
ADD COLUMN CommentID INT,
ADD COLUMN PostID INT,
ADD FOREIGN KEY (CommentID) REFERENCES Comments (CommentID),
ADD FOREIGN KEY (PostID) REFERENCES Posts (PostID);

ALTER Table Comments
ADD COLUMN PostID INT,
ADD FOREIGN KEY (PostID) REFERENCES Posts (PostID);