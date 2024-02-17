-- Active: 1706786442782@@127.0.0.1@3306@Investment_Bank
CREATE DATABASE Investment_Bank
    DEFAULT CHARACTER SET = 'utf8mb4';

USE Investment_Bank;

-- Client_Type does not exist anymore
-- SELECT * FROM Client_Type;

-- Registration_Number_Type does not exist anymore
-- SELECT * FROM Registration_Number_Type;

SELECT * FROM Instrument_Type;
SELECT * FROM Client;
SELECT * FROM Complex_Instruments;
SELECT * FROM Non_Complex_Instruments;

-- Create Client Type 
CREATE TABLE Client_Type (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_type VARCHAR(255) NOT NULL
);

-- ------------------------------
-- To Get ClientTypeID Constraint
SHOW CREATE TABLE Client

-- Drop FOREIGN KEY Constraint
ALTER TABLE Client
DROP FOREIGN KEY Client_ibfk_1;

-- Drop ClientTypeID Column
ALTER TABLE Client
DROP COLUMN ClientTypeID;

-- Delete Client_Type
DROP TABLE Client_Type;
-- ------------------------------

-- To Get RegNumKey Constraint
SHOW CREATE Table Client;

-- Drop FOREIGN KEY Constraint
ALTER TABLE Client
DROP FOREIGN KEY Client_ibfk_2;

-- Drop RegNumKey Column
ALTER TABLE Client
DROP COLUMN RegNumKey;

-- Delete Registration_Number_Type
DROP TABLE Registration_Number_Type;
-- ------------------------------


-- Create Table Registration Number Type
CREATE TABLE Registration_Number_Type (
    id INT AUTO_INCREMENT PRIMARY KEY,
    registration_number_type VARCHAR(255) NOT NULL
);

-- Create Table For Investment Types
CREATE TABLE Instrument_Type (
    id INT AUTO_INCREMENT PRIMARY KEY,
    instrument_type VARCHAR(255) NOT NULL
);

-- Create Client
CREATE TABLE Client (
    ClientID INT AUTO_INCREMENT PRIMARY KEY,
    ClientTypeID INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    RegNumKey INT NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    Investments INT NOT NULL,
    FOREIGN KEY(ClientTypeID) REFERENCES Client_Type(id),
    FOREIGN KEY(RegNumKey) REFERENCES Registration_Number_Type(id),
    FOREIGN KEY(Investments) REFERENCES Instrument_Type(id)
);

-- Create Table For Complex Investment Instruments
CREATE TABLE Complex_Instruments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    complex_instrument VARCHAR(255) NOT NULL,
    FOREIGN KEY (id) REFERENCES Instrument_Type (id)
);

-- Create Table For Non-Complex Investment Instruments
CREATE TABLE Non_Complex_Instruments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    non_complex_instrument VARCHAR(255) NOT NULL,
    FOREIGN KEY (id) REFERENCES Instrument_Type (id)
);

ALTER TABLE Client
ADD client_type VARCHAR(255); 

ALTER TABLE Client
ADD registration_number_type VARCHAR(3);


-- Insert Client Types. Retrieved From Jyske Bank Investment Documents
-- INSERT INTO Client_Type (client_type) values ('Retail clients');
-- INSERT INTO Client_Type (client_type) values ('Professional clients');
-- INSERT INTO Client_Type (client_type) values ('Eligible counterparties');

-- Insert Registration Number Types
-- INSERT INTO Registration_Number_Type (registration_number_type) values ('CPR');
-- INSERT INTO Registration_Number_Type (registration_number_type) values ('CVR');


-- Insert Instrument_Type
INSERT INTO Instrument_Type (instrument_type) VALUES ('Non Complex Instruments');
INSERT INTO Instrument_Type (instrument_type) VALUES ('Complex Instruments');

-- Insert Complex Instruments
INSERT INTO Complex_Instruments (complex_instrument) values ('Index-linked bonds');
INSERT INTO Complex_Instruments (complex_instrument) values ('Convertible bond');
INSERT INTO Complex_Instruments (complex_instrument) values ('Government bonds, other');
INSERT INTO Complex_Instruments (complex_instrument) values ('Structured bond');
INSERT INTO Complex_Instruments (complex_instrument) values ('Foreign mortgage bond');
INSERT INTO Complex_Instruments (complex_instrument) values ('Corporate bond, other complex');
INSERT INTO Complex_Instruments (complex_instrument) values ('Interest rate swap');
INSERT INTO Complex_Instruments (complex_instrument) values ('Currency swap');



INSERT INTO Client (name, address, email, phone, Investments, client_type, registration_number_type) values ('Gorm Den Gamle', 'Gormsgade Jelling', 'gorm@gmail.com', '1234567', 2, 'Eligible counterparties', 'CPR');