import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from '../src/components/Navbar'

import '../sass/style.scss'

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Navbar />
      </div>
    )
  } 
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)