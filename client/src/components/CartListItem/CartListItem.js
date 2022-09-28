import React ,{useState}from 'react';
import './CartListItem.css'
import useCart from '../../hooks/useCart';
import Button from 'react-bootstrap/esm/Button';

import ModalComponent from '../ModalComponent';

export default function CartListItem(props) {

    const {item,quantity} = props;
    const {getTotalPriceItem,removeItem} = useCart();

    const [showModal,setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);

    const deleteToCart = () =>{
        removeItem(item._id);
        setShowModal(false);
    }

  return (
    <>
    <div className='items-container'>
            <div className='item-info-name'>
                {item.name}
            </div>
            <div className='item-info'>
                $ {item.price}
            </div>
            <div className='item-info'>
                <strong>x</strong>{quantity}
            </div>
            <div className='item-info'>
                $ {getTotalPriceItem(item,quantity)}
            </div>
            <div>
                <Button variant="danger" size="sm" onClick={handleShowModal}><strong>x</strong></Button>
            </div>

    </div>

    <ModalComponent showModal={showModal} setShowModal={setShowModal}
     functionModal={deleteToCart} componentModal={`Desea eliminar ${quantity}  ${item.name} del carrito ?`} 
     textBtn={'Eliminar'} title={'Retirar del carrito'}/>
   
    </>
  )
}
