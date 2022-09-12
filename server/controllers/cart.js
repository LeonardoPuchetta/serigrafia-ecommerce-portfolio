const Cart = require('./../models/cart');


function newCart(request,response){

    const cart = new Cart();

    const {userEmail} = request.body;

    cart.userEmail =userEmail; 
    cart.total = 0;
    cart.items = 0;
    cart.productsId=[];

    cart.save((error,cartStored)=>{
        if(error){
            response.status(500).send({message: "Error del servidor , el carrito ya existe "});
           
        } else {
            if (!cartStored){
                response.status(404).send({message: "Error al crear el carrito "})
        } else {
            response.status(200).send({cart:cartStored})
        }
        }
    })
}

function getCart(request,response){

    const {userEmail} = request.body;

    Cart.find({"userEmail":{$eq:userEmail}},(error,cartStored)=>{
        if(error){
            response.status(500).send({message: "Error del servidor"});
        } else {
            if (!cartStored){
                response.status(404).send({message: "El carrito no existe"})
        } else {
            response.status(200).send({cartStored})
        }
    }
    })
}


module.exports = {
        
    newCart,
    getCart
}