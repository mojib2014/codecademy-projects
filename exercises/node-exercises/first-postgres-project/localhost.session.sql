CREATE TABLE friends (
    id INTEGER PRIMARY KEY,
    name TEXT,
    birthday DATE
);

INSERT INTO friends (id, name, birthday)
VALUES (1, 'Mojib', DATE '1990-01-01');

SELECT * FROM friends;
