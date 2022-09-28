
import {basePath,apiVersion} from './config';


export function signUpApi (data){    // funcion para dar de alta un usuario 


    //generamos la url del registro de usuario 
    // es la que vemos en el postman ya configurada previamente 

    const url = `${basePath}/${apiVersion}/sign-up`; 

    //parametros del Endpoint que vamos a enviar 

    const params = {                                              // <<PARAMETROS DE PETICION>>

        method: 'POST',                                             //  METODO
        //el parametro que le pasamos a la funcion en forma de JSON      CUERPO 
        body: JSON.stringify(data),
        headers: {
            "Content-type":"application/json",                        // ENCABEZADO
        }


    };

console.log(data)

    //método global fetch() que proporciona una forma fácil
    // y lógica de obtener recursos de forma asíncrona por la red

   return fetch(url,params).then (response => {return response.json()
        
    }).then(result=>{

        if (result.user) {    // si result tiene .user 
            
            return {ok: true,message: "Usuario creado correctamente"}
        
        
        }  
        return {ok: false,message: result.message } 

                    }).catch(err => {    // si da error lo capturamos
                        return {ok: false,message: err.message }})   

}


export function signInApi(dataUser) {

    const url = `${basePath}/${apiVersion}/sign-in`;

    const params = {
        method: 'POST',                                            
        body: JSON.stringify(dataUser),
        headers: {
            "Content-type":"application/json",                        
        }

    }

    // retornamos un fetch() o sea una peticion asincrona
    return fetch(url,params)

    .then(response => {
       return response.json()
            }).then(result =>{
                return result; 
                })
                    .catch(err => {
                        return err.message
                    })



}