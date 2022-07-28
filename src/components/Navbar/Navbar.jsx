import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export function Navbar() {
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
                    </span>
                </Link>
            </div>
        </nav>
    </header>
  )
}
