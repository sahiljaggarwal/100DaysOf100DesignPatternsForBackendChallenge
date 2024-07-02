const express = require("express");
const app = express();
app.use(express.json());

// Middleware for validating request body
const validateRequestBody = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).send("Name is required");
  }
  next();
};

// Middleware for checking user authorization
const checkAuthorization = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).send("Authorization required");
  }
  next();
};

// Middleware for handling the request
const handleRequest = (req, res) => {
  res.send(`Hello, ${req.body.name}!`);
};

// Chain of responsibility
app.post("/greet", validateRequestBody, checkAuthorization, handleRequest);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
