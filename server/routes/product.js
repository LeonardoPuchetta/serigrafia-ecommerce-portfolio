const express = require('express');

const ProductController = require('./../controllers/product');

// variable para generar otra ruta 
const api = express.Router();

api.post("/new-product",ProductController.newProduct);


module.exports = api 