import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/cart/cart-context'


export function Navbar() {

    const { cartState: { cart }} = useCart()

  return (
    <header className="header">
        <nav className="nav__container">
            <div className="nav__heading">
                <Link to="/">
                    <div className="nav__title">
                        CREMECH
                    </div>
                </Link>
            </div>
            <div className="nav__user__icons">
                <span className="material-icons-outlined nav__icon"> 
                    person_outline 
                </span>
                
               <Link to="/login">
                    <span className="material-icons-outlined nav__icon">
                        login
                    </span>
               </Link>
                
                <Link to="/wishlist">
                    <span className="material-icons-outlined nav__icon">
                        favorite_border
                    </span>
                </Link>

                <Link to="/cart">
                    <span className="material-icons-outlined nav__icon"> 
                        shopping_cart 
                    <span className='notification-count'>{cart.length}</span>
                    </span>
                </Link>
            </div>
        </nav>
    </header>
  )
}
