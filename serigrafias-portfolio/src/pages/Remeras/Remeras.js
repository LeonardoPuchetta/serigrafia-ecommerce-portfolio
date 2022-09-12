import React,{useEffect,useState} from 'react';

import ProductCard from '../../components/ProductCard';

import { getProductsApi } from '../../api/product';

import { jRemeras } from '../../utils/pruebas';

import './Remeras.css'

export default function Remeras() {

  const [arrayRemeras,setArrayRemeras] = useState([]);

  useEffect(()=>{
    getProductsApi("Remera").then(response => {
      setArrayRemeras(response.typeProducts);
      console.log(response)
    }).catch(error => {
      console.log(error)
    });
  }
  ,[])




  return (
    <>
    <div className='container remeras-container'>
    
      {arrayRemeras.map((remera)=>{
        return (<ProductCard product={remera} key={remera._id}/>)
     })}
       
  
    </div>
    </>
  )
}
