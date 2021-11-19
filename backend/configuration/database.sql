-- we will create the sql commands here to create tables and databases..
CREATE DATABASE ecommerce;

CREATE TABLE Categories(
    category_id VARCHAR(255) NOT NULL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL,
);
    -- related_products VARCHAR(255)[] user_id REFERENCES Users

CREATE TABLE Products(
product_id VARCHAR(255) NOT NULL PRIMARY KEY,
product_name VARCHAR(255) NOT NULL,
product_desc TEXT NOT NULL,
product_images blob(255),
-- category VARCHAR(200) 
);

CREATE TABLE Users(
    user_id UUID NOT NULL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_admin BOOL NOT NULL DEFAULT false,
    is_active BOOL NOT NULL DEFAULT false
);
