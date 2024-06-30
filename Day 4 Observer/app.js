const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

// Express app setup
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
    console.log("Observer added. Total observers:", this.observers.length);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
    console.log("Observer removed. Total observers:", this.observers.length);
  }

  notifyObservers(message) {
    console.log("Notifying observers with message:", message);
    this.observers.forEach((observer) => observer.update(message));
  }
}

class Observer {
  constructor(socket) {
    this.socket = socket;
  }

  update(message) {
    this.socket.emit("message", message);
  }
}

const subject = new Subject();

io.on("connection", (socket) => {
  const observer = new Observer(socket);
  subject.addObserver(observer);
  console.log("New client connected. Socket ID:", socket.id);

  socket.on("message", (message) => {
    console.log("Message received from client:", message);
    subject.notifyObservers(`Received: ${message}`);
  });

  socket.on("disconnect", () => {
    subject.removeObserver(observer);
    console.log("Client disconnected. Socket ID:", socket.id);
  });
});

app.get("/", (req, res) => {
  res.send("Socket.IO server is running");
});

server.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
