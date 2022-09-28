import React ,{useState,useEffect} from 'react';

import { getSaleProductsApi } from '../../api/product';
import ProductCard from '../../components/ProductCard';

import './Ofertas.css'

export default function Ofertas() {

const [arraySaleProducts,setArraySaleProducts] = useState([]);

useEffect(()=>{
    getSaleProductsApi().then(response =>{
        setArraySaleProducts(response.saleProducts);
    }).catch(error => {
        console.log(error)
    })

},[])

  return (

    <div className='container sale-container'>
         {arraySaleProducts.map((saleProduct)=>{
            return <ProductCard product={saleProduct} key={saleProduct._id}/>
         })}
    </div>
  )
}
