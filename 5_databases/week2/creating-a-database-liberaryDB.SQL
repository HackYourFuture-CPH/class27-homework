-- Active: 1706443592393@@127.0.0.1@3306@liberary
use liberary;


CREATE TABLE `rack` (
  `rack_number` int not NULL AUTO_INCREMENT,
   PRIMARY KEY (`rack_number`),
  `genre_name_to_rack` VARCHAR(50) not NULL,
   CONSTRAINT `fk_genre_name_to_rack` FOREIGN KEY(`genre_name_to_rack`) REFERENCES `genre` (`genre_name`)
);


CREATE TABLE `borrowing_log` (
  `borrowing_id` int NOT NULL AUTO_INCREMENT,
  `borrowing_data` datetime,
  `delivery_date` datetime,
  PRIMARY KEY (`borrowing_id`)
);


CREATE TABLE `genre` (
  `genre_id` INT NOT NULL AUTO_INCREMENT,
  `genre_name` varchar(50) NOT NULL,
  PRIMARY KEY (`genre_name`)
);


CREATE TABLE `member` (
  `member_id` int NOT NULL AUTO_INCREMENT,
  `member_name` varchar(50) NOT NULL,
  PRIMARY KEY (`member_id`)
);


-- the main table, (books)
CREATE TABLE `book` (
  `book_id` int NOT NULL AUTO_INCREMENT,
  `book_title` varchar(50) NOT NULL,
  `author` varchar(50) NOT NULL,
  `published_data` datetime NOT NULL,
  `rack_number_to_book` INT,
  `member_id_to_book` INT,
  `genre_name_to_book` VARCHAR(50),
  `borrowing_id_to_book` INT,
  PRIMARY KEY (`book_id`),
  CONSTRAINT `fk_rack_number` FOREIGN KEY (`rack_number_to_book`) REFERENCES `rack`(`rack_number`) ON DELETE CASCADE,
  CONSTRAINT `fk_member_id` FOREIGN KEY (`member_id_to_book`) REFERENCES `member`(`member_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_genre_name` FOREIGN KEY (`genre_name_to_book`) REFERENCES `genre`(`genre_name`) ON DELETE CASCADE,
  CONSTRAINT `fk_borrowing_id` FOREIGN KEY (`borrowing_id_to_book`) REFERENCES `borrowing_log`(`borrowing_id`) ON DELETE CASCADE
);


CREATE INDEX idx_book_book_title ON book (book_title);
