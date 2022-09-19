import axios from 'axios'
import { createContext, useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
const AuthContext = createContext()

const userProfile = JSON.parse(localStorage.getItem('userProfile')) || {
  token: null,
  user: null,
}

const AuthProvider = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const [user, setUser] = useState({
    token: userProfile.token,
    user: userProfile.user,
  })

  const login = async (email, password) => {
    try {
      const loginResponse = await axios.post('/api/auth/login', {
        email,
        password,
      })
      //   console.log(loginResponse)
      if (loginResponse.status === 200) {
        const userProfile = {
          token: loginResponse.data.encodedToken,
          user: loginResponse.data.foundUser,
        }
        setUser(userProfile)
        // console.log('User Profile - ',userProfile)
        localStorage.setItem('userProfile', JSON.stringify(userProfile))
        // console.log('location', location)
        navigate(location.state?.from?.pathname || '/', { replace: true })
      }
    } catch (e) {
      console.log('Login error - ', e)
    }
  }

  const signup = async (email, password, firstName, lastName) => {
    try {
      const signUpResponse = await axios.post('/api/auth/signup', {
        email,
        password,
        firstName,
        lastName,
      })
      console.log(signUpResponse)
      if (signUpResponse.status === 201) {
        const userProfile = {
          token: signUpResponse.data.encodedToken,
          user: signUpResponse.data.createdUser,
        }
        setUser(userProfile)
        localStorage.setItem('userProfile', JSON.stringify(userProfile))
        navigate(location.state?.from?.pathname || '/', { replace: true })
      }
    } catch (e) {
      console.log('Signup Error -', e)
    }
  }

  const logout = () => {
    localStorage.removeItem('userProfile')
    setUser({ token: null, user: null })
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
