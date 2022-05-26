//necesito traer un cliente de mongodb, el cliente nos ayudarar a conectarnos al servider de mongo atlas
const { MongoClient } = require("mongodb");
//tarigo el paquete de debug pára imprimir lo que necesite, con otro parametro y el nombre del modulo en el que me encuentro
const debug = require("debug")("app:module-database");

const { Config } = require("../config/index");

//el archivo exportara una funcion que se encargara de devolver la conexiona la bd.
//inicializo la variable en nula
var connection = null;
module.exports.Database = (collection) =>
  new Promise(async (resolve, reject) => {
    //codigo para conectarse a la base de datos.
    //mongo db trabaja de forma asincrona y retorna proemsas
    try {
      if (!connection) {
        //genero un cliente
        //mongo client devuelve una conexion
        const cliente = new MongoClient(Config.mongoUri);
        let connection = await cliente.connect();
        debug("nueva conexion realizada con mongoaDB Atlas");
      }
      debug("Reutilizando conexion");
      //en el caso que ya este creada creo una variable y almaceno dicha conexion
      const db = connection.db(Config.mongoDbname);
      //si todo va bien devuelve...
      resolve(db.collection(collection));
    } catch (error) {
      reject(error);
    }
  });
