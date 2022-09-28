import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CarouselComponent from '../CarouselComponent';

import './ProductCard.css';


export default function ProductCard(props) {

  const {product} = props;

  //direccion para rutear hacia detalle del producto
  const dirDetail = product.type + '/' + product._id;

  

  return (
    <>
    
    <Card  className='product-card ' data-aos="fade-up" >

      <Card.Body className='product-card-body'>

        <Card.Title>{product.name} </Card.Title>

        <CarouselComponent/>
        
        <Card.Subtitle >$ {product.price}</Card.Subtitle>
        
        <Link to={`/${dirDetail}`}>
            <button className='product-card-btn' >Mas detalles</button>
        </Link>
      </Card.Body>
      
     

    </Card>
   
    </>  
  )
}
