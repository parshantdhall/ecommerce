require("dotenv").config({ path: "./configuration/.env" });
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const port = process.env.PORT || 3001;
const db = require("./configuration/database");

// body parser
app.use(express.json());

// connecting to databse
db.client.connect((err) => {
  if (err) console.log(err);
  else console.log("Database connected");
});

// --------Routes confuiguration-------------
const addRoutes = require("./routes");
addRoutes(app);

// Starting the server
server.listen(port, () => {
  console.log("--------------------------");
  console.log(`Server Started at ${port}`);
  console.log("--------------------------");
});
