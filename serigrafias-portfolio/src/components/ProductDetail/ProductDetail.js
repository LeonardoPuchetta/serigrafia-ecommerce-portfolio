import React ,{useState,useEffect}from 'react';
import { useParams } from 'react-router-dom';

import CarouselComponent from '../CarouselComponent';

import './ProductDetail.css'


export default function ProductDetail(props) {

    const {product} = props;

  return (
<div className='item-detail-container'>

    
    <div className='product-detail-title'>
        <h3>{product.name}</h3>
    </div>

    <div  className='item-detail-image'>
        <CarouselComponent/>
    </div>

    <div  className='product-detail'>

            <div className='product-detail-description'>
                {product.description}
            </div>
            <div className='product-detail-price'>
                <strong>$ {product.price}</strong>
            </div>
            {/* <div className='product-detail-stock'>
                <h4>{product.stock} unidades en stock</h4>
            </div> */}
            <div className='product-detail-count'>
                {/* <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>   */}
            </div>
  
    </div>
    
</div> 
  )
}
