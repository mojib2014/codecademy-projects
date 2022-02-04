SELECT * FROM customers LIMIT 10;
SELECT * FROM books LIMIT 10;
SELECT * FROM orders LIMIT 10;

SELECT * FROM pg_Indexes
WHERE tablename IN ('customers', 'books', 'orders')
ORDER BY tablename, indexname;

EXPLAIN ANALYZE SELECT * FROM orders
WHERE quantity > 18;

DROP INDEX IF EXISTS orders_quantity_idx;
CREATE INDEX orders_quantity_idx ON orders(quantity)
WHERE quantity > 18;

EXPLAIN ANALYZE SELECT * FROM orders
WHERE quantity > 18;


EXPLAIN ANALYZE SELECT * FROM customers
WHERE customer_id = '10';

ALTER TABLE customers DROP CONSTRAINT customers_pkey;
ALTER TABLE customers
ADD PRIMARY KEY (customer_id);

EXPLAIN ANALYZE SELECT * FROM customers
WHERE customer_id = '10';

DROP INDEX IF EXISTS customers_customer_id_idx;
CREATE INDEX customers_customer_id_idx ON customers(customer_id);

CLUSTER customers USING customers_customer_id_idx;

SELECT * FROM customers LIMIT 10;

EXPLAIN ANALYZE SELECT customer_id, book_id, quantity
FROM orders;

CREATE INDEX orders_customer_id_book_id_idx ON orders(customer_id, book_id);

EXPLAIN ANALYZE SELECT customer_id, book_id, quantity
FROM orders;

EXPLAIN ANALYZE SELECT customer_id, book_id, quantity
FROM orders;

DROP INDEX IF EXISTS orders_customer_id_book_id_idx;

CREATE INDEX orders_customer_id_book_id_quantity_idx ON orders(customer_id, book_id, quantity);

EXPLAIN ANALYZE SELECT customer_id, book_id, quantity
FROM orders;

DROP INDEX IF EXISTS orders_customer_id_book_id_quantity_idx;

EXPLAIN ANALYZE SELECT author, title
FROM books;

CREATE INDEX books_author_title_idx ON books(author, title);

EXPLAIN ANALYZE SELECT author, title 
FROM books;

DROP INDEX IF EXISTS books_author_title_idx;

EXPLAIN ANALYZE SELECT * FROM orders
WHERE (quantity * price_base) > 100;

CREATE INDEX orders_total_price_idx ON orders((quantity * price_base));

EXPLAIN ANALYZE SELECT * FROM orders
WHERE (quantity * price_base) > 100;

DROP INDEX IF EXISTS orders_total_price_idx;

SELECT * FROM pg_Indexes
WHERE tablename IN ('customers', 'books', 'orders')
ORDER BY tablename, indexname;

DROP INDEX IF EXISTS books_author_idx;
DROP INDEX IF EXISTS books_title_idx;

CREATE INDEX books_author_title_idx ON books(author, title);

DROP INDEX IF EXISTS orders_customer_id_quantity_idx;

CREATE INDEX customers_last_name_first_name_email_address_idx ON customers(last_name, first_name, email_address);

SELECT * FROM pg_Indexes
WHERE tablename IN ('customers', 'books', 'orders')
ORDER BY tablename, indexname;

