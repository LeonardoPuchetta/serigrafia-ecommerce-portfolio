import React,{useState} from 'react';

import Carousel from 'react-bootstrap/Carousel';


export default function CarouselComponent() {

const imageStyle = {
    width: '10rem',
    height: '15rem'
}

const imageSrc = ["https://img.lojasrenner.com.br/item/547998581/small/1.jpg",
"https://canova.com.ar/img/remera_corta_azul.jpg","https://i.pinimg.com/originals/23/9f/08/239f0861610a86731f98218fa7b317cc.jpg"];



  return (
    <Carousel interval={null}>
        {imageSrc.map((srcItem,index)=>{
                return (
                    <Carousel.Item key={index} >
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
