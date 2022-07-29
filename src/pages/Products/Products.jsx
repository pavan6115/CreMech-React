import React, { useState } from 'react'
import './Products.css'
import { useData } from '../../context/data/data-context'
import {
  sortByPrice,
  sortByRating,
  sortByCategory,
} from '../../services/filterData'

export function Products() {
  const { state, dispatch } = useData()
  // const [ check, setCheck ] = useState(false)

  const sortCategoriesData = sortByCategory(
    [...state.products],
    state.categories
  )

  const sortData = sortByPrice(sortCategoriesData, state.sortByPrice)

  const sortRatingData = sortByRating(sortData, state.sortByRating)

  // console.log('updated categories - ',state.categories)

  const ratingArray = [4, 3, 2, 1]
  // console.log('categories ', state.categories)

  return (
    <div>
      <div className='wrapper grid-layout'>
        <aside className='filter'>
          <div className='filter__section'>
            <h2>Filters</h2>
            <button
              className='btn btn-outl-primary clear-btn'
              onClick={() => dispatch({ type: 'CLEAR' })}
            >
              CLEAR
            </button>
          </div>

          <div className='sorting__section'>
            <h2>Sort By Price</h2>
            <div>
              <input
                type='radio'
                name='sort'
                id=''
                onChange={() => dispatch({ type: 'SORT_LOW_TO_HIGH' })}
                checked={
                  state.sortByPrice && state.sortByPrice === 'LOW_TO_HIGH'
                }
              />{' '}
              Low to High
            </div>
            <input
              type='radio'
              name='sort'
              id=''
              onChange={() => dispatch({ type: 'SORT_HIGH_TO_LOW' })}
              checked={state.sortByPrice && state.sortByPrice === 'HIGH_TO_LOW'}
            />{' '}
            High to Low
          </div>

          <div className='category__section'>
            <h2>Catergories</h2>
            <div className='catergories'>
              {state.categories.map((cat) => (
                <article>
                  <input
                    type='checkbox'
                    className='checkbox-inp'
                    value=''
                    onChange={() =>
                      dispatch({
                        type: 'CATEGORIES',
                        payload: cat.categoryName,
                      })
                    }
                    checked={cat.isChecked}
                  />
                  <label for=''>{cat.categoryName}</label>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2>Ratings</h2>
            <div>
              {ratingArray.map((rating) => (
                <article>
                  <input
                    type='radio'
                    className='radio-inp'
                    value=''
                    name='rating'
                    onChange={() =>
                      dispatch({ type: 'RATING', payload: rating })
                    }
                    checked={state.sortByRating === rating}
                  />
                  <span>{rating} Stars & above</span>
                </article>
              ))}
            </div>
          </div>
        </aside>

        <section className='content-grid'>
          <div className='content__heading'>
            <h2>
              Showing all categories{' '}
              <span className='subtitle'>({state.products.length} products)</span>
            </h2>
          </div>

          <div className='products__card'>
            {sortRatingData.map((card) => (
              <div className='card'>
                <div className='card__img-container'>
                  <img
                    src={card.productImage}
                    alt='car brushes'
                    className='card__img'
                  />
                  <span className='card__img-badge'>{card.productRating}</span>
                </div>

                <div className='card-info'>
                  <div className='heading-like'>
                    <div className='card-heading'>
                      <h2>{card.productTitle}</h2>
                      {/* <p> {card.productDescription} </p> */}
                    </div>
                    <span className='material-icons-outlined like'>
                      favorite
                    </span>
                  </div>

                  <div className='card-pricing'>
                    <div className='offer-pricing'>
                      {' '}
                      ₹{card.discountedPrice}{' '}
                    </div>
                    <div className='actual-pricing'> ₹{card.actualPrice} </div>
                    <div className='discount-percentange'>
                      {' '}
                      ({card.discountPercentage}% OFF){' '}
                    </div>
                  </div>

                  <div className='add-cart-btn'>
                    <button className='add-to-cart'>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
