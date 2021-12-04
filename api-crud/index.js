const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express().use(cors()).use(express.json()); //Crea al servidor
const port = process.env.PORT || 20404; //Puerto donde abriremos el servicio

//Ruta GET / para saber si el servicio está corriendo
app.get("/", (req, res) => {
  res.status(200).json({
    message: "works",
  });
});

app.use("/pago", require("./src/pago"));

app.listen(port, () => {
  console.log("Escuchando en el puerto " + port);
});
