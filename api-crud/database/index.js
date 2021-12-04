const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://root:3st4BDesD3Pru333b4@m.rmaafs.com:27018/proyectoFinal?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.once("open", () => {
  console.log("Conexión exitosa con la base de datos");
});

module.exports = mongoose;
