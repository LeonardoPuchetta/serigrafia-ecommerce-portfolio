import React ,{useState,useEffect} from 'react';

import { getProductsApi } from '../../api/product';
import ProductCard from '../../components/ProductCard';

import './Laminas.css'

export default function Laminas() {
  
    const [arrayLaminas,setArrayLaminas] = useState([]);

    useEffect(()=>{
      getProductsApi("laminas").then(response => {
        setArrayLaminas(response.typeProducts);
      }).catch(error => {
        console.log(error)
      });
    }
    ,[])
  
  
  
  
    return (
      <>
      <div className='container laminas-container'>
      
        {arrayLaminas.map((lamina)=>{
          return (<ProductCard product={lamina} key={lamina._id}/>)
       })}
         
    
      </div>
      </>
    )
}
