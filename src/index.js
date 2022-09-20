import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import {
  AuthProvider,
  CartProvider,
  DataProvider,
  WishListProvider,
} from './context/index'
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
