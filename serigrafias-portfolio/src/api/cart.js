import {basePath,apiVersion} from './config';

export function newCartApi(userEmail){

    const url = `${basePath}/${apiVersion}/new-cart`; 

    const params = {                                   

        method: 'POST', 
        body: JSON.stringify({"userEmail" : userEmail}),
        headers: {
            "Content-type":"application/json"                        
        }


    };

    return fetch(url,params).then (response => {return response})
                            .then(result=>{
                                if (result) {  
                                    return {ok: true,message: "Carrito creado correctamente"}
                                    }  
                                return {ok: false,message: result.message } })
                                    .catch(err => {    // si da error lo capturamos
                                        return {ok: false,message: err.message }}) 

}

export function getCartApi(userEmail){

    const url = `${basePath}/${apiVersion}/get-cart`; 

    const params = {                                   

        method: 'GET', 
        body: JSON.stringify({"userEmail" : userEmail}),
        headers: {
            "Content-type":"application/json"                        
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