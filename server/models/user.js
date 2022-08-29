const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = Schema({
        name: String,
        lastname: String,
        celphone:{
            type : String,
            unique : true 
        },
        email :{
                type : String,
                unique : true 
            },
        password : String,
        role: String
})

module.exports = mongoose.model('User',UserSchema)