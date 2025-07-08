import React from 'react'
import '../sass/pages/Perfil.scss'
import perfil from '../assets/profile-img.jpg'
import github from '../assets/icon-github.svg'

const Perfil = () => {
  return (
    <div className='perfil_container'>
        <img className='imgProfile' src={perfil} alt="" />
        <h2>Marco Barraza</h2>
        <p>Front End Junior con <br /> conocimientos en Back End</p>
        <div className='perfil_container-icons'>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
        </div>
    </div>
  )
}

export default Perfil
