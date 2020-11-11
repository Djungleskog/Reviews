DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews;

USE reviews;

CREATE TABLE reviews (
id INT UNIQUE NOT NULL AUTO_INCREMENT,
product_id  VARCHAR(144),
title VARCHAR(144),
text TEXT ,
date DATE,
author	VARCHAR(144),
overall_rating	INT,
value_rating	INT,
quality_rating	INT,
appearance_rating INT,
ease_of_assembly_rating  INT,
works_as_expected_rating INT,
recommended	 BOOLEAN,
PRIMARY KEY(id)
);
