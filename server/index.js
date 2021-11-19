const express = require("express");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const rooms = new Map();

app.get("/rooms", (request, response) => {
  response.json(rooms);
});

io.on("connection", (socket) => {
  console.log("connectedTO", socket.id);
});

server.listen(8888, (error) => {
  if (error) {
    throw Error(error);
  }
  console.log("севрер запущен");
});
