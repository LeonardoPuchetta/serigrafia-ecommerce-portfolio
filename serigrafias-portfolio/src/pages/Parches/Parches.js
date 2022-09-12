import React ,{useState,useEffect} from 'react';

import { getProductsApi } from '../../api/product';
import ProductCard from '../../components/ProductCard';

export default function Parches() {
  
  const [arrayParches,setArrayParches] = useState([]);

  useEffect(()=>{
    getProductsApi("Parche").then(response => {
      setArrayParches(response.typeProducts);
      console.log(response)
    }).catch(error => {
      console.log(error)
    });
  }
  ,[])




  return (
    <>
    <div className='container parches-container'>
    
      {arrayParches.map((parche)=>{
        return (<ProductCard product={parche} key={parche._id}/>)
     })}
       
  
    </div>
    </>
  )
}
