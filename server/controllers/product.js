

const Product = require('./../models/product');


//funcion para crear un nuevo producto en la base de datos 
function newProduct (request,response){

    const product = new Product();

    const { type,name, description ,price,stock, saleStatus , files ,sizes } = request.body ; 

    product.name=name;
    product.type = type;
    product.description= description;
    product.price=price;
    product.stock=stock;
    product.saleStatus=saleStatus;
    //cargar rutas del servidor
    product.files=files;
    product.sizes=sizes;

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


function getProduct(request,response){

    const {id} = request.params;

    Product.find({"_id":{$eq:id}},(error,productStored)=>{
        if(error){
            response.status(500).send({message:"Error del servidor."})
        } else {
            if (!productStored){
                response.status(404).send({message:"Productos no encontrados."})
            } else {
                response.status(200).send(productStored)
            }

    }}
    )

}


//nos devuelve un array de productos de tipo "type"
function getProducts(request,response){

    const {type} = request.params;

    Product.find({"type":{$eq:type}},(error,typeProductsStored)=>{
        if(error){
            response.status(500).send({message:"Error del servidor."})
        } else {
            if (!typeProductsStored){
                response.status(404).send({message:"Productos no encontrados."})
            } else {
                response.status(200).send({typeProducts:typeProductsStored})
            }

    }}
    )
}

//nos devuelve un array de productos con el atributo saleStatus = true
function getSaleProducts(request,response){
  
    Product.find({"saleStatus":{$eq:true}},(error,saleProductsStored)=>{
        if(error){
            response.status(500).send({message:"Error del servidor."})
        } else {
            if (!saleProductsStored){
                response.status(404).send({message:"Productos no encontrados."})
            } else {
                response.status(200).send({saleProducts:saleProductsStored})
            }

    }}
    )
}


module.exports = {
        
    newProduct,
    getProduct,
    getProducts,
    getSaleProducts
    
}