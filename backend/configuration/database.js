const { Pool } = require("pg");

const user = process.env.DBUSER;
const password = process.env.DBPASSWORD;
const host = process.env.DBHOST;

const pool = new Pool({
  host,
  user,
  password,
  // port: 5432,
  database: "ecommerce",
});

module.exports = {
  pool,
  query: (queryText, params) => pool.query(queryText, params),
};
