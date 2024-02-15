-- Active: 1706443440629@@127.0.0.1@3306@officce

CREATE DATABASE office
    DEFAULT CHARACTER SET = 'utf8mb4';

CREATE TABLE departaments (
    `depatrament_id` int(10) UNSIGNED NOT NULL,
    `depatrament_name` VARCHAR(225),
    `manager` VARCHAR(225),
    CONSTRAINT departament_pk PRIMARY KEY (`depatrament_id`)
);

CREATE TABLE positions (
    `position_id` int(10) UNSIGNED NOT NULL,
    `position_name` VARCHAR(225),
    `category_type` VARCHAR(225),
    CONSTRAINT position_pk PRIMARY KEY (`position_id`)
);

CREATE TABLE offices (
    `office_id` int(10) UNSIGNED NOT NULL,
    `floor` int(10),
    `room` VARCHAR(225),
    CONSTRAINT office_pk PRIMARY KEY (`office_id`)
);

CREATE TABLE staff (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(225) NOT NULL,
    `email` VARCHAR(225),
    `phone` VARCHAR(15),
    `depatrament_id` int(10) UNSIGNED NOT NULL,
    `position_id` int(10) UNSIGNED NOT NULL,
    `office_id` int(10) UNSIGNED NOT NULL,
    CONSTRAINT staff_pk PRIMARY KEY (id),
    CONSTRAINT department_personId_fk FOREIGN KEY (depatrament_id) REFERENCES departaments (depatrament_id),
    CONSTRAINT position_personId_fk FOREIGN KEY (position_id) REFERENCES positions(position_id),
    CONSTRAINT office_personId_fk FOREIGN KEY (office_id) REFERENCES offices(office_id)
);

CREATE TABLE check_ins (
    `check_id` INT(10) UNSIGNED NOT NULL,
    `person_id` INT(10) UNSIGNED NOT NULL,
    `check_in` DATETIME,
    `check_out` DATETIME,
    CONSTRAINT check_ins_pk PRIMARY KEY (`check_id`),
    CONSTRAINT check_person_fk FOREIGN KEY (`person_id`) REFERENCES staff(`id`)
)
