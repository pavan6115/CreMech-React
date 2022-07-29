import React from 'react'
import './WishList.css'
import { Link } from 'react-router-dom'


export function WishList() {
  return (
    <div>
        <section class="wishlist__container">

            <div class="wishlist__heading">
                <h2 class="wishlist__title">
                    Wishlist{" "}
                    <span class="wishlist__subtitle">(Showing 3 products)</span>
                </h2>
            </div>

            <div class="wishlist__summary">

                <p class="summary__title">
                    Total Items : 3
                </p>

                <div class="redirect__cart">
                    <Link to='/cart'>
                        <button className='btn-wishlist btn-std-secondary redirect__cart__btn'>
                            Proceed to Cart
                        </button>
                    </Link>
                </div>

            </div>

            <div class="wishlist__products">

                {/* card 1 */}
                <div class="card">
                    <div class="card__img-container">
                    <img src={ chassis } alt="chassis-img" class="card__img" />
                        <span class="card__img-badge">4.8</span>
                    </div>
                
                    <div class="card-info">
                        <div class="heading-like">
                            <div class="card-heading">
                                <h2>Car Chassis + Wheels</h2>
                                <p> PK </p>
                            </div>
                        <i class="far fa-heart wishcart-like"></i>
                        </div>
                
                        <div class="card-pricing">
                            <div class="offer-pricing"> ₹839 </div>
                            <div class="actual-pricing"> ₹1199 </div>
                            <div class="discount-percentange"> 30% off </div>
                        </div>
                
                        <div class="add-cart-btn align">
                            <button class="add-cart">
                            <span>
                                <i class="fas fa-cart-plus"></i>
                                </span>
                                Move to Cart
                            </button>

                            <button class="remove">
                                <span class="material-icons-outlined trash">
                                    delete_outline
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* card 2 */}
                <div class="card">
                    <div class="card__img-container">
                    <img src={ microFiberCloth } alt="hoodie img" class="card__img" />
                        <span class="card__img-badge">4.5</span>
                    </div>
                
                    <div class="card-info">
                        <div class="heading-like">
                            <div class="card-heading">
                                <h2>Car Microfiber Cloth</h2>
                                <p> PK </p>
                            </div>
                        <i class="far fa-heart wishcart-like"></i>
                        </div>
                
                        <div class="card-pricing">
                            <div class="offer-pricing"> ₹839 </div>
                            <div class="actual-pricing"> ₹1199 </div>
                            <div class="discount-percentange"> 30% off </div>
                        </div>
                
                        <div class="add-cart-btn align">
                            <button class="add-cart">
                            <span>
                                <i class="fas fa-cart-plus"></i>
                                </span>
                                Move to Cart
                            </button>

                            <button class="remove">
                                <span class="material-icons-outlined trash">
                                    delete_outline
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* card 3 */}
                <div class="card">
                    <div class="card__img-container">
                    <img src={ engineOil2} alt="hoodie img" class="card__img" />
                        <span class="card__img-badge">4.1</span>
                    </div>
                
                    <div class="card-info">
                        <div class="heading-like">
                            <div class="card-heading">
                                <h2>Nexton Engine Oil 4T</h2>
                                <p> PK </p>
                            </div>
                        <i class="far fa-heart wishcart-like"></i>
                        </div>
                
                        <div class="card-pricing">
                            <div class="offer-pricing"> ₹839 </div>
                            <div class="actual-pricing"> ₹1199 </div>
                            <div class="discount-percentange"> 30% off </div>
                        </div>
                
                        <div class="add-cart-btn align">
                            <button class="add-cart">
                            <span>
                                <i class="fas fa-cart-plus"></i>
                                </span>
                                Move to Cart
                            </button>

                            <button class="remove">
                                <span class="material-icons-outlined trash">
                                    delete_outline
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
  )
}
