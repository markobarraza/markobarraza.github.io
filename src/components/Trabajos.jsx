import React from 'react'
import '../sass/pages/Trabajos.scss'
import ntg from '../assets/ntg.jpg'
import vitamin from '../assets/vitamin.jpg'
import actbrand from '../assets/actbrand.jpg'
import muebles from '../assets/muebles.jpg'
import gamer from '../assets/gamer.jpg'
import cuponera from '../assets/cuponera.jpg'
import { NavLink } from 'react-router-dom'
import { Element } from 'react-scroll'

const Trabajos = () => {
  return (
    <div>   
      <Element name="trabajos">

        <div className='trabajos_container'>
          <h3 className='trabajos_titulo'>Trabajos</h3>
          <div className="trabajos_inner-container">

            <div className="trabajo_card">
              <div className="prueba">
                <NavLink to="https://markobarraza.github.io/cuponera/" target="_blank" className="url_card">
                  <i class="fa-brands fa-github"></i>
                </NavLink>
                <NavLink to="https://github.com/markobarraza/cuponera" target="_blank" className="url_card">
                  <i class="fa-solid fa-link"></i>
                </NavLink>
                  
                
                
              </div>
              <img className='img_card' src={cuponera} alt="" />
            </div>
            
            
            <NavLink to="https://markobarraza.github.io/ntg-sport/" target="_blank" className="trabajo_card">
              <div className="prueba">ver</div>
              <img className='img_card' src={ntg} alt="" />
            </NavLink>

            <NavLink to="https://markobarraza.github.io/landing-gamer/" target="_blank" className="trabajo_card">
              <div className="prueba">ver</div>
              <img className='img_card' src={gamer} alt="" />
            </NavLink>

            <NavLink to="https://markobarraza.github.io/landing-muebles/" target="_blank" className="trabajo_card">
              <div className="prueba">ver</div>
              <img className='img_card' src={muebles} alt="" />
            </NavLink>

            <NavLink to="https://markobarraza.github.io/actbrand/" target="_blank" className="trabajo_card">
              <div className="prueba">ver</div>
              <img className='img_card' src={actbrand} alt="" />
            </NavLink>
            
            <NavLink to="https://markobarraza.github.io/vitamin-choice/" target="_blank" className="trabajo_card">
              <div className="prueba">ver</div>
              <img className='img_card' src={vitamin} alt="" />
            </NavLink>

            
            {/* <div className="trabajo_card"></div> */}
          </div>
        </div>
        
    </Element>
    </div>
  )
}

export default Trabajos
