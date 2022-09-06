import React,{useState} from 'react';

import Card from 'react-bootstrap/Card';
import CarouselComponent from '../CarouselComponent';
import OffCanvasComponent from '../OffCanvasComponent';

import Button from 'react-bootstrap/Button';


import './ProductCard.css';


export default function ProductCard(props) {

  const [showCanvasProduct, setShowCanvasProduct] = useState(false);
  const handleShowProduct = () => setShowCanvasProduct(true);  




const {product} = props;

  return (
    <>
    <Card  className='product-card'>
      <CarouselComponent/>
      <Card.Body>
        <Card.Title>{product.name} </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{product.price}  $</Card.Subtitle>
        
        <Card.Text>
          {product.description}
        </Card.Text>
        
        <Button variant="outline-dark" onClick={handleShowProduct} className='product-card-btn'>Ver detalle</Button>
      </Card.Body>
    </Card>
    <OffCanvasComponent setShowCanvas={setShowCanvasProduct} show={showCanvasProduct} title={product.name}/>
    </>  
  )
}
