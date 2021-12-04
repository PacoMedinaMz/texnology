const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://root:BFfbhrrLA34IY1C2@clusterreactnative.yxylx.mongodb.net/",
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
