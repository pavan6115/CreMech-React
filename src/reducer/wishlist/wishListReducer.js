const wishListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      }

    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item._id !== action.payload._id
        ),
      }

    case 'CLEAR_WISHLIST':
      return {
        ...state,
        wishlist: [],
      }
    default:
      return state
  }
}

export { wishListReducer }
