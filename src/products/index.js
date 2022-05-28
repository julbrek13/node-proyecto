const express = require("express");
const { ProductsController } = require("./controler");

const router = express.Router();
//agregara todas las rutas mecesarias de acuerdfo a nuestra aplicacion.
//configuramos nuestros controladores en nuestro archivo principal.
module.exports.ProductsAPI = (app) => {
  router
    //debemos pasarla como un callback y no ejecutar la funcion
    .get("/", ProductsController.getProducts)
    .get("/id:", ProductsController.getProduct)
    .post("/", ProductsController.createProducts);

  app.use("/api/products", router);
};
