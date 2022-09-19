import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SignupImg from '../../assets/signup-img.svg'
import { useAuth } from '../../context/auth/auth-context'
import './Signup.css'

export function Signup() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordType, setPasswordType] = useState('password')

  const { signup } = useAuth()

  const submitHandler = (e) => {
    e.preventDefault()
    signup(email, password, firstName, lastName)
  }

  const handlePasswordType = () => {
    return passwordType === 'password'
      ? setPasswordType('text')
      : setPasswordType('password')
  }

  return (
    <div>
      <section className='signup'>
        <div className='illustration__container'>
          <img
            src={SignupImg}
            alt='signup-svg'
            className='signup__illustration'
          />
        </div>

        <div className='signup__container'>
          <div className='signup__heading'>
            <h1 className='signup__heading__title'>Signup</h1>
            <span className='signup__heading__subtitle'>PAGE</span>
          </div>

          <form onSubmit={submitHandler}>
            <div className='signup__form__container'>
              <div className='fullname__container'>
                <label for='fname'>First Name : </label>
                <input
                  type='text'
                  name='fname'
                  id='fname'
                  className='txt-input'
                  placeholder='Enter First Name'
                  autoComplete='off'
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />
              </div>

              <div className='username__container'>
                <label for='username'>Last Name : </label>
                <input
                  type='text'
                  name='username'
                  id='username'
                  className='txt-input'
                  placeholder='Enter Last Name'
                  autoComplete='off'
                  onChange={(event) => setLastName(event.target.value)}
                  required
                />
              </div>

              <div className='email__container'>
                <label for='email' className='email__inp'>
                  Email ID :{' '}
                </label>
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
                <label for='password'>Password : </label>
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

              <div className='signup__button__container'>
                <button className='signup__btn' type='submit'>
                  Sign Up
                </button>
              </div>

              <div className='redirect__login'>
                <button className='btn btn-link'>
                  <Link to='/login' className='btn-link link__txt'>
                    Already have account? Login
                  </Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
