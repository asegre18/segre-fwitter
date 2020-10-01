DROP DATABASE IF EXISTS fwitter_db;

CREATE DATABASE fwitter_db;

USE fwitter_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(16) NOT NULL,
    PRIMARY KEY(id)
);

