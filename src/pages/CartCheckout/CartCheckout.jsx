import React from 'react'
import './CartCheckout.css'
import { useCart } from '../../context/cart/cart-context'

export function CartCheckout() {
  const {
    cartState: { cart, cartTotal },
  } = useCart()

  // price details caluclation services
  const getTotalActualPrice = cart.reduce(
    (lastItem, cartItem) =>
      lastItem + Number(cartItem.actualPrice) * cartItem.qty,
    0
  )

  const getTotalDiscountedPrice = getTotalActualPrice - cartTotal

  return (
    <div>
      <section class='checkout__container'>
        <div class='coupon__address__container'>
          <div class='coupon__container'>
            <h2 class='coupon__title'>Apply Discount Coupon :</h2>
            <input
              type='text'
              class='txt-input'
              placeholder='Enter Coupon Code'
            />
            <button class='btn btn-icon-home'> Apply </button>
          </div>

          <div class='address__container'>
            <h2 class='address__title'>Address :</h2>

            <div class='addresses'>
              <article className='add'>
                <label>
                <input
                  type='radio'
                  name='address'
                  id='add-1'
                  class='radio-inp'
                />
                <span className='size'>Pavan Kulkarni</span>
                <h5>
                    222C, 4th Main, D Block, Baker Street, Mumbai - 400001, India
                </h5>
                <h5>Phone Number: 9090905566</h5>
                </label>
              </article>
              <article className='add'>
                <label>
                <input
                  type='radio'
                  name='address'
                  id='add-1'
                  class='radio-inp'
                  checked='true'
                />
                <span className='size'>Adarsh Balika</span>
                <h5>
                    A-101, Osho Kabir, Navnagar, Sec-2, Banglore - 560004, India
                </h5>
                <h5>Phone Number: 9990082233</h5>
                </label>
              </article>
            </div>
          </div>
        </div>

        <div class='checkout__summary'>
          <div class='summary__heading'>
            <div className='title__heading'>
              <h4 className='heading'>ORDER SUMMARY</h4>
              <div className='summary__details'>
                <ul className='item__qty__details'>
                  <li>Items</li>
                  <li>Qty</li>
                </ul>
                {cart.map((item) => {
                  return (
                    <ul className='item__qty'>
                      <li>{item.productTitle}</li>
                      <li>{item.qty}</li>
                    </ul>
                  )
                })}
              </div>
            </div>
            <div className='title__heading'>
              <h4 className='heading'>PRICE DETAILS</h4>
              <ul>
                <li className='item__qty'>
                  <p className='size'>Price ({cart.length} items)</p>
                  <p className='size'>₹ {getTotalActualPrice}</p>
                </li>
                <li className='item__qty'>
                  <p className='size'>Discount</p>
                  <p className='size'>- ₹{getTotalDiscountedPrice}</p>
                </li>
                <li className='item__qty'>
                  <p className='size'>Delivery Charges</p>
                  <p className='size'>FREE</p>
                </li>
                <li className='item__qty'>
                  <p className='size total__qty'>Total Amount</p>
                  <p className='size total__qty'>₹{cartTotal}</p>
                </li>
              </ul>
            </div>
            <div className='title__heading'>
              <h4 className='heading'>DELIVER TO</h4>
              <article>
                <label>
                <span className='size'>Adarsh Balika</span>
                <h5>
                    A-101, Osho Kabir, Navnagar, Sec-2, Banglore - 560004
                </h5>
                <h5>Phone Number: 9990082233</h5>
                </label>
              </article>
            </div>

            <div class='place__order__pay__btn'>
              <button class='btn btn-std-primary pp__btn'>
                Place Order and Pay
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
