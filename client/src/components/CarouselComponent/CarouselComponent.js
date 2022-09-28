import React,{useState} from 'react';

import Carousel from 'react-bootstrap/Carousel';

import './CarouselComponent.css'


export default function CarouselComponent(props) {

const imageStyle = {
    width: '10rem',
    height: '15rem'
}



const imagesSrc = ["https://img.lojasrenner.com.br/item/547998581/small/1.jpg",
"https://canova.com.ar/img/remera_corta_azul.jpg",
"https://i.pinimg.com/originals/23/9f/08/239f0861610a86731f98218fa7b317cc.jpg","https://i.pinimg.com/736x/e7/ae/06/e7ae0614077febc601357acd2324a823.jpg"];



  return (
    <Carousel interval={null} className='carousel-container' fade>
        {imagesSrc.map((srcItem,indice)=>{
                return (
                    <Carousel.Item key={indice} >
                        <img
                            className="d-block w-100"
                            src={srcItem}
                            alt=""
                            style={imageStyle}
                            
                            />
                    </Carousel.Item>
                )

        })}
    </Carousel>

  )
}
