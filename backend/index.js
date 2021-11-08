const express = require("express");
const app = express();
const server = require("http").createServer(app);
const port = process.env.PORT || 3001;
require("dotenv").config({ path: "./configuration/.env" });
const client = require("./configuration/database");

app.use(express.json());

client.connect((err) => {
  if (err) console.log(err);
  else console.log("Database connected");
});

app.get("/", async (req, res) => {
  const response = await client.query("SELECT * FROM Users");
  res.json({
    response: response.rows,
  });
});

// Starting the server
server.listen(port, () => {
  console.log("--------------------------");
  console.log(`Server Started at ${port}`);
  console.log("--------------------------");
});
