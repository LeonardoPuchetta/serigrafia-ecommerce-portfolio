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
    saleStatus:Boolean,

    files:[{
        type: String
    }]


   
})

module.exports = mongoose.model('Product',ProductSchema)