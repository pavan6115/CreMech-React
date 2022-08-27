
import { createContext, useContext, useReducer } from 'react';
import { cartReducer } from '../../reducer/cart/cart-reducer';

const CartContext = createContext()

const initialCartState = {
    cart: [],
    cartTotal: 0,
    totalPrice: 0,
    totalDiscount: 0
}

const CartProvider = ({ children }) => {

    const [ cartState, dispatchCart ] = useReducer(cartReducer, initialCartState)

    return (
        <CartContext.Provider value={{ cartState, dispatchCart}}>
            { children }
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export { useCart, CartProvider}