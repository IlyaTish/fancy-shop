/* Includes */

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Import Swiper React components



// Styles

import './style.scoped.sass'
import './responsive.scoped.sass'



// Data

import { listProducts } from 'actions/productActions'



/* Functional component */

const PopularProducts = () => {
  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const { products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <section className='popular'>
      <div className='container'>
        {products && products.length && products.map(product => (
          <div>{product.name}</div>
          // <div className='swiper-slide'>
          //   <ProductItem product={product} />
          // </div>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts
