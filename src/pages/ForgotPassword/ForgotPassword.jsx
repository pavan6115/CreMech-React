import React from 'react'
import './ForgotPassword.css'
import ForgotPasswordImg from '../../assets/forgotPassword-img.svg'

export function ForgotPassword() {
  return (
    <div>
         <section class="forgotpassword">
            <div class="illustration__container">
                 <img src={ForgotPasswordImg} alt="forgotpassword-svg" class="forgotpassword__illustration" />
            </div>

            <div class="forgotpassword__container">

                <div class="forgotpassword__heading">
                    <h1 class="forgotpassword__heading__title">Forgot</h1>
                    <span class="forgotpassword__heading__subtitle">PASSWORD</span>
                </div>

                <div class="forgotpassword__form__container">
                    
                    <div class="email__container">
                        <label for="username">Email ID : </label>
                        <input type="email" name="email" id="email" class="txt-input" placeholder="Enter Email ID" autocomplete="off" required />
                    </div>

                    <div class="forgotpassword__button__container">
                        <button class="forgotpassword__btn">
                            Reset Password
                        </button>
                    </div>

                    <div class="redirect__signup">
                        <button class="btn btn-link">
                            <a href="../signup-page/signup.html" class="btn-link link__txt">Don't have Account? Signup</a>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}
