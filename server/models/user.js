const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = Schema({

        name: String,
        lastname: String,
        phone:{
            type : String,
             
        },
        email :{
                type : String,
                unique: true
            },
        password : String,
        repeatPassword : String,
        role: String
})

module.exports = mongoose.model('User',UserSchema)