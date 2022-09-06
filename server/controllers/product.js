

const Product = require('./../models/product');


//funcion para crear un nuevo producto en la base de datos 
function newProduct (request,response){

    const product = new Product();

    const { type,name, description ,price,stock, saleStatus , files } = request.body ; 

    product.name=name;
    product.type = type;
    product.description= description;
    product.price=price;
    product.stock=stock;
    product.saleStatus=saleStatus;
    //cargar rutas del servidor
    product.files=files;

    product.save((err,productStored) =>{
        if (err){
            console.log(err)
            //en caso de que el name del producto de repetido(campo unique)
            response.status(500).send({message: "Error del servidor , el producto ya existe "})
        } else {
            if (!productStored){
                response.status(404).send({message: "Error al crear el producto "})
            } else {
                response.status(200).send({product:productStored})
                    }
        }
    })



}

module.exports = {
        
    newProduct,
    
}