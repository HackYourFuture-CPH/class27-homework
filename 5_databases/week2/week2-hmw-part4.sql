-- Active: 1706786442782@@127.0.0.1@3306@Investment_Bank
CREATE DATABASE Investment_Bank
    DEFAULT CHARACTER SET = 'utf8mb4';

USE Investment_Bank;


SELECT * FROM Client_Type;
SELECT * FROM Registration_Number_Type;
SELECT * FROM Instrument_Type;


-- Create Client Type 
CREATE TABLE Client_Type (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_type VARCHAR(255) NOT NULL
);

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


-- Insert Client Types. Retrieved From Jyske Bank Investment Documents
INSERT INTO Client_Type (client_type) values ('Retail clients');
INSERT INTO Client_Type (client_type) values ('Professional clients');
INSERT INTO Client_Type (client_type) values ('Eligible counterparties');

-- Insert Registration Number Types
INSERT INTO Registration_Number_Type (registration_number_type) values ('CPR');
INSERT INTO Registration_Number_Type (registration_number_type) values ('CVR');


-- Insert Instrument_Type
INSERT INTO Instrument_Type (instrument_type) VALUES ('Non Complex Instruments');
INSERT INTO Instrument_Type (instrument_type) VALUES ('Complex Instruments');

-- This didn't work
-- INSERT INTO Complex_Instruments (complex_instrument) values ('Index-linked bonds');