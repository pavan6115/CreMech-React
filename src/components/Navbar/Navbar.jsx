import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth/auth-context'
import { useCart } from '../../context/cart/cart-context'
import { useWishlist } from '../../context/wishlist/wishlist-context'
import './Navbar.css'

export function Navbar() {
  const {
    cartState: { cart },
  } = useCart()
  const {
    wishListState: { wishlist },
  } = useWishlist()
  const {
    user: { token },
    logout,
  } = useAuth()

  return (
    <header className='header'>
      <nav className='nav__container'>
        <div className='nav__heading'>
          <Link to='/'>
            <div className='nav__title'>CREMECH</div>
          </Link>
        </div>
        <div className='nav__user__icons'>
          <span className='material-icons-outlined nav__icon'>
            person_outline
          </span>

          {token ? (
            <Link to='/logout'>
              <span 
              onClick={() => logout()}
              className='material-icons-outlined nav__icon'>logout</span>
            </Link>
          ) : (
            <Link to='/login'>
              <span className='material-icons-outlined nav__icon'>login</span>
            </Link>
          )}

          <Link to='/wishlist'>
            <span className='material-icons-outlined nav__icon'>
              favorite_border
              {token ? (
                <span className='notification-count'>{wishlist.length}</span>
              ) : null}
            </span>
          </Link>

          <Link to='/cart'>
            <span className='material-icons-outlined nav__icon'>
              shopping_cart
              {token ? (
                <span className='notification-count'>{cart.length}</span>
              ) : null}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
