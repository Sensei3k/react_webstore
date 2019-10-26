import React from 'react'

import '../../sass/productCard.scss'

const ProductCard = ({ title, description, image, price, addToBasket }) => {
  return (
    <div className='projects-info-wrapper'>
      <div className='project-block'>
        <img className='image' src={image} alt={title} />
        <div>
          <h4>{title}</h4>
          <span className='description'>{description}</span>
          <span className='price'>
            <img src='/assets/coins.png' alt='' />
            {price}
          </span>
          <button className="button"
            onClick={() => addToBasket()}>
            <span>Add to Basket</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard