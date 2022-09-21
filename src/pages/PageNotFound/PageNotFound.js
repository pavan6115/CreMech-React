import React from 'react'
import { Link } from 'react-router-dom'
import Error404 from '../../assets/Error404.png'
import { PageTitle } from '../../components/PageTitle/PageTitle'
import './PageNotFound.css'

export function PageNotFound() {
  PageTitle(`404 Page | CreMech`)

  return (
    <div className='error_container'>
      <div>
        <div className='error_h1'>Whooops!</div>
        <p className='error_p'>
          Sorry, the page you are looking for doesn't exist 🙃
        </p>
        <Link to='/'>
          <button className='btn_homepage'>Go to HomePage</button>
        </Link>
      </div>

      <img className='error_img' src={Error404} alt='404 Error Img' />
    </div>
  )
}
