import React ,{useState,useEffect}from 'react';
import useCart from '../../hooks/useCart';
import CountComponent from '../CountComponent';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import { imagesSrc } from '../../utils/imagesSrc';
import './ProductDetail.css'


export default function ProductDetail(props) {

    const {product} = props;

    const {addItem} = useCart();

    //funcion para sumar productos al carrito 
    const onAdd = (count) => {
        addItem(product,count);
    }

    const [indexImage, setIndexImage] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndexImage(selectedIndex);
    };

    const [sizeSelect ,setSizeSelect] = useState();

    

    const handleSize = (size) => {

        setSizeSelect(size);
        console.log(sizeSelect)
        
    


    }

  return (

                <div className='product-detail-container'>
                    <div  className='product-detail-image'>
                        <img src={imagesSrc[indexImage]} height='200' width='200' className='product-detail-max-image'/>
                    
                        <ul className='min-list-image'>
                            {imagesSrc.map((image,index)=>{
                                return (<li key={index} className='li-min-image'>
                                            <button onClick={()=> handleSelect(index)}><img src={imagesSrc[index]} width='45' height='45'/></button>
                                        </li>)
                            })} 
                        </ul>
                    </div>
                    
                    <div  className='product-detail-info'>

                            <div className='product-detail-info-title'>
                                {product.name}
                            </div>

                            <div className='product-detail-info-description'>
                                {product.description}
                            </div>



                            <div className='product-detail-info-price'>
                                <strong>$ {product.price}</strong>
                            </div>

                            <div className='product-detail-info-sizes'>
                                {product.type === 'remeras'? 
                                    <>   
                                        <h5>Seleccionar talle : </h5>  
                                        <ButtonGroup className='btn-group'>
                                            {product.sizes.map((size,index) =>{
                                              return (<ToggleButton key={index} type="checkbox" checked={sizeSelect}
                                                        value={size} onClick={ () => handleSize(size)} className='btn-size'>
                                                        {size.toUpperCase()}
                                                     </ToggleButton>)  
                                            })}
                                        </ButtonGroup> 
                                        
                                    </>
                                 : <></>}
                                {product.type === 'laminas'? 
                                    <>   
                                <h5>Seleccionar formato : </h5> { product.sizes.map((size,index)=>{
                                            return (
                                               <button key={size} className='btn-size' id={size} onClick={() => handleSize(size)}>
                                                    {size.toUpperCase()}
                                               </button>
                                            )
                                        })} 
                                    </>
                                 : <></>}
                            </div>



                            <div className='product-detail-count'>
                                <CountComponent stock={product.stock} initial={0} onAdd={onAdd}/>
                            </div>
                    </div>
        
                </div> 
  )
}
