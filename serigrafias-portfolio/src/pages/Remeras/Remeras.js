import React from 'react';

import ProductCard from '../../components/ProductCard';

export default function Remeras() {
  return (
    <>
    <div className='container'>
        <ProductCard title='Remera 1' description="hola"/>
        <ProductCard title='Remera 2'/>
        <ProductCard/>
        
    </div>
    </>
  )
}
