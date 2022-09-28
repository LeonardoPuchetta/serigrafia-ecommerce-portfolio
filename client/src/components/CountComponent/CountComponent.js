
import React ,{useState}from 'react';
import Button from 'react-bootstrap/Button';

import './CountComponent.css'



export default function CountComponent(props) {

    const {stock,initial,onAdd} = props ;
    

    const [count,setCount] = useState(initial);

    //const [isInCart,setIsIncart] = useState(false)

    const countIncrement = () =>{if (count<stock) {setCount(count+1)}}

    const countDecrement = () => {if (count>0) {setCount(count-1)}}

    const onAddItem = () =>{
        //si hay stock realizamos la adicion de count productos al carrito
        if(stock>=count){onAdd(count)}
        setCount(0);
        //setIsIncart(true);
        
    }
 
  return (
    <>
    <div className='item-count'>
        <div className='row-btn-count' >
            <div className='btn-count'>
                <button onClick={countDecrement} className='btn-count'><span>-</span></button>
            </div>
            <div className='col-count'>
                {count}
            </div>
            <div className='btn-count'>
                <button onClick={countIncrement} className='btn-count'><span>+</span></button>
            </div>
        </div>
        <div className='row-btn-add' >
            { count && stock ? <Button className='btn-add' onClick={onAddItem} >Agregar al carrito</Button> :
            <Button className='btn-add' onClick={onAddItem} disabled>Agregar al carrito</Button>}
        </div>
        <div>
            <br></br>
            {/* { isInCart ? <span>Producto agregado correctamente</span>: <></>} */}
        </div>
    </div>
    </>
  )
}
