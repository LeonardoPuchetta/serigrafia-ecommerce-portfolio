const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CartSchema = Schema({

        userEmail: {
            unique : true,
            type : String,
            required: true, 
        },
        total: Number,
        items: Number,
        productsId:[{type:String}]

        
})

module.exports = mongoose.model('Cart',CartSchema)