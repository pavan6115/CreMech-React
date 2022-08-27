const cartReducer = ( state, action ) => {
    switch(action.type){
        case "ADD_TO_CART" :
            return {
                ...state,
                cart: [ ...state.cart, { ...action.payload, qty: 1}],
                cartTotal: state.cartTotal + Number(action.payload.discountedPrice)
            }

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item._id !== action.payload._id),

                cartTotal: state.cartTotal - Number(action.payload.discountedPrice) * action.payload.qty
            }

        case "INCREMENT_CART_ITEM_QTY":
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if (action.payload._id === item._id) {
                        return {
                            ...item, 
                            qty: item.qty + 1
                        }
                    }
                    return item
                }),

                cartTotal: state.cartTotal + Number(action.payload.discountedPrice)
            }

        case "DECREMENT_CART_ITEM_QTY":
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if(action.payload._id === item._id){
                        return {
                            ...item,
                            qty: item.qty - 1
                        }
                    }
                    return item
                }),

                cartTotal: state.cartTotal - Number(action.payload.discountedPrice)
            }

        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            }
        default:
            return state
    }
}

export { cartReducer }
