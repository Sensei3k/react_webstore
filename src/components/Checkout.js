import React from 'react'

import '../../sass/checkout.scss'
class Checkout extends React.Component {
  renderItem ({ title, image, price, id }) {
    console.log(this.props, 'checkout')    

    return(
      <li className='list-item'>
        <img src={image} />
        <div>
          <h4 className='title'>{title}</h4>
          <span className='price'>
            <img src='./assets/coins.png' alt='' />
            {price} gil
          </span>
        </div>
        <button
          className='button'
          onClick={() => this.props.removeFromBasket(id)}
        >
          <img src='./assets/bin.png' />
        </button>
      </li>
    )
  }

  render() {
    return(
      <div className='checkout-container'>
        <img className='logo' src='./assets/logo.png' />
        <div className='checkout-inner-container'>
          <div className='content-container'>
            <button 
              className='button'
              onClick={this.props.goToHome}
            >
              Go Back
            </button>
            <ul className='list-container'>
              {this.props.data.map(this.renderItem.bind(this))}
            </ul>
            <div className='total'>
              <span>Total </span>{' '}
              {this.props.data.reduce((a, b) => a + b.price, 0)}{' '} Gil
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Checkout