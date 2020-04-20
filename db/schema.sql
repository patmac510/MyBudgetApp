DROP DATABASE IF EXISTS budgetapp;

CREATE DATABASE budgetapp;

\c budgetapp;

CREATE SCHEMA budget;

CREATE TABLE budget.profile (
  user_name text,
  user_id serial NOT NULL,
  income int,
  budget int,
  spending int,
  month text,
  year int,
  PRIMARY KEY (user_id)
);

CREATE TABLE budget.categories (
  category_name text,
  category_id serial NOT NULL,
  color text,
  user_id int,
  total_amount int,
  current_amount int,
  PRIMARY KEY (category_id),
  FOREIGN KEY (user_id) REFERENCES budget.profile (user_id)
);

CREATE TABLE budget.transactions (
  transaction_name text,
  transaction_id serial NOT NULL,
  category_name text,
  amount int,
  transaction_date int,
  user_id int,
  PRIMARY KEY (transaction_id),
  FOREIGN KEY (user_id) REFERENCES budget.profile (user_id),
  FOREIGN KEY (category_name) REFERENCES budget.categories (category_name)
);

CREATE INDEX category_index ON budget.transaction (category_name);
