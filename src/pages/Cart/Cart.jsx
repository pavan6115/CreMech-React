import React from 'react'
import './Cart.css'
import { Link } from "react-router-dom"

export function Cart() {
  return (
    <div>
      <section class='cart__container'>
        <div class='cart__heading'>
          <h2 class='cart__title'>
            My Cart {" "}
            <span class='cart__subtitle'>(Showing 4 products)</span>
          </h2>
        </div>

        <div class='cart__products__checkout'>
          <div class='cart__products'>
            {/* card 1 */}
            <div class='card-horizontal'>
              <img
                src={carBrushes}
                alt='car brushes'
                class='card__horizontal-img'
              />
              <div class='card__horizontal-info'>
                <div class='card__horizontal-heading'>
                  <h2>Car Cleaning Brushes</h2>
                  <p> PK </p>
                </div>
                <div class='card__horizontal-pricing'>
                  <div class='offer-pricing'> ₹839 </div>
                  <div class='actual-pricing'> ₹1199 </div>
                  <div class='discount-percentange'> 30% off </div>
                </div>
                <div class='btns'>
                  <div class='product__counter'>
                    <button class='decrement'> - </button>
                    <span class='product__quantity'>3</span>
                    <button class='increment'> + </button>
                  </div>

                  <div>
                    <button class='add-wishlist-btn'>Add to Wishlist</button>
                  </div>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div class='card-horizontal'>
              <img
                src={engineOil2}
                alt='car brushes'
                class='card__horizontal-img'
              />
              <div class='card__horizontal-info'>
                <div class='card__horizontal-heading'>
                  <h2>Nexton Engine Oils</h2>
                  <p> PK </p>
                </div>
                <div class='card__horizontal-pricing'>
                  <div class='offer-pricing'> ₹839 </div>
                  <div class='actual-pricing'> ₹1199 </div>
                  <div class='discount-percentange'> 30% off </div>
                </div>
                <div class='btns'>
                  <div class='product__counter'>
                    <button class='decrement'> - </button>
                    <span class='product__quantity'>10</span>
                    <button class='increment'> + </button>
                  </div>

                  <div>
                    <button class='add-wishlist-btn'>Add to Wishlist</button>
                  </div>
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div class='card-horizontal'>
              <img
                src={ microFiberCloth }
                alt='car brushes'
                class='card__horizontal-img'
              />
              <div class='card__horizontal-info'>
                <div class='card__horizontal-heading'>
                  <h2>Car Microfiber Cloth</h2>
                  <p> PK </p>
                </div>
                <div class='card__horizontal-pricing'>
                  <div class='offer-pricing'> ₹839 </div>
                  <div class='actual-pricing'> ₹1199 </div>
                  <div class='discount-percentange'> 30% off </div>
                </div>
                <div class='btns'>
                  <div class='product__counter'>
                    <button class='decrement'> - </button>
                    <span class='product__quantity'>7</span>
                    <button class='increment'> + </button>
                  </div>

                  <div>
                    <button class='add-wishlist-btn'>Add to Wishlist</button>
                  </div>
                </div>
              </div>
            </div>

            {/* card 4 */}
            <div class='card-horizontal'>
              <img
                src={carWashShampoo}
                alt='car-wash-shampoo'
                class='card__horizontal-img'
              />
              <div class='card__horizontal-info'>
                <div class='card__horizontal-heading'>
                  <h2>Car Cleaning Shampoo</h2>
                  <p> PK </p>
                </div>
                <div class='card__horizontal-pricing'>
                  <div class='offer-pricing'> ₹839 </div>
                  <div class='actual-pricing'> ₹1199 </div>
                  <div class='discount-percentange'> 30% off </div>
                </div>
                <div class='btns'>
                  <div class='product__counter'>
                    <button class='decrement'> - </button>
                    <span class='product__quantity'>5</span>
                    <button class='increment'> + </button>
                  </div>

                  <div>
                    <button class='add-wishlist-btn'>Add to Wishlist</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='cart__subtotal'>
            <div class='subtotal__container'>
              <h2 class='subtotal__title'>Subtotal (4 items): ₹ 21,814</h2>
            </div>

            <div class='subtotal__actions'>
              <Link to='/cartcheckout' className='btn-cart btn-std-primary'>
                Checkout
              </Link>

              <Link to='' className='btn-share btn-outl-primary'>
                Share Cart
              </Link>

              <Link to='' className='btn-cart btn-std-dark'>
                Clear Cart
              </Link>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
