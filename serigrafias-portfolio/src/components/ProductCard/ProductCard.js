import React,{useState} from 'react';

import Card from 'react-bootstrap/Card';
import CarouselComponent from '../CarouselComponent';
import OffCanvasComponent from '../OffCanvasComponent';

import Button from 'react-bootstrap/Button';


import './ProductCard.css';


export default function ProductCard(props) {

  const [showCanvasProduct, setShowCanvasProduct] = useState(false);
  const handleShowProduct = () => setShowCanvasProduct(true);  




const {title,description} = props;

  return (
    <>
    <Card style={{ width: '15rem'}} className='product-card'>
      <CarouselComponent/>
      {/* <Card.Img variant="top" src="https://canova.com.ar/img/remera_corta_azul.jpg" /> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary" onClick={handleShowProduct}>Ver detalle</Button>
      </Card.Body>
    </Card>
    <OffCanvasComponent setShowCanvas={setShowCanvasProduct} show={showCanvasProduct} title={title}/>
    </>  
  )
}
