import React from 'react'
import './Logout.css'
import LogoutImg from '../../assets/logout-img.svg'

export function Logout() {
  return (
    <div>
      <section class='logout'>
        <div class='illustration__container'>
          <img src={LogoutImg} alt='logout-svg' class='logout__illustration' />
        </div>

        <div class='logout__container'>
          <div class='logout__heading'>
            <h1 class='logout__heading__title'>Logout</h1>
            <span class='logout__heading__subtitle'>PAGE</span>
          </div>

          <div class='logout__form__container'>
            <span class='material-icons-outlined approve'>task_alt</span>

            <h2>Logout Successful</h2>

            <div class='redirect__login'>
              <button class='btn btn-link'>
                <a href='../login-page/login.html' class='btn-link link__txt'>
                  Login Again
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
