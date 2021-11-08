const { Client } = require("pg");

const user = process.env.DBUSER;
const password = process.env.DBPASSWORD;

const client = new Client({
  host: "localhost",
  user,
  password,
  port: 5432,
  database: "ecommerce",
});

module.exports = client;
