const express = require('express');

const ProductController = require('./../controllers/product');

// variable para generar otra ruta 
const api = express.Router();

api.post("/new-product",ProductController.newProduct);
api.get("/get-product/:id",ProductController.getProduct);
api.get("/get-products/:type",ProductController.getProducts);
api.get("/get-sale-products",ProductController.getSaleProducts);


module.exports = api 