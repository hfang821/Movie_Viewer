const express = require("express");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");

const dotenv = require("dotenv");
dotenv.config({ path: "server/.env" });

const PORT = process.env.PORT || 3001;
const app = express();

var cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
