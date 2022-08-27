import { createContext, useContext, useReducer } from 'react'
import { wishListReducer } from '../../reducer/wishlist/wishListReducer'

const WishListContext = createContext()

const initialWishListState = {
  wishlist: [],
}

const WishListProvider = ({ children }) => {
  const [wishListState, dispatchWishList] = useReducer(
    wishListReducer,
    initialWishListState
  )
  return (
    <WishListContext.Provider value={{ wishListState, dispatchWishList }}>
      {children}
    </WishListContext.Provider>
  )
}

const useWishlist = () => useContext(WishListContext)

export { useWishlist, WishListProvider }
