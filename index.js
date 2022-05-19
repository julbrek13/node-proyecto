//este archivo generara nuestro servidor

const express = require("express");
//una vez que se requiere debug le paso el parametro que agregaos en el debug del package,json
const debug = require("debug")("app:main");

//objeto de configuracion
const { Config } = require("../proyecto/src/config/index");

const app = express();

// le damos la capacidad de recibir datos
app.use(express.json());

//modulos
var PORT = parseInt(Config.port);
app.listen(PORT, () => {
  //utilizamos debug
  debug(`Servidor escuchando en el puerto ${PORT}`);
});
