import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './context/auth/auth-context'
import { CartProvider } from './context/cart/cart-context'
import { DataProvider } from './context/data/data-context'
import { WishListProvider } from './context/wishlist/wishlist-context'
import './index.css'
import { makeServer } from './server'

// Call make Server
makeServer()

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CartProvider>
          <WishListProvider>
            <DataProvider>
              <App />
            </DataProvider>
          </WishListProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
