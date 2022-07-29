import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { 
  Home,
  Products,
  Signup,
  Login,
  Logout,
  ForgotPassword,
  Cart,
  WishList,
  CartCheckout
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
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/cartcheckout" element={<CartCheckout />}></Route>
      </Routes>
    </div>
  )
}

export default App
