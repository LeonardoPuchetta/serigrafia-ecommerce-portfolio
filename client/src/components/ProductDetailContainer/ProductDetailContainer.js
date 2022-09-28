import React,{useState,useEffect} from 'react';
import { useParams  } from 'react-router-dom';

import { getProductApi } from '../../api/product';

import ProductDetail from '../ProductDetail/ProductDetail';

export default function ProductDetailContainer() {

    const [product,setProduct] = useState({});

    const {id} = useParams();

    useEffect(()=>{
        getProductApi(id).then(response => {
            setProduct(response[0])
        }).catch(error =>{
            console.log(error)
        })
    },[]);



  return (
    <ProductDetail product={product}/>
  )
}
