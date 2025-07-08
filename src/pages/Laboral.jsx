import React from 'react'
import '../sass/pages/laboral.scss'
import { Link, NavLink } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Falabella from '../components/Falabella'
import Lapolar from '../components/Lapolar'
import Nutrimarket from '../components/Nutrimarket'

const laboral = () => {
    
    const setActiveClass = ({ isActive }) => (isActive ? "laboral_titulos-inner-container" : "laboral_titulos-inner-container-inactive");

  return (
    <div className='laboral_container'>
        <h3 className='laboral_container-titulo'>Experiencia laboral</h3>
        <div className='laboral_inner-container'>

            <div className='laboral_titulos'>
                <div className="laboral_titulos-linea"></div>

                <div className='laboral_titulos-container'>
                    <div className='laboral_titulos-punto'></div>
                    <NavLink to="/falabella" className={setActiveClass}>
                        <h4>Falabella</h4>
                        <p>2020 - 2025</p>
                    </NavLink>
                </div>



                <div className='laboral_titulos-container'>
                    <div className='laboral_titulos-punto'></div>
                    <NavLink to="/nutrimarket" className= {setActiveClass} >
                        <h4>Nutrimarket</h4>
                        <p>2020 - 2025</p>
                    </NavLink>
                </div>


                <div className='laboral_titulos-container'>
                    <div className='laboral_titulos-punto'></div>
                    <NavLink to="/lapolar" className={setActiveClass}>
                        <h4>La Polar</h4>
                        <p>2020 - 2025</p>
                    </NavLink>
                </div>



            </div>
            <div className='laboral_info-container'>
                <Routes>
                    <Route path="/falabella" element={<Falabella />} />
                    <Route path="/nutrimarket" element={<Nutrimarket />} />
                    <Route path="/lapolar" element={<Lapolar />} />
                </Routes>
            </div>
        </div>
    </div>
  )
}

export default laboral
