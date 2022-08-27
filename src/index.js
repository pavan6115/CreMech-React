import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { makeServer } from './server'
import { BrowserRouter as Router } from 'react-router-dom'
import { DataProvider } from './context/data/data-context'
import { CartProvider } from './context/cart/cart-context'
import { WishListProvider } from './context/wishlist/wishlist-context'

// Call make Server
makeServer()

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <WishListProvider>
        <DataProvider>
          <Router>
            <App />
          </Router>
        </DataProvider>
      </WishListProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
