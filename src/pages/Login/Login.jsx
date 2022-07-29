import React from 'react'
import './Login.css'
import LoginImg from '../../assets/login-img.svg'

export  function Login() {
  return (
    <div>
        <section className="login">

            <div className="illustration__container">

                <img src={LoginImg} alt="login-svg" className="login__illustration" />

            </div>

            <form action="../product-page/productPage.html">
                <div className="login__container">

                    <div className="login__heading">
                        <h1 className="login__heading__title">Login</h1>
                        <span className="login__heading__subtitle">PAGE</span>
                    </div>

                    <div className="login__form__container">
                        
                        <div className="username__container">
                            <label for="username">Username : </label>
                            <input type="text" name="username" id="username" className="txt-input" placeholder="Enter username" autocomplete="off" required />
                        </div>

                        <div className="password__container">
                            <label for="username">Password : </label>
                            <input type="password" name="password" id="password" className="txt-input" placeholder="Enter password" required />
                            <span className="material-icons-outlined eye-icon">
                                visibility_off
                            </span>
                        </div>

                        <div className="rememberme__container">
                            <article>
                                <input type="checkbox" name="rme" id="rme" className="checkbox-inp" /> Remember me
                            </article>
                        </div>

                        <div className="login__button__container">
                            <a href="../product-page/productPage.html">
                                <button className="login__btn">
                                    Login
                                </button>
                            </a>
                        </div>

                        <div className="forgot__password">
                            <button className="btn btn-link">
                                <a href="../forgotPassword-page/forgotPassword.html" className="btn-link link__txt">Forgot Password</a>
                            </button>  
                        </div>

                        <div className="redirect__signup">
                            <button className="btn btn-link">
                                <a href="../signup-page/signup.html" className="btn-link link__txt">Don't have Account? Signup</a>
                            </button>  
                        </div>

                    </div>
                </div>
            </form>
        </section>
    </div>
  )
}
