import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { RequireAuth } from './components/PrivateRoute/RequireAuth'
import {
  Cart,
  CartCheckout,
  Home,
  Login,
  Logout,
  Products,
  Signup,
  WishList,
} from './pages'

function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route
          path='/cart'
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        ></Route>
        <Route
          path='/wishlist'
          element={
            <RequireAuth>
              <WishList />
            </RequireAuth>
          }
        ></Route>
        <Route
          path='/cartcheckout'
          element={
            <RequireAuth>
              <CartCheckout />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default App
