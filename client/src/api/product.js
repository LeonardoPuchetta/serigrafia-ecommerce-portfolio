import {basePath,apiVersion} from './config';

export function newProductApi(data){

    const url = `${basePath}/${apiVersion}/new-product`; 

    const params = {                                              // <<PARAMETROS DE PETICION>>

        method: 'POST',                                             //  METODO
        //el parametro que le pasamos a la funcion en forma de JSON      CUERPO 
        body: JSON.stringify(data),
        headers: {
            "Content-type":"application/json",                        // ENCABEZADO
        }
    };

    return fetch(url,params).then (response => {return response.json()})
                            .then(result=>{
                                if (result.user) {    // si result tiene .user 
                                    return {ok: true,message: "Producto creado correctamente"}
                                    }  
                                return {ok: false,message: result.message } })
                                    .catch(err => {    // si da error lo capturamos
                                        return {ok: false,message: err.message }}) 

}

export function getProductApi(id){
    
    const url = `${basePath}/${apiVersion}/get-product/${id}`; 

    const params = {                                              // <<PARAMETROS DE PETICION>>

        method: 'GET',                                             //  METODO
        headers: {
            "Content-type":"application/json",                        // ENCABEZADO
        }
    };

    return fetch(url,params)
    .then(response => {
        return response.json()
    })
        .then(result => {
            return result
        })
            .catch(err =>{
                return err.message
            })

}


export function getProductsApi(type){
    
    const url = `${basePath}/${apiVersion}/get-products/${type}`; 

    const params = {                                              // <<PARAMETROS DE PETICION>>
        method: 'GET',                                             //  METODO
        headers: {
            "Content-type":"application/json",                        // ENCABEZADO
        }
    };

    return fetch(url,params)
    .then(response => {
        return response.json()
    })
        .then(result => {
            return result
        })
            .catch(err =>{
                return err.message
            })

}

export function getSaleProductsApi(){
    
    const url = `${basePath}/${apiVersion}/get-sale-products`; 
    const params = {                                         

        method: 'GET',                                            
        headers: {
            "Content-type":"application/json",                       
        }
    };

    return fetch(url,params)
    .then(response => {
        return response.json()
    })
        .then(result => {
            return result
        })
            .catch(err =>{
                return err.message
            })

}