import React from 'react'
import '../Products/Products.css'
import './WishList.css'
import { Link } from 'react-router-dom'
import { useWishlist } from '../../context/wishlist/wishlist-context'
import { useCart } from '../../context/cart/cart-context'

export function WishList() {
  const {
    wishListState: { wishlist },
    dispatchWishList,
  } = useWishlist()
  const {
    cartState: { cart },
    dispatchCart,
  } = useCart()

  //wishlist services
  const removeFromWishList = (prod) => {
    dispatchWishList({ type: 'REMOVE_FROM_WISHLIST', payload: prod })
  }

  const clearWishlist = () => {
    dispatchWishList({ type: 'CLEAR_WISHLIST' })
  }

  const addToCart = (product) => {
    dispatchCart({ type: 'ADD_TO_CART', payload: product })
  }

  return (
    <div>
      <section class='wishlist__container'>
        <div class='wishlist__heading'>
          <h2 class='wishlist__title'>Wishlist</h2>
        </div>

        {wishlist.length > 1 ? (
          <>
            <div class='wishlist__summary'>
              <p class='summary__title'>Total Items : {wishlist.length}</p>

              <div class='redirect__cart'>
                <Link to='/cart'>
                  <button className='btn-wishlist btn-std-secondary redirect__cart__btn'>
                    Checkout to Cart
                  </button>
                </Link>
                <Link to='/wishlist'>
                  <button
                    className='btn-wishlist btn-outl-primary btn-clear-wishlist'
                    onClick={() => clearWishlist()}
                  >
                    Clear Wishlist
                  </button>
                </Link>
              </div>
            </div>

            <div class='wishlist__products'>
              {wishlist.map((item) => {
                return (
                  <div className='card'>
                    <div className='card__img-container'>
                      <img
                        src={item.productImage}
                        alt={item.productTitle}
                        className='card__img'
                      />
                      <span className='card__img-badge'>
                        {item.productRating}
                      </span>
                    </div>

                    <div className='card-info'>
                      <div className='heading-like'>
                        <div className='card-heading'>
                          <h2>{item.productTitle}</h2>
                        </div>
                      </div>

                      <div className='card-pricing'>
                        <div className='offer-pricing'>
                          {' '}
                          ₹{item.discountedPrice}{' '}
                        </div>
                        <div className='actual-pricing'>
                          ₹{item.actualPrice}
                        </div>
                        <div className='discount-percentange'>
                          {' '}
                          ({item.discountPercentage}% OFF){' '}
                        </div>
                      </div>
                      <div className='align'>
                        {cart.some((prod) => prod._id === item._id) ? (
                          <Link to='/cart'>
                            <button className='add-cart cta'>Go to Cart</button>
                          </Link>
                        ) : (
                          <Link to=''>
                            <button
                              className='add-cart cta'
                              onClick={() => addToCart(item)}
                            >
                              Move to Cart
                            </button>
                          </Link>
                        )}

                        <button
                          className='remove'
                          onClick={() => removeFromWishList(item)}
                        >
                          <span className='material-icons-outlined trash'>
                            delete_outline
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        ) : (
          <div className='status-wishlist'>
            <h2>Wishlist is empty 😔</h2>
            <h2>
              <Link to='/products'>Explore Products 🛍</Link>
            </h2>
          </div>
        )}
      </section>
    </div>
  )
}
