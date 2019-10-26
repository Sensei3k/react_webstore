import React from 'react'

import ProductCard from '../components/ProductCard'

class Home extends React.Component {
  constructor(props) {
    super(props)

    console.log(this.props, 'Home')
    console.log(this.props.data, 'data')
    // console.log(this.props.data.id, 'id')
    
  }

  render() {
    return(
      <div className='pages-container'>
        <div className='pages-inner-container'>
          <img className='logo' src="/assets/logo.png"/>
          <div className='home-left-side'>
            {this.props.data.map(data => {
              return(
                <ProductCard
                  key={data.id}
                  title={data.title}
                  description={data.description}
                  image={data.image}
                  price={data.price}
                  selected={this.props.selectedIds.includes(data.id)}
                  addTobasket={() => this.props.addTobasket(data.id)}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }

}


export default Home