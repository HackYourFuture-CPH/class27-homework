USE farm;

SET NAMES utf8mb4;

CREATE TABLE barns(
    barn_id INT PRIMARY KEY AUTO_INCREMENT,
    location VARCHAR(255) NOT NULL,
    capacity VARCHAR(255) NOT NULL
)

CREATE TABLE farmer(
    farmer_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    age VARCHAR(50) NOT NULL,
    barn_id INT,
    FOREIGN KEY (barn_id) REFERENCES barns(barn_id)
)

CREATE TABLE animals(
    animal_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    species VARCHAR(50) NOT NULL,
    age VARCHAR(50) NOT NULL,
    barn_id INT,
    FOREIGN KEY (barn_id) REFERENCES barns(barn_id)
)

CREATE TABLE dairyproduct(
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    quantity VARCHAR(50) NOT NULL,
    barn_id INT,
    farmer_id INT,
    FOREIGN KEY (barn_id) REFERENCES barns(barn_id),
    FOREIGN KEY (farmer_id) REFERENCES farmer(farmer_id)
)

CREATE TABLE farmhand(
    farmhand_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    specialty VARCHAR(255) NOT NULL,
    hoursworked VARCHAR(50) NOT NULL
)