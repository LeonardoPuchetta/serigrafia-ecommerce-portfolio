const express = require('express');

const CartController = require ('./../controllers/cart');

// variable para generar otra ruta 
const api = express.Router();

api.post("/new-cart",CartController.newCart);
api.get("/get-cart",CartController.getCart);




module.exports = api