import React from 'react'
import ReactDOM from 'react-dom'

import {ToastContainer, toast} from 'react-toastify'

import Navbar from '../src/components/Navbar'
import Home from '../src/components/Home'
import Checkout from '../src/components/Checkout'

import '../sass/style.scss'
import 'react-toastify/dist/ReactToastify.css'



const data = [
  {
    id: '1',
    title: 'Star Wars: Battlefront',
    description: 'Immerse yourself in the Ultimate star Wars Experience.',
    price: 300,
    image: '/assets/game1.jpg'
  },
  {
    id: '2',
    title: 'Dying Light',
    description: 'Dying Light is an open world first person survivor horror action adventure developed by Techland.',
    price: 500,
    image: '/assets/game2.jpg'
  },
  {
    id: '3',
    title: 'Bloodbourne',
    description: 'Bloobourne is an action role-playing video game developed by FromSoftware.',
    price: 9999,
    image: '/assets/game3.jpg'
  },
  {
    id: '4',
    title: 'Evolve',
    description: 'Evolve is a first person shooter video game developed by Turtle Rock Studios.',
    price: 150,
    image: '/assets/game4.jpg'
  }
]
class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentPage: 'HOME',
      selectedIds: []
    }

    this.navigate.bind(this)
    this.addToBasket.bind(this)
    this.removeFromBasket.bind(this)
  }
  
  // Function to navigate between pages
  navigate(page) {
    this.setState({ currentPage: page })
    console.log(this.state.currentPage, 'page')
  }

  addToBasket(id) {
    const currentSelectedIds = this.state.selectedIds.slice(0)
    !currentSelectedIds.includes(id) && currentSelectedIds.push(id)
    this.setState({ selectedIds: currentSelectedIds })
    toast.success('Successfully added to Basket', {
      containerId: 'A',
      position: toast.POSITION.TOP_CENTER
    })
  }

  removeFromBasket(id) {
    const newSelectedIds = []
    this.state.selectedIds.forEach(val => {
      if (val !== id) {
        newSelectedIds.push(val)
      }
    })
    this.setState({ selectedIds: newSelectedIds })
    toast.warn('Item removed', {
      containerId: 'B',
      position: toast.POSITION.TOP_RIGHT
    })
  }

  render() {
    return (
      <div className='main-container'>
        <Navbar />
        {this.state.currentPage === 'HOME' ? (
          <Home
            data={data}
            selectedIds={this.state.selectedIds}
            navigate={this.navigate}
            addToBasket={id => this.addToBasket(id)}
            removeFromBasket={id => this.removeFromBasket(id)}
            goToCheckout={() => this.navigate('CHECKOUT')}
          />
        ) : (
          <Checkout
            data={data.filter(val => this.state.selectedIds.includes(val.id))}
            removeFromBasket={id => this.removeFromBasket(id)}
            goToHome={() => this.navigate('HOME')}
          />
        )}
        <ToastContainer
          containerId='A'
          hideProgressBar={true}
          rtl={false}
          closeOnClick
          autoClose={2000}
        />
        <ToastContainer
          containerId='B'
          hideProgressBar={true}
          rtl={false}
          closeOnClick
          autoClose={2000}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)