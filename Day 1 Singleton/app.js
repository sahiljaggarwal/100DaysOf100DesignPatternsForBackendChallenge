const express = require("express");
const http = require("http");
const app = express();
const db = require("./db");
const config = require("./config");
const server = http.createServer(app);
const port = config.server_port;

app.use(express.json());

app.get("/", async (req, res) => {
  const result = await db.query("SELECT NOW()");
  if (!result) {
    return res.status(404).json({ message: "data not found", success: true });
  }
  return res
    .status(200)
    .json({ message: "data fetched sucessfully", data: result, success: true });
});

server.listen(port, () => {
  console.log("server is running " + port);
});
