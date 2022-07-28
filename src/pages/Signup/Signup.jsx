import React from 'react'
import SignupImg from '../../assets/signup-img.svg'
import './Signup.css'

export function Signup() {
  return (
    <div>
        <section className="signup">

            <div className="illustration__container">
                <img src={ SignupImg } alt="signup-svg" className="signup__illustration" />
            </div>

            <div className="signup__container">

                <div className="signup__heading">
                    <h1 className="signup__heading__title">Signup</h1>
                    <span className="signup__heading__subtitle">PAGE</span>
                </div>

                <form action="">
                    <div className="signup__form__container">

                        <div className="fullname__container">
                            <label for="fname">Full Name : </label>
                            <input type="text" name="fname" id="fname" className="txt-input" placeholder="Enter Full Name" autocomplete="off" required />
                        </div>
                        
                        <div className="username__container">
                            <label for="username">Username : </label>
                            <input type="text" name="username" id="username" className="txt-input" placeholder="Enter username" autocomplete="off" required />
                        </div>

                        <div className="email__container">
                            <label for="email" className="email__inp">Email ID : </label>
                            <input type="email" name="email" id="email" className="txt-input" placeholder="Enter Email ID" autocomplete="off" required />
                        </div>

                        <div className="password__container">
                            <label for="password">Password : </label>
                            <input type="password" name="password" id="password" className="txt-input" placeholder="Enter password" required />
                            <span className="material-icons-outlined eye-icon">
                                visibility_off
                            </span>
                        </div>

                        <div className="confirm__password__container">
                            <label for="confirm-pass">Password : </label>
                            <input type="password" name="confirm-password" id="password" className="txt-input" placeholder="Re-enter password" required />
                            <span className="material-icons-outlined eye-icon">
                                visibility_off
                            </span>
                        </div>

                        <div className="signup__button__container">
                                <button className="signup__btn">
                                    Sign Up
                                </button>
                        </div>

                        <div className="redirect__login">
                            <button className="btn btn-link">
                                <a href="../login-page/login.html" className="btn-link link__txt">Already have account? Login</a>
                            </button>  
                        </div>

                    </div>
                </form>
            </div>
        </section>
    </div>
  )
}
