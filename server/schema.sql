drop database if exists movielist;

create database movielist;

use movielist;

CREATE TABLE movielist (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(1000),
  watched BOOLEAN DEFAULT(false)
);

