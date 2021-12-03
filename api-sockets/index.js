var express = require("express");
const cors = require("cors");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
var messages = [
  {
    texto: "Buen día. ¿En qué te puedo ayudar?",
    autor: "Administrador",
    fecha: "Ahora",
  },
];

let contador = 1;
io.on("connection", function (socket) {
  console.log("Alguien se ha conectado con Sockets");
  socket.emit("nombre", contador++);
  socket.emit("messages", messages);
  socket.on("new-message", function (data) {
    console.log(data);
    messages.push(data);
    io.sockets.emit("messages", messages);
  });
});

app.use(
  cors({
    origin: "*",
  })
);

const PORT = 3502;
server.listen(PORT, function () {
  console.log("Servidor corriendo en http://localhost:" + PORT);
});
