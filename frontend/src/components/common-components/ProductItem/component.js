/* Includes */

// Styles

import './style.scoped.sass'
import './responsive.scoped.sass'



/* Functional component */

const ProductItem = ({ product }) => {
  return (
    <a className='product-item' href={`/product/${product._id}`}>
      {product.labels[0] && (
        <div className='tag-label'>
          <div className='tag pink'>
            {product.labels.map((label) => {
              return label
            })}
            <div className='flag' />
          </div>
        </div>
      )}
      <div className='product-item__img-cont'>
        <img
          className='product-item__img'
          src={product.image}
          srcSet={product.image_2x}
          alt={product.name}
        />
      </div>
      <span className='product-item__title'>{product.name}</span>
      <div className='product-item__price-cont'>
        <span className='product-item__price product-item__price--new price'>
          {product.price}
        </span>
        {product.old_price && (
          <span className='product-item__price product-item__price--old price'>
            {product.old_price}
          </span>
        )}
      </div>
      <a className='btn' href='/home'>
        <span className='btn__txt'>В корзину</span>
      </a>
    </a>
  )
}

export default ProductItem
