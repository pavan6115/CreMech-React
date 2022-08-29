import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/cart/cart-context'

export function Cart() {
  const {
    cartState: { cart, cartTotal },
    dispatchCart,
  } = useCart()

  // cart services
  const removeFromCart = (prod) => {
    dispatchCart({ type: 'REMOVE_FROM_CART', payload: prod })
  }

  const increaseCartItemQty = (prod) => {
    dispatchCart({ type: 'INCREMENT_CART_ITEM_QTY', payload: prod })
  }

  const decreaseCartItemQty = (prod) => {
    dispatchCart({ type: 'DECREMENT_CART_ITEM_QTY', payload: prod })
  }

  const clearCart = () => {
    dispatchCart({ type: 'CLEAR_CART' })
  }

  return (
    <div>
      <section className='cart__container'>
        <div className='cart__heading'>
          <h2 class='cart__title'>
            My Cart <span class='cart__subtitle'>({cart.length} products)</span>
          </h2>
        </div>

        <div className='cart__products__checkout'>
          {cart.length > 0 ? (
            <div className='cart__products'>
              <div className='products'>
                {cart.map((item) => {
                  return (
                    <div className='card-horizontal'>
                      <img
                        src={item.productImage}
                        alt={item.categoryName}
                        class='card__horizontal-img'
                      />
                      <div className='card__horizontal-info'>
                        <div className='card__horizontal-heading'>
                          <h2>{item.productTitle}</h2>
                        </div>
                        <div className='card__horizontal-pricing txt-bd'>
                          <div className='offer-pricing'>
                            {' '}
                            ₹{item.discountedPrice}{' '}
                          </div>
                          <div className='actual-pricing'>
                            {' '}
                            ₹{item.actualPrice}{' '}
                          </div>
                          <div className='discount-percentange'>
                            {' '}
                            {item.discountPercentage}% off
                          </div>
                        </div>
                        <div className='btns'>
                          <div className='product__counter'>
                            <button
                              className='decrement'
                              onClick={() => decreaseCartItemQty(item)}
                              disabled={item.qty > 1 ? false : true}
                            >
                              -
                            </button>
                            <span className='product__quantity'>
                              {item.qty}
                            </span>
                            <button
                              className='increment'
                              onClick={() => increaseCartItemQty(item)}
                            >
                              {' '}
                              +{' '}
                            </button>
                          </div>

                          <div>
                            <button
                              className='remove-from-cart-btn'
                              onClick={() => removeFromCart(item)}
                            >
                              Remove Item
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className='cart__subtotal'>
                <div className='subtotal__container'>
                  <h2 className='subtotal__title'>
                    Subtotal ({cart.length} items): ₹ {cartTotal}
                  </h2>
                </div>

                <div className='subtotal__actions'>
                  <button className='btn-cart btn-std-primary'>
                    <Link to='/cartcheckout'>
                      <span className='white'>Checkout</span>
                    </Link>
                  </button>

                  <Link to='' className='btn-share btn-outl-primary'>
                    Share Cart
                  </Link>

                  <button
                    className='btn-cart btn-std-dark'
                    onClick={() => clearCart()}
                  >
                    <Link to=''>
                      <span className='white'>Clear Cart</span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h2>Cart is empty 😔</h2>
              <h2>
                <Link to='/products'>Shop Products 🛍</Link>
              </h2>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
