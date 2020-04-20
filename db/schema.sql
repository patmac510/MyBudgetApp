DROP DATABASE IF EXISTS budgetApp;

CREATE DATABASE budgetApp;

\c budgetApp;

CREATE SCHEMA budget;

CREATE TABLE budget.user (
  user text,
  user_id serial,
  income number,
  budget number,
  spending number,
  month text,
  year number,
  PRIMARY KEY (user_id)
);

CREATE TABLE budget.categories (
  category_name text,
  category_id serial,
  color text,
  user_id number,
  total_amount number,
  current_amount number,
  PRIMARY KEY (category_id)
  FOREIGN KEY (user_id) REFERENCES (budget.user)
);

CREATE TABLE budget.transactions (
  transaction_name text,
  transaction_id serial,
  category_name text,
  amount number,
  transaction_date number,
  user_id number,
  PRIMARY KEY (transaction_id)
  FOREIGN KEY (user_id) REFERENCES budget.user (user_id)
  FOREIGN KEY (category_name) REFERENCES budget.categories (category_name)
);

CREATE INDEX category_index ON budget.transaction (category_name);
