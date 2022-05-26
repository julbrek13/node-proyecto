const {Database} = require("../database/index");

// getall se encargara de traernos los datos de la base en cuanto a productos
const COLLECTIONS = 'products';
//usamos await y async ya que Database es una promesa 
const getAll = async () => {
const collection =  await Database(COLLECTIONS);
//convertimos en arreglo los datos que se encuentren en la bd de producto.
return await collection.find({}).toArray();
}
const getById = async () => {
    const collection = await Database(COLLECTIONS);
    return collection.find)One()
}
module.exports.ProductsService  = {
    getAll

}