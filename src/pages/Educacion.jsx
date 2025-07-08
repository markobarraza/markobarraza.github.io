import React from 'react'
import '../sass/pages/Educacion.scss'

const Educacion = () => {
  return (
    <div className='educacion_container'>
        <h3>Educación</h3>
          <div className="educacion_inner-container">
            <div className="educacion_card-container">
              <h3>Academia Desafio Latam</h3>
              <p>Desarrollador Full Stack</p>
              <p>2024 - 2025</p>
            </div>
            <div className="educacion_card-container">
              <h3>Academia Desafio Latam</h3>
              <p>Desarrollador Front End</p>
              <p>2018</p>
            </div> 
            <div className="educacion_card-container">
              <h3>IP Duoc UC</h3>
              <p>Diseñador grafico</p>
              <p>2009 - 2012</p>
            </div>
          </div>
    </div>
  )
}

export default Educacion
