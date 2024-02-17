-- Active: 1706445451493@@127.0.0.1@3306@FARM_DATABASE
CREATE TABLE Farmer (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255) NOT NULL,
    Age INT,
    Phone VARCHAR(20),
    Email VARCHAR(255)
);

CREATE TABLE Animal (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Species VARCHAR(100) NOT NULL,
    Age INT,
    Gender ENUM('Male', 'Female', 'Unknown'),
    Barn_ID INT,
    FOREIGN KEY (Barn_ID) REFERENCES Barn(ID)
);

CREATE TABLE Barn (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Location VARCHAR(255) NOT NULL,
    Capacity INT
);

CREATE TABLE Barn_Animal (
    Barn_ID INT,
    Animal_ID INT,
    FOREIGN KEY (Barn_ID) REFERENCES Barn(ID),
    FOREIGN KEY (Animal_ID) REFERENCES Animal(ID),
    PRIMARY KEY (Barn_ID, Animal_ID)
);

INSERT INTO Farmer (Name, Age, Phone, Email) VALUES
('Jimmy Dawnson', 42, '123-456-7890', 'john@example.com'),
('Sandy Michaelsen', 27, '987-654-3210', 'jane@example.com');

INSERT INTO Animal (Species, Age, Gender, Barn_ID) VALUES
('Cow', 5, 'Female', 1),
('Chicken', 1, 'Male', 1),
('Horse', 8, 'Male', 2);


INSERT INTO Barn (Location, Capacity) VALUES
('Main Barn', 100),
('Secondary Barn', 50);


INSERT INTO Barn_Animal (Barn_ID, Animal_ID) VALUES
(1, 1),
(1, 2),
(2, 3);

