### Schema

CREATE DATABASE techblogs_db;
USE techblogs_db;

CREATE TABLE techblogs
(
	id int NOT NULL AUTO_INCREMENT,
	techblog_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
