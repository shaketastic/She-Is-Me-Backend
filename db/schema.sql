DROP DATABASE IF EXISTS blogs_dev;

CREATE DATABASE blogs_dev;

\c blogs_dev;

CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    name TEXT,
    age NUMERIC,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_anonymous BOOLEAN DEFAULT false
);