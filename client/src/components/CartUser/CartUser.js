import React,{useState,useEffect} from 'react';
import CartList from '../CartList';
import useCart from '../../hooks/useCart';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './CartUser.css'
 

export default function CartUser(props) {

const {userData} = props;

const {cart,getTotalPrice} = useCart();


  return (
    <>
        <hr></hr>
        <h6>   Usuario : {userData.email}</h6>
        <hr></hr>
        {cart.length > 0 ? 
            <>
              <CartList cart={cart} getTotalPrice={getTotalPrice}/>
              <div className='cart-user-btn'>
                  <hr></hr>
                  <Button variant="success">Registrar compra</Button>
                  <hr></hr>
                  <Button variant="danger">Vaciar carrito</Button>
                  <hr></hr>
              </div>
            </> 
            
            : <><h5>El carrito esta vacio</h5></>}

    </>
  )
}
