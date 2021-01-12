/* Includes */

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react'

// Styles

import './style.scoped.sass'
import './responsive.scoped.sass'

// Components

import ProductItem from 'components/common-components/ProductItem/component'

// Actions

import { productListAction } from 'actions/productActions'



/* Functional component */

const PopularProducts = () => {
  const dispatch = useDispatch()

  const popularProducts = useSelector((state) => state.popularProducts)
  const { loading, error, products } = popularProducts

  useEffect(() => {
    dispatch(productListAction())
  }, [dispatch])

  return (
    <section className='popular'>
      <div className='container'>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <Swiper
            className='product-items-swiper swiper-container'
            slidesPerView={'auto'}
            direction={'horizontal'}
            autoplay={{ delay: 12000 }}
            mousewheel={{ forceToAxis: true }}
          >
            {products.map((product) => (
              <SwiperSlide key={product._id}>
                <ProductItem product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  )
}

export default PopularProducts
