/* Includes */

// Styles

import './style.scoped.sass'
import './responsive.scoped.sass'



/* Functional component */

const ProductItem = ({ product }) => {
  return (
    <a className='product-item' href={`/product/${product.id}`}>
      {/* <div className='tag-label'>
        <div className='tag pink'>
          -20%
          <div className='flag' />
        </div>
      </div> */}
      <div className='product-item__img-cont'>
        <img
          className='product-item__img'
          src={product.image}
          alt={product.name}
        />
      </div>
      <span className='product-item__title'>{product.name}</span>
      <div className='product-item__price-cont'>
        <span className='product-item__price product-item__price--new price'>
          {product.price}
        </span>
        {/* <span className='product-item__price product-item__price--old price'>
          15 000
        </span> */}
      </div>
      <a href='/home' className='btn' href='#'>
        <span className='btn__txt'>В корзину</span>
      </a>
    </a>
  )
}

export default ProductItem
