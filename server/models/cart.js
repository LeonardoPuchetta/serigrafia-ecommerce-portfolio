const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CartSchema = Schema({

        userId: {
            type : String,
            unique : true,
            required: true, 
        },
        total: Number,
        items:Number,
        products:[],

        
})

module.exports = mongoose.model('Cart',CartSchema)