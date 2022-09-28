import React from 'react'
import CartListItem from '../CartListItem';
import './CartList.css'

export default function CartList(props) {

    const {cart,getTotalPrice} = props;


  return (
    <>
    <div className='cart-list-container'>
        {Array.from(cart).map(product => {
            return (
                <CartListItem key={product.item._id} item={product.item} quantity={product.quantity} />
                )
        }
        )}  
    </div>
    <hr></hr>
    <div className='total-price-container'>
            <div>
                <strong>Total:  </strong> 
            </div>
            <div>
                 $ {getTotalPrice()}
            </div>
    </div>
    </>

  )
}
