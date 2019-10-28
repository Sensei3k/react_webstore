import React from 'react'

import '../../sass/basket.scss'

class Basket extends React.Component {
  renderBasketItem ({ title, id, image, price }) {
    console.log(this.props, 'props')
    return (
      <li className='basket-list-item' key={id}>
        <img src={image} />
        <div>
          <h4 className='title'>{title}</h4>
          <span className='price'>
            <img src='/assets/coins.png' alt='' />
            {price} gil
          </span>
        </div>
        <button
          className='button'
          onClick={() => this.props.removeFromBasket(id)}
        >
          <img src='/assets/bin.png' />
        </button>
      </li>
    )
  }

  render() {
    // console.log(this.props.data.length, 'bool')
    
    return(
      <div className='basket'>
        <h1 className='title'>Basket</h1>
        <div className='basket-items-container'>
          {this.props.data.length ? (
            <ul className='basket-list-container'>
              {this.props.data.map(this.renderBasketItem.bind(this))}
            </ul>
          ) : (
            <span className='no-items'>No items</span>
          )}
        </div>
        <div className='total'>
          <span>Total </span>{' '}
          {this.props.data.reduce((a, b) => a + b.price, 0)}{' '} Gil
        </div>
        <button 
          className='basket-button'
          disabled={!this.props.data.length}
          onClick={this.props.goToCheckout}>Continue</button>
      </div>
    )
  }
}

export default Basket