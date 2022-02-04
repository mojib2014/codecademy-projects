DROP SCHEMA IF EXISTS public  CASCADE;
CREATE SCHEMA public;
SET SEARCH_PATH = public;

DROP TABLE IF EXISTS customers; 
DROP TABLE IF EXISTS books; 
DROP TABLE IF EXISTS orders; 

CREATE TABLE customers
	(
	customer_id		INTEGER	NOT NULL,
	first_name		VARCHAR(100)	NOT NULL,
	last_name		VARCHAR(100)	NOT NULL,
	email_address	VARCHAR(300)	NULL,
	home_phone		VARCHAR(100)	NULL,
	city				VARCHAR(50)		NULL,
	state_name		VARCHAR(50)		NULL,
	years_old		INTEGER			NULL
	);

CREATE TABLE books
	(
	book_id					INTEGER			GENERATED ALWAYS AS IDENTITY	PRIMARY KEY,
	title						VARCHAR(100)	NOT NULL,
	author					VARCHAR(100)	NOT NULL,
	original_language		VARCHAR(50)		NOT NULL,
	first_published		INTEGER			NULL,
	sales_in_millions		DECIMAL(8,2)	NULL,
	price						DECIMAL(8,2)	NULL
	);

CREATE TABLE orders
	(
	order_id			INTEGER			GENERATED ALWAYS AS IDENTITY	PRIMARY KEY,
	customer_id		INTEGER			NOT NULL,
	book_id			INTEGER			NOT NULL,
	quantity			INTEGER			NOT NULL,
	price_base		DECIMAL(8,2)	NOT NULL,
	order_date		DATE				NOT NULL,
	ship_date		DATE				NULL
	);

 COPY customers FROM '/Users/mojib2014/Desktop/codeacademy/exercises/postgres-exercises/intermediate-book-store-indexes/customers.txt' DELIMITER ',' CSV HEADER;
 COPY books FROM '/Users/mojib2014/Desktop/codeacademy/exercises/postgres-exercises/intermediate-book-store-indexes/books.txt' DELIMITER ',' CSV HEADER;
 COPY orders FROM '/Users/mojib2014/Desktop/codeacademy/exercises/postgres-exercises/intermediate-book-store-indexes/orders.txt' DELIMITER ',' CSV HEADER;

CREATE INDEX books_author_idx ON books (author);
CREATE INDEX books_title_idx ON books (title);