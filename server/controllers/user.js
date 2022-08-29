//para encriptar contrasenas 
const bcrypt = require('bcrypt');
//para generar los tokens 
// const jwt = require('../services/jwt');
//para realizar el encriptado del password
const SALTS_TO_BCRYPT = 12;
 
const User = require('../models/user');


function signUp(request,response){
   //nueva instancia del modelo User
   const user = new User();

   const { name, lastname ,celphone,email, password , repeatPassword } = request.body ; 

   //asignamos valores uno a uno con user
   user.name= name;
   user.lastname=lastname;
   user.celphone=celphone;
   user.email=email;
   user.role= "default";

    //creamos una estructura condicional 
    if (!password ||!repeatPassword) {  // si falla algun password 
        
        response.status(404).send({message: "Las contraseñas son obligatorias"})
    } else {

        if (password!==repeatPassword){
            response.status(404).send({message: "Las contraseñas tienen que ser iguales"})
        } else {
            //vamos a encriptar la contrasena 
            bcrypt.hash(password ,SALTS_TO_BCRYPT ,function (err , hash ) {
                    
                if (err){
                    response.status(500).send({message: "Hubo un error de encriptacion "})
                    
                } else {
                    // asignamos la contrasena al usuario 
                    user.password= hash ; 
                    // utilizamos una funcion de mongoose para guardar la contrsena en la base de datos 
                    user.save((err , userStored )=>{
                        if (err){
                            response.status(500).send({message: "Error del servidor , el usuario ya existe "})

                        } else {
                                    if (!userStored){
                                        response.status(404).send({message: "Error al crear el usuario "})

                                    } else {
                                        response.status(200).send({user:userStored})
                                            }
                                }
                                                    })
                        }
            })
        }
    }}




module.exports = {
        
        signUp
    }
