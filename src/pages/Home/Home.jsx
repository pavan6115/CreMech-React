import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import engineOil from '../../assets/engine-oil.png'
import drillBrushSoft from '../../assets/brushes/drill brush(soft).png'
import shampooDgBig from '../../assets/washWax/wash-carShampoo_big.png'
import ultraPlushTowel from '../../assets/clothTowel/ultraPlushTowel.png'
import foamCannon from '../../assets/washerCannon/foamgun.png'
import kitShinePro from '../../assets/kits/shineproWashKit.png'
import coolantShell from '../../assets/fluidsOil/shell_coolant.png'
import washerFluidRainx from '../../assets/fluidsOil/rainx_washerFluid.png'
import brakeFluidVW from '../../assets/fluidsOil/vw_brakeFluid.png'


export function Home() {
  return (
    <div>
      <section className='content'>
        <div className='content__heading'>
          <h1 className='content__title'>CREMECH</h1>
          <div className='content__subtitle'>
            We cover all your need of Auto-Motives
          </div>
        </div>

        <div className='content__searchbar'>
          <input
            type='text'
            name='product__searchbar'
            id='prod__searchbar'
            placeholder='Search your need...'
            className='searchbar'
          />
          <span className='material-icons-outlined searchbar__icon'>
            search
          </span>
        </div>
      </section>

      <section className='explore__more'>
        <div>
          <Link to='/products'>
            <a className='view__prod__btn'>
                View All Products
            </a>
          </Link>
        </div>

        <button className='btn btn-link'>
          <a href='#prod_cat' className='btn-link exp__btn'>
            Explore more product categories
          </a>
          <span className='material-icons-outlined exp__down__arrow'>
            keyboard_double_arrow_down
          </span>
        </button>
      </section>

      <section class='product__categories' id='prod_cat'>

        <div class='vproduct__card'>
          <div class='vproduct__img__container'>
            <img src={engineOil} alt='' class='img__engineoil' />
          </div>

          <div class='vproduct__card__info'>
            <div class='vproduct__discount'>UPTO 34% OFF</div>
            <div class='vproduct__name'>ENGINE OILS</div>
            <Link to='/products' className='vproduct__link'>
              SEE MORE
            </Link>
          </div>
        </div>

        <div class='vproduct__card'>
          <div class='vproduct__img__container'>
            <img src={kitShinePro} alt='' class='img__engineoil' />
          </div>

          <div class='vproduct__card__info'>
            <div class='vproduct__discount'>UPTO 65% OFF</div>
            <div class='vproduct__name'>COMBO KITS</div>
            <Link to='/products' className='vproduct__link'>
              SEE MORE
            </Link>
          </div>
        </div>

        <div class='vproduct__card'>
          <div class='vproduct__img__container'>
            <img src={drillBrushSoft} alt='' class='img__engineoil' />
          </div>

          <div class='vproduct__card__info'>
            <div class='vproduct__discount'>UPTO 30% OFF</div>
            <div class='vproduct__name'>BRUSHES</div>
            <Link to='/products' className='vproduct__link'>
              SEE MORE
            </Link>
          </div>
        </div>

        <div class='vproduct__card'>
          <div class='vproduct__img__container'>
            <img src={shampooDgBig} alt='' class='img__engineoil' />
          </div>

          <div class='vproduct__card__info'>
            <div class='vproduct__discount'>UPTO 20% OFF</div>
            <div class='vproduct__name'>SHAMPOOS</div>
            <Link to='/products' className='vproduct__link'>
              SEE MORE
            </Link>
          </div>
        </div>

        <div class='vproduct__card'>
          <div class='vproduct__img__container'>
            <img src={ultraPlushTowel} alt='' class='img__engineoil' />
          </div>

          <div class='vproduct__card__info'>
            <div class='vproduct__discount'>UPTO 16% OFF</div>
            <div class='vproduct__name'>TOWELS</div>
            <Link to='/products' className='vproduct__link'>
              SEE MORE
            </Link>
          </div>
        </div>

        <div class='vproduct__card'>
          <div class='vproduct__img__container'>
            <img src={foamCannon} alt='' class='img__engineoil' />
          </div>

          <div class='vproduct__card__info'>
            <div class='vproduct__discount'>UPTO 11% OFF</div>
            <div class='vproduct__name'>FOAM CANNONS</div>
            <Link to='/products' className='vproduct__link'>
              SEE MORE
            </Link>
          </div>
        </div>

        <div class='vproduct__card'>
          <div class='vproduct__img__container'>
            <img src={coolantShell} alt='' class='img__engineoil' />
          </div>

          <div class='vproduct__card__info'>
            <div class='vproduct__discount'>UPTO 18% OFF</div>
            <div class='vproduct__name'>COOLANTS</div>
            <Link to='/products' className='vproduct__link'>
              SEE MORE
            </Link>
          </div>
        </div>

        <div class='vproduct__card'>
          <div class='vproduct__img__container'>
            <img src={brakeFluidVW} alt='' class='img__engineoil' />
          </div>

          <div class='vproduct__card__info'>
            <div class='vproduct__discount'>UPTO 25% OFF</div>
            <div class='vproduct__name'>BRAKE FLUID</div>
            <Link to='/products' className='vproduct__link'>
              SEE MORE
            </Link>
          </div>
        </div>

        <div class='vproduct__card'>
          <div class='vproduct__img__container'>
            <img src={washerFluidRainx} alt='' class='img__engineoil' />
          </div>

          <div class='vproduct__card__info'>
            <div class='vproduct__discount'>UPTO 20% OFF</div>
            <div class='vproduct__name'>WASHER FLUID</div>
            <Link to='/products' className='vproduct__link'>
              SEE MORE
            </Link>
          </div>
        </div>

      </section>
    </div>
  )
}
