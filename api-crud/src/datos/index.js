const express = require("express");
const mongoose = require("../../database");
const { ObjectID } = require("mongodb");
const app = express.Router();

const Model = mongoose.model("Datos", {
  FechaInicio: Date,
  FechaFinal: Date,
  MsgEnviados: Number,
  MsgRecibidos: Number,
  IdRobot: String,
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Endpoints works.",
  });
});

/**
 * Endpoint para crear usuario
 */
app.post("/", (req, res) => {
  const data = req.body;
  const model = new Model(data);

  model
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
});

/**
 * Endpoint para consultar datos de un ID
 */
app.get("/:id", (req, res) => {
  const id = req.params.id || "";
  Model.find({ _id: new ObjectID(id) })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
});

/**
 * Endpoint para actualizar datos
 */
app.patch("/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;

  Model.findByIdAndUpdate(
    { _id: new ObjectID(id) },
    {
      $set: data,
    }
  )
    .then((data) => {
      res.json({ success: 1, data: data });
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
});

/**
 * Endpoint para eliminar un ID
 */
app.delete("/:id", (req, res) => {
  const id = req.params.id;

  Model.findByIdAndDelete({ _id: id })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
});

module.exports = app;
