require("dotenv").config({ path: "./configuration/.env" });
const cors = require("cors");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const port = process.env.PORT || 3001;
const db = require("./configuration/database");

// configuering cors
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// body parser
app.use(express.json());
// connecting to databse
db.pool.connect((err, client) => {
  if (err) console.log(err);
  else {
    console.log("Database connected");
  }
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
