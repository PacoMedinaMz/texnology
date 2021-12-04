const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://.../proyectoFinal", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Conexión exitosa con la base de datos");
});

module.exports = mongoose;
