const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = Schema({

    type: { type:String,
            required: true},
    name: { type:String,
            required: true,
            unique:true},
    description: { type:String,
                   required: true},
    price:Number,
    stock:Number,
    stockStatus:Boolean,
    saleStatus:Boolean,

    files:[{
        type: String
    }]


   
})

module.exports = mongoose.model('Product',ProductSchema)