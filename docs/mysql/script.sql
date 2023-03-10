DROP DATABASE IF EXISTS library;

CREATE DATABASE library CHARSET = UTF8 COLLATE utf8_general_ci;

USE library;

CREATE TABLE
  user (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    matricula VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    salario FLOAT (10, 2) NOT NULL
  );

CREATE TABLE
  book (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    price FLOAT (6, 2) NOT NULL,
    date_emprest DATE NOT NULL,
    date_prev_dev DATE NOT NULL,
    date_devolution DATE,
    tax_day FLOAT (6, 2)
  );

INSERT INTO
  user
VALUES
  (
    DEFAULT,
    "Isaac Gonçalves",
    "12345",
    "admin",
    3000
  );

INSERT INTO
  book
VALUES
  (
    DEFAULT,
    "Watchmen",
    "Alan Moore",
    117.55,
    "2023-02-25",
    "2023-03-10",
    NULL,
    NULL
  ),
  (
    DEFAULT,
    "Férias de Inverno",
    "Melissa Próspero",
    90.55,
    "2023-02-25",
    "2023-03-10",
    NULL,
    NULL
  );