import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginImg from '../../assets/login-img.svg'
import { useAuth } from '../../context/auth/auth-context'
import './Login.css'

export function Login() {
  const { login } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordType, setPasswordType] = useState('password')

  const handleLogin = (e) => {
    e.preventDefault()
    login(email, password)
  }

  const handlePasswordType = () => {
    return passwordType === 'password'
      ? setPasswordType('text')
      : setPasswordType('password')
  }

  const handleGuestLogin = (e) => {
    e.preventDefault()
    login('pk@gmail.com', 'pavankulkarni')
  }

  return (
    <div>
      <section className='login'>
        <div className='illustration__container'>
          <img src={LoginImg} alt='login-svg' className='login__illustration' />
        </div>

        <form action={handleLogin}>
          <div className='login__container'>
            <div className='login__heading'>
              <h1 className='login__heading__title'>Login</h1>
              <span className='login__heading__subtitle'>PAGE</span>
            </div>

            <div className='login__form__container'>
              <div className='username__container'>
                <label for='email'>Email ID : </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='txt-input'
                  placeholder='Enter Email ID'
                  autoComplete='off'
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <div className='password__container'>
                <label for='username'>Password : </label>
                <input
                  type={passwordType}
                  name='password'
                  id='password'
                  className='txt-input'
                  placeholder='Enter password'
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
                {passwordType === 'password' ? (
                  <span
                    className='material-icons-outlined eye-icon'
                    onClick={handlePasswordType}
                  >
                    visibility_off
                  </span>
                ) : (
                  <span
                    className='material-icons-outlined eye-icon'
                    onClick={handlePasswordType}
                  >
                    visibility
                  </span>
                )}
              </div>

              <div className='login__button__container'>
                <button className='login__btn' type='submit'>
                  Login
                </button>
              </div>

              <div className='login__button__container'>
                <button className='login__btn' onClick={handleGuestLogin}>
                  Guest Login
                </button>
              </div>

              <div className='redirect__signup'>
                <button className='btn btn-link'>
                  <Link to='/signup' className='btn-link link__txt'>
                    Don't have Account? Signup
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}
