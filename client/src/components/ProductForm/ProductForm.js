import React , {useState} from 'react';

import { newProductApi } from '../../api/product';

import './ProductForm.css'

export default function ProductForm(props) {

const {handleHideAddProduct} = props;


 // estado para guardar datos 
 const [inputs , setInputs] = useState ({
    type:"remeras",
    name:"",
    description:"",
    price: null,
    stock:null,
    saleStatus: false,
    files:[],
    sizes:[]
  });

  
  const changeForm = e => {
     
            setInputs ({
                ...inputs,
                [e.target.name]: e.target.value
            }) 
        
  }



  const registerProduct = async e =>{

    e.preventDefault(); 
    
      //guardamos los checkbox en el array de sizes 
    let checkboxes = document.querySelectorAll('input[type = "checkbox"]:checked');
    console.log('hola')
    checkboxes.forEach((checkbox) => {
          if (!inputs.sizes.includes(checkbox.value)){
         inputs.sizes.push(checkbox.value);
          }
    });

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
        files:[],
        sizes:[]
    })
  }

  return (
    <form onSubmit= {registerProduct} >
        <div className="form-group" >
            <label htmlFor="type">Tipo de producto
                <select value={inputs.type} onChange={changeForm} name='type'>
                    <option value='remeras' selected>Remera</option>
                    <option value='laminas'>Lamina</option>
                    <option value='parches'>Parche</option>
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

        { inputs.type === 'remeras' ? <div className="form-group" >
            <label htmlFor="sizes">Talles disponibles : 
            <div className="checkbox-sizes">
                <input type="checkbox" id="s" name="s" value="s" /><span>S</span>
                <input type="checkbox" id="m" name="m" value="m"/><span>M</span>
                <input type="checkbox" id="sm" name="sm" value="l"/><span>L</span>
                <input type="checkbox" id="sm" name="sm" value="xl"/><span>XL</span>
                <input type="checkbox" id="sm" name="sm" value="xxl"/><span>XXL</span>
            </div>
            </label>
        </div> : <></>}
        { inputs.type === 'laminas' ? <div className="form-group" >
            <label htmlFor="sizes">Formatos disponibles : 
            <div className="checkbox-sizes">
                <input type="checkbox" id="a4" name="a4" value="a4" /><span>A4</span>
                <input type="checkbox" id="a3" name="a3" value="a3"/><span>A3</span>
                <input type="checkbox" id="oficio" name="oficio" value="oficio"/><span>Oficio</span>
              
            </div>
            </label>
        </div> : <></>}

        <button type="submit" className="btn btn-primary">Registrar Producto</button>

        

    </form>
  )
  }
