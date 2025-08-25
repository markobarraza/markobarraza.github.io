import React from 'react'
import '../sass/layout/_Navbar.scss'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='navbar_container'>
      <Link to="sobre-mi" smooth={true} duration={500}>
        <p>Sobre Mi</p>
      </Link>

      <Link to='trabajos' smooth={true} duration={500}>
        <p>Trabajos</p>
      </Link>
    </div>
  )
}

export default Navbar
