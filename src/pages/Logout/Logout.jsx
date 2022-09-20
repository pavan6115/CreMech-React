import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogoutImg from '../../assets/logout-img.svg'
import { PageTitle } from '../../components/PageTitle/PageTitle'
import './Logout.css'

export function Logout() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 2500)
  }, [])

  PageTitle(`Logout | CreMech`)

  return (
    <div>
      <section className='logout'>
        <div className='illustration__container'>
          <img
            src={LogoutImg}
            alt='logout-svg'
            className='logout__illustration'
          />
        </div>

        <div className='logout__container'>
          <div className='logout__heading'>
            <h1 className='logout__heading__title'>Logout</h1>
            <span className='logout__heading__subtitle'>PAGE</span>
          </div>

          <div className='logout__form__container'>
            <span className='material-icons-outlined approve'>task_alt</span>

            <h2>Logout Successful</h2>

            <div className='redirect__login'>
              <button className='btn btn-link'>
                <Link to='/login' className='btn-link link__txt'>
                  Login Again
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
