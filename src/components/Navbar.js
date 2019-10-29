import React from 'react'

import '../../sass/navbar.scss'

class Navbar extends React.Component {
  render() {
    return(
      <section className="Navbar">
        <p><img src="./assets/telephone.png" /> 1337 1337 1337</p>
        <p><img src="./assets/flag.png" /> Try another Castle</p>
      </section>
    )
  }
}

export default Navbar