### Schema
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE quotes
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(50) NOT NULL,
	devoured BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);
