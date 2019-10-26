import React from 'react'

const ProductCard = ({ title, description, image, price }) => {
  return(
    <div>
      <div>
        <img src={image} />
        <div>
          <h4>{title}</h4>
          <span>{description}</span>
          <span>
            <img src="../assets/coins.png" alt="" />
            {price}
          </span>
          <button>
            <span>
              Add to Basket
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard