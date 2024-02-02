//En este caso la conexion se realiza mediante tedious en lugar de mssql

const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: process.env.URL_APIFRONTED || "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Api en funcionamiento" });
});

require("./app/routes/persona.routes")(app);
require("./app/routes/usuario.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


//eliminacion de tablas y creacion en la base de datos para actualizar los orm
//db.sequelize.sync({ force: true }).then(() => {
  //console.log("Drop and re-sync db.");
//});