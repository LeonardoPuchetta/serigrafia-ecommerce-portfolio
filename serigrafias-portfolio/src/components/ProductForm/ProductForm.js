import React , {useState} from 'react';

import { newProductApi } from '../../api/product';

import './ProductForm.css'

export default function ProductForm(props) {

const {handleHideAddProduct} = props;


 // estado para guardar datos 
 const [inputs , setInputs] = useState ({
    type:"Remera",
    name:"",
    description:"",
    price: null,
    stock:null,
    saleStatus: false,
    files:[]
  });


  const changeForm = e => {

    
            setInputs ({
                ...inputs,
                [e.target.name]: e.target.value
            }) 

    
           
  }

  const registerProduct = async e =>{

    

    e.preventDefault();  
    console.log(inputs);

    newProductApi(inputs);
    
    resetForm();

    setTimeout(()=>{
        handleHideAddProduct();
      },1000)
  
   }

  const resetForm = () => { 

    setInputs({
        type:"",
        name:"",
        description:"",
        price: null,
        stock:null,
        saleStatus: false,
        files:[]
    })
  }

  return (
    <form onSubmit= {registerProduct} >
        <div className="form-group" >
            <label htmlFor="type">Tipo de producto
                <select value={inputs.type} onChange={changeForm} name='type'>
                    <option value='Remera' selected >Remera</option>
                    <option value='Lamina'>Lamina</option>
                    <option value='Parche'>Parche</option>
                </select>
            </label>
        </div>

        <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" className="form-control" id="name" 
                placeholder="Nombre" required
                value= {inputs.name} name='name' onChange={changeForm}/>
        </div>

        <div className="form-group">
            <label htmlFor="description">Descripcion del producto</label>
            <input type="textarea" className="form-control" id="description" 
                placeholder="" required
                value= {inputs.description} name='description' onChange={changeForm}/>
        </div>

        <div className="form-group">
            <label htmlFor="price">Precio</label>
            <input type="number" className="form-control" id="price" 
                placeholder="Ingresa precio de venta" required
                value= {inputs.price} name='price' onChange={changeForm}/>
        </div>

        <div className="form-group">
            <label htmlFor="stock">Stock disponible</label>
            <input type="number" className="form-control" id="stock" 
                placeholder="Ingresa stock disponible" required
                value= {inputs.stock} name='stock' onChange={changeForm}/>
        </div>

        <div className="form-group" >
            <label htmlFor="saleStatus">Precio lanzamiento
                <select value={inputs.saleStatus} onChange={changeForm} name='saleStatus'>
                    <option value={false} selected>Precio normal</option>
                    <option value={true}>En oferta</option>
                </select>
            </label>
        </div>

        <button type="submit" className="btn btn-primary">Registrar Producto</button>

        

    </form>
  )
  }
