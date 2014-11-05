DROP SCHEMA IF EXISTS trajan CASCADE;
CREATE SCHEMA trajan;

SET search_path = trajan, public;

DROP TABLE IF EXISTS trajan.users;
CREATE TABLE users (
  userid SERIAL PRIMARY KEY,
  fname varchar(50),
  lname varchar(50),
  email varchar(75) default '',
  pwhash varchar(256) NOT NULL
);
