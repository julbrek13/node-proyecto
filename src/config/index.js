//dotenv ayuda a traer las variables que tenemos en el .env
//esta es la forma en la que trabaja dontenv
require("dotenv").config();

// odos los archivos  van a ser pequeños modulos

module.exports.Config = {
  //el objeto de config que sera exportado tendra las variables de entorno
  //en este ejemploa accedemos al port del .env
  port: process.env.PORT,
  mongoUri: process.env.mongoMONGO_URI,
  mongoDbname: process.env.MONGO_DBNAME,
};
