//con esto me permite hacer busquedas por id.
const { ObjectId } = require("mongodb");
const { Database } = require("../database/index");

// getall se encargara de traernos los datos de la base en cuanto a productos
const COLLECTION = "products";
//usamos await y async ya que Database es una promesa
const getAll = async () => {
  const collection = await Database(COLLECTION);
  //convertimos en arreglo los datos que se encuentren en la bd de producto.
  return await collection.find({}).toArray();
};
const getById = async (id) => {
  const collection = await Database(COLLECTION);
  //findone es un metodo de consulta en mondo que recibe una consulta que es el id.
  //el id mongo lo establece como _id
  return collection.findOne({ _id: ObjectId(id) });
};
//creamos una constante que se encargue de crear un nuevoi producto en la base de datos
const create = async (product) => {
  const collection = await Database(COLLECTION);
  //usanos un metodo de mongo db llamado insert one que recibe mis datos del producto y hace una insersion  en mongo db para devolver el resultado
  let result = collection.insertOne(product);
  //nos devuelve el identificador del objeto que se acaba de agregar
  return result.insertedId;
};
module.exports.ProductsService = {
  getAll,
  getById,
  create,
};
