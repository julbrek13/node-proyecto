//si hay algun error aparecera con este prefijo
const debug = require("debug")("app:module-products-controler");
const { ProductsService } = require("./service");
module.exports.ProductsController = {
  //en controler voy a verificar si existe algun error mediante try y catch
  getProducts: async (req, res) => {
    //hago async ya que trabajamos con una promesa
    try {
      const products = await ProductsService.getAll();
      res.json(products);
    } catch (error) {
      debug(error);
      res.status(500).json({ massage: "internar server error" });
    }
  },
  getProduct: (req, res) => {},
  createProducts: (req, res) => {
    try {
      const { body } = req;
      const insertedId = ProductsService.create(body);
      res.json(insertedId);
    } catch (error) {
      debug(error);
      res.status(500).json({ massage: "internar server error" });
    }
  },
};
