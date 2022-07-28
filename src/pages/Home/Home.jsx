import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import engineOil from '../../assets/engine-oil.png'
import chassis from '../../assets/chassis.png'

export function Home() {
  return (
    <div>
        <section className="content">
            <div className="content__heading">
                <h1 className="content__title">
                    CREMECH
                </h1>
                <div className="content__subtitle">
                    We cover all your need of Auto-Motives
                </div>
            </div>

            <div className="content__searchbar">

                <input type="text" name="product__searchbar" id="prod__searchbar" placeholder="Search your need..." className="searchbar" />
                <span className="material-icons-outlined searchbar__icon"> 
                    search
                </span>
            </div>
        </section>

        <section className="explore__more">
            <button className="btn btn-link">
                <a href="#prod_cat" className="btn-link exp__btn">
                    Explore more product categories
                </a>
                <span className="material-icons-outlined exp__down__arrow">
                    keyboard_double_arrow_down
                </span>
            </button>
        </section>

        <section class="product__categories" id="prod_cat">

            <div class="hproduct__card">
                <div class="hproduct__img__container">
                    <img src={ chassis } alt="chassis img" class="img__chassis" />
                </div>

                <div class="hproduct__card__info">
                    <div class="hproduct__discount">UPTO 30% 0FF*</div>
                    <div class="prod__name__link">
                        <div class="hproduct__name">CHASSIS</div>
                        <Link to='/products' className='hproduct__link'>SEE MORE</Link>
                    </div>
                </div>

            </div>


            <div class="vproduct__card">

                <div class="vproduct__img__container">
                    <img src={ engineOil } alt="" class="img__engineoil" />
                </div>

                <div class="vproduct__card__info">
                    <div class="vproduct__discount">UPTO 20% OFF*</div>
                    <div class="vproduct__name">ENGINE OILS</div>
                    <Link to='/products' className='vproduct__link'>SEE MORE</Link>
                </div>

            </div>

            <div class="hproduct__card">

                <div class="hproduct__img__container">
                    <img src={ chassis } alt="chassis img" class="img__chassis" />
                </div>

                <div class="hproduct__card__info">
                    <div class="hproduct__discount">UPTO 30% 0FF*</div>
                    <div class="prod__name__link">
                        <div class="hproduct__name">CHASSIS</div>
                        <Link to='/products' className='hproduct__link'>SEE MORE</Link>
                    </div>
                </div>

            </div>


            <div class="vproduct__card">

                <div class="vproduct__img__container">
                    <img src={ engineOil } alt="" class="img__engineoil" />
                </div>

                <div class="vproduct__card__info">
                    <div class="vproduct__discount">UPTO 20% OFF*</div>
                    <div class="vproduct__name">ENGINE OILS</div>
                    <Link to='/products' className='vproduct__link'>SEE MORE</Link>
                </div>

            </div>

            <div class="hproduct__card">

                <div class="hproduct__img__container">
                    <img src={ chassis } alt="chassis img" class="img__chassis" />
                </div>

                <div class="hproduct__card__info">
                    <div class="hproduct__discount">UPTO 30% 0FF*</div>
                    <div class="prod__name__link">
                        <div class="hproduct__name">CHASSIS</div>
                        <Link to='/products' className='hproduct__link'>SEE MORE</Link>
                    </div>
                </div>

            </div>


            <div class="vproduct__card">

                <div class="vproduct__img__container">
                    <img src={ engineOil } alt="" class="img__engineoil" />
                </div>

                <div class="vproduct__card__info">
                    <div class="vproduct__discount">UPTO 20% OFF*</div>
                    <div class="vproduct__name">ENGINE OILS</div>
                    <Link to='/products' className='vproduct__link'>SEE MORE</Link>
                </div>

            </div>

            <div class="hproduct__card">

                <div class="hproduct__img__container">
                    <img src={ chassis } alt="chassis img" class="img__chassis" />
                </div>

                <div class="hproduct__card__info">
                    <div class="hproduct__discount">UPTO 30% 0FF*</div>
                    <div class="prod__name__link">
                        <div class="hproduct__name">CHASSIS</div>
                        <Link to='/products' className='hproduct__link'>SEE MORE</Link>
                    </div>
                </div>

            </div>


            <div class="vproduct__card">
                <div class="vproduct__img__container">
                    <img src={ engineOil } alt="" class="img__engineoil" />
                </div>

                <div class="vproduct__card__info">
                    <div class="vproduct__discount">UPTO 20% OFF*</div>
                    <div class="vproduct__name">ENGINE OILS</div>
                    <Link to='/products' className='vproduct__link'>SEE MORE</Link>
                </div>
            </div>
        </section>
    </div>
  )
}
