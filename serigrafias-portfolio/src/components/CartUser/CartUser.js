import React,{useState,useEffect} from 'react';

import { getCartApi } from '../../api/cart'; 

export default function CartUser(props) {

const {userData} = props;
const {email} = userData;

const [cart,setCart] = useState({});

useEffect(()=>{
    getCartApi(email).then(response =>{
      setCart(response)
    }).catch( error =>{
      console.log(error)
    }

    )
},[email])

console.log(cart);

  return (
<h6>{cart.userEmail}</h6>
  )
}
