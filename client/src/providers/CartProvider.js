import React ,{useState,createContext} from 'react';
import useAuth from '../hooks/useAuth';

export const CartContext = createContext();

export default function CartProvider(props){

    //sacamos el hijo que en este caso seran todas las rutas 
    const {children} = props;

    //tenemos que ver como asignar la compra a un user 
    const {user} = useAuth();

    const [cart,setCart] = useState([]);

    
//funcion para agregar productos al carrito 
    const addItem = (item,quantity) =>{
        const newCartProduct = {
            "item":item,
            "quantity":quantity
        }
        

       if (isInCart(item._id)===false){
          setCart(cart => [...cart,newCartProduct]);
        

            } else {
                alert('El producto ya existe en el carrito');
                
            }
            
    }

    //funcion para remover producto del carrito 
    const removeItem = (itemId)=>{
    
        let newCart = cart.filter(product=> product.item._id !== itemId);
        setCart(newCart);

       
    
    }

    // funcion para vaciar carrito
    const clearCart = () =>{
        setCart([]);
        
    }

    // funcion para chequear si un producto esta en el carrito
    const isInCart = (id) => {

        let isIn = false ; 
        
        Array.from(cart).forEach((product)=>{
            
            if (product.item._id === id){
                isIn = true 
            }
        
        })

        return isIn
    }

    const getTotalProducts = () =>{

        let total = 0;

        Array.from(cart).forEach((product)=>{
            
            total += product.quantity
        });
        
        return total 
    }

    const getTotalPriceItem = (item,quantity) => {
            return (item.price*quantity)
    }

    const getTotalPrice = () =>{

        let total = 0;

        Array.from(cart).forEach((product)=>{
            
            total += product.item.price*product.quantity
        });
        
        return total 
    }



    return <CartContext.Provider 
            value={{cart,clearCart,removeItem,
                    addItem,getTotalProducts,
                    getTotalPriceItem,getTotalPrice,

                    }}>
                {children}
            </CartContext.Provider>
}

