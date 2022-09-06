import React from 'react';

import ProductCard from '../../components/ProductCard';

import { jRemeras } from '../../utils/pruebas';

import './Remeras.css'

export default function Remeras() {


console.log(jRemeras)

  return (
    <>
    <div className='container remeras-container'>
    
      {jRemeras.map((remera)=>{
        return (<ProductCard product={remera} key={remera.id}/>)
     })}
       
  
    </div>
    </>
  )
}
