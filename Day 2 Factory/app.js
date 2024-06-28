const express = require("express");
const configFactory = require("./config");
const app = express();
const http = require("http");
const server = http.createServer(app);

const config = configFactory.getConfig();
const PORT = config.PORT || 3000;
const MODE = process.env.NODE_ENV || "development";

app.get("/", (req, res) => {
  res.send("100 Days Of 100 Design Pattern Backend Challenge");
});

server.listen(PORT, () => {
  console.log(`Server running on ${MODE} port ${PORT}`);
});
