import React from 'react'
import '../sass/pages/Perfil.scss'
import perfil from '../assets/profile-img.jpg'
import github from '../assets/icon-github.svg'
import { NavLink } from 'react-router-dom'

const Perfil = () => {
  return (
    <div className='perfil_container'>
        <img className='imgProfile' src={perfil} alt="" />
        <h2>Marco Barraza</h2>
        <p>Front End Junior con <br /> conocimientos en Back End</p>
        <div className='perfil_container-icons'>
            <NavLink to="https://github.com/markobarraza">
              <i class="fa-brands fa-github"></i>
            </NavLink>
            
            <NavLink to="https://www.linkedin.com/in/marco-barraza/">
              <i class="fa-brands fa-linkedin"></i>
            </NavLink>
            
        </div>
    </div>
  )
}

export default Perfil
