import React from 'react'
import './CartCheckout.css'

export function CartCheckout() {
  return (
    <div>
         <section class="checkout__container">

            <div class="coupon__address__container">

                <div class="coupon__container">
                    <h2 class="coupon__title">
                        Apply Discount Coupon :
                    </h2>
                    <input type="text" class="txt-input" placeholder="Enter Coupon Code" />
                    <button class="btn btn-icon-home"> Apply </button>
                </div>

                <div class="address__container">
                    <h2 class="address__title">
                        Address : 
                    </h2>

                    <div class="addresses">
                        <article class="add">
                            <input type="radio" name="address" id="add-1" class="radio-inp" />
                            <span>221B Baker Street, Mumbai - 400001</span>
                        </article>

                        <article class="add">
                            <input type="radio" name="address" id="add-2" class="radio-inp" />
                            <span>222C Baker Street, Mumbai - 400001</span>
                        </article>

                        <article class="add">
                            <input type="radio" name="address" id="add-3" class="radio-inp" />
                            <span>223D Baker Street, Mumbai - 400001</span>
                        </article>
                    </div>
                </div>
            </div>

            <div class="checkout__summary">
                
                <div class="summary__heading">
                    <h2 class="summary__title">
                        Order Summary : 
                    </h2>

                    <div class="order__summary">

                        <div class="order">
                            <h4>Items</h4>
                            <h4>Quantity</h4>
                            <h4>Total Price</h4>
                        </div>

                        <div class="order__details">
                            <h5>Brushes</h5>
                            <h5>3</h5>
                            <h5>2517/-</h5>
                        </div>

                        <div class="order__details">
                            <h5>Engine Oil</h5>
                            <h5>10</h5>
                            <h5>8390/-</h5>
                        </div>

                        <div class="order__details">
                            <h5>Car Cloth</h5>
                            <h5>7</h5>
                            <h5>5873/-</h5>
                        </div>

                        <div class="order__details">
                            <h5>Shampoo</h5>
                            <h5>5</h5>
                            <h5>5034/-</h5>
                        </div>

                        <div class="total__price">
                            <h3>Total</h3>
                            <h5></h5>
                            <h3>₹21,814</h3>
                        </div>

                    </div>

                    <div class="place__order__pay__btn">
                        <button class="btn btn-std-primary pp__btn">
                            Place Order and Pay
                        </button>

                    </div>
                </div>

            </div>

        </section>
    </div>
  )
}
