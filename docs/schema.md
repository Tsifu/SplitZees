# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## bills
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
description | string    | not null
amount      | float     | not null
payer_id    | integer   | not null, foreign key
archived    | boolean   | not null, default: false

## owers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
bill_id     | integer   | not null, foreign key
user_id     | integer   | not null, foreign key
amount      | float     | not null
status      | string    | not null, default: "open"
close_date  | date      | not null, default: "open"

## friends
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
friend_id   | integer   | not null, foreign key (references tags), indexed
status      | boolean   | not null, default: false
