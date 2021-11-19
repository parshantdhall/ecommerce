const { Client } = require("pg");

const user = process.env.DBUSER;
const password = process.env.DBPASSWORD;
const host = process.env.DBHOST;

const client = new Client({
  host,
  user,
  password,
  port: 5432,
  database: "ecommerce",
});

module.exports = {
  client,
  query: (queryText, params) => client.query(queryText, params),
};
