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
app.use("/contrato", require("./src/contrato"));
app.use("/empleado", require("./src/empleado"));
app.use("/puesto", require("./src/puesto"));
app.use("/reunion", require("./src/reunion"));
app.use("/tareas", require("./src/tareas"));
app.use("/datos", require("./src/datos"));
app.use("/robot", require("./src/robot"));
app.use("/usuario", require("./src/usuario"));
app.use("/convenio", require("./src/convenio"));
app.use("/recibo", require("./src/recibo"));
app.use("/paquete", require("./src/paquete"));

app.listen(port, () => {
  console.log("Escuchando en el puerto " + port);
});
